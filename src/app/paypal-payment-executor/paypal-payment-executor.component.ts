import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ICreateOrderRequest, IPayPalConfig} from 'ngx-paypal';
import {BookingEventService} from './services/booking-event.service';

@Component({
  selector: 'app-paypal-payment-executor',
  templateUrl: './paypal-payment-executor.component.html',
  styleUrls: ['./paypal-payment-executor.component.css']
})
export class PaypalPaymentExecutorComponent implements OnInit {

  @ViewChild('bookingFailedToastAlert') bookingFailedAlert;
  @ViewChild('paymentFailedToastAlert') paymentFailedAlert;
  @ViewChild('couponInvalidAlert') couponInvalidAlert;
  @ViewChild('bookingCompletedToastAlert') bookingCompletedAlert;
  @ViewChild('paymentCompletedToastAlert') paymentCompletedAlert;
  @ViewChild('couponValidAlert') couponValidAlert;
  public position = { X: 'Left'};

  public payPalConfig?: IPayPalConfig;
  bookingCompleted: boolean;
  bookingTrying: boolean;
  bookingConfirmation: boolean;
  couponTrying: boolean;
  bookingIdentifier: object;
  couponCode: string;
  discount: number;
  @Input() eventsBookingDetails: object[];
  @Input() eventsBookingTotalPrice: number;

  constructor(private bookingEventService: BookingEventService) { }

  ngOnInit(): void {
    this.bookingCompleted = false;
    this.bookingTrying = false;
    this.bookingConfirmation = false;
    this.couponTrying = false;
  }

  private countTotalSeatsBooked(bookingDetails: object[]): number {
    let seats = 0;
    for (let i = 0; i < bookingDetails.length; i++) {
      seats += bookingDetails[i]['seats'].length;
    }

    return seats;
  }

  private checkBookingAvailability(): void{
    this.bookingTrying = true;
    this.bookingEventService.bookEventsSeats(this.eventsBookingDetails).subscribe(
      data => {
        this.bookingIdentifier = data;
      },
      error => {
        this.bookingFailedAlert.show();
        this.bookingTrying = false;
      },
      () => {
        this.bookingCompletedAlert.show();
        this.bookingCompleted = true;
        this.initConfig();
      }
    );
  }

  private verifyCouponAvailability(): void {
    this.couponTrying = true;
    this.bookingEventService.verifiyCouponValidity(this.couponCode).subscribe(
      data => {
        console.log(data);
        this.discount = data;
      },
      error => {
        this.couponInvalidAlert.show();
        this.couponTrying = false;
      },
      () => {
        this.couponValidAlert.show();
        this.couponTrying = false;
        this.eventsBookingTotalPrice -= this.discount;
        this.initConfig();
      }
    );
  }

  private initConfig(): void {
    this.payPalConfig = {
      currency: 'EUR',
      clientId: 'AUuQsZ6W_kSfRMWY_JWNer6Ho-eU3XDcVAgce3CZYj8LhYJO4ZiL9AME6LMbWHPxGkbTVp3zHpoQudsR',
      createOrderOnClient: (data) => <ICreateOrderRequest>{
        intent: 'CAPTURE',
        purchase_units: [
          {
            amount: {
              currency_code: 'EUR',
              value: this.eventsBookingTotalPrice.toString(),
              breakdown: {
                item_total: {
                  currency_code: 'EUR',
                  value: this.eventsBookingTotalPrice.toString()
                }
              }
            },
            items: [
              {
                name: 'Prenotazione Biglietti CineMaster',
                quantity: this.countTotalSeatsBooked(this.eventsBookingDetails).toString(),
                category: 'DIGITAL_GOODS',
                unit_amount: {
                  currency_code: 'EUR',
                  value: this.eventsBookingTotalPrice.toString(),
                },
              }
            ]
          }
        ]
      },
      advanced: {
        commit: 'true'
      },
      style: {
        label: 'paypal',
        layout: 'vertical'
      },
      onApprove: (data, actions) => {
        actions.order.get().then(details => {});
      },
      onClientAuthorization: (data) => {
        this.bookingConfirmation = true;
        this.bookingEventService.paymentCompletedNotification([{
          booking: this.bookingIdentifier[0],
          price: this.eventsBookingTotalPrice
        }]).subscribe(
          value => {

          },
          error => {
            this.paymentFailedAlert.show();
          },
          () => {
            this.paymentCompletedAlert.show();
            this.bookingCompleted = false;
            this.bookingTrying = false;
            this.bookingConfirmation = false;
          }
        );
      },
      onCancel: (data, actions) => {},
      onError: err => {},
      onClick: (data, actions) => {},
    };
  }

}
