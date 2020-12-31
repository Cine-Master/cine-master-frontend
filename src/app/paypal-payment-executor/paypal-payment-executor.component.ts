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
  @ViewChild('bookingCompletedToastAlert') bookingCompletedAlert;
  @ViewChild('paymentCompletedToastAlert') paymentCompletedAlert;
  public position = { X: 'Left'};

  public payPalConfig?: IPayPalConfig;
  bookingCompleted: boolean;
  bookingTrying: boolean;
  showSuccess: boolean;
  @Input() eventsBookingDetails: object[];

  constructor(private bookingEventService: BookingEventService) { }

  ngOnInit(): void {
    this.bookingCompleted = false;
  }

  private checkBookingAvailability(): void{
    this.bookingTrying = true;
    console.log(this.eventsBookingDetails);
    /*this.bookingEventService.bookEventsSeats(this.eventsBookingDetails).subscribe(
      value => {

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
    );*/
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
              value: '9.99',
              breakdown: {
                item_total: {
                  currency_code: 'EUR',
                  value: '9.99'
                }
              }
            },
            items: [
              {
                name: 'Enterprise Subscription',
                quantity: '1',
                category: 'DIGITAL_GOODS',
                unit_amount: {
                  currency_code: 'EUR',
                  value: '9.99',
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
        console.log('onApprove - transaction was approved, but not authorized', data, actions);
        actions.order.get().then(details => {
          console.log('onApprove - you can get full order details inside onApprove: ', details);
        });
      },
      onClientAuthorization: (data) => {
        console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
        this.showSuccess = true;
      },
      onCancel: (data, actions) => {
        console.log('OnCancel', data, actions);
      },
      onError: err => {
        console.log('OnError', err);
      },
      onClick: (data, actions) => {
        console.log('onClick', data, actions);
      },
    };
  }

}
