import { Component, OnInit } from '@angular/core';
import {Show} from '../../model/Show';
import {ListService} from '../../admin/dashboard/work-area/services/list.service';

@Component({
  selector: 'app-shows-slider',
  templateUrl: './shows-slider.component.html',
  styleUrls: ['./shows-slider.component.css']
})
export class ShowsSliderComponent implements OnInit {

  availableSliderShows: Show[] = [
    {
      id: 1,
      name: 'Spiderman 3',
      description: 'Spiderman 3',
      photoUrl: 'http://demo.amytheme.com/movie/demo/single-cinema/wp-content/uploads/2019/04/img_1.jpg',
      date: '2020/12/02',
      startTime: '21:00',
      endTime: '23:00',
      productionLocation: 'USA',
      language: 'Italiano',
      actors: null,
      directors: null,
      categories: [
        {
          id: 2,
          name: 'Azione'
        },
        {
          id: 3,
          name: 'Romantico'
        }
      ],
      room: 2,
      comingSoon: false
    },
    {
      id: 1,
      name: 'Spiderman 3',
      description: 'Spiderman 3',
      photoUrl: 'http://demo.amytheme.com/movie/demo/single-cinema/wp-content/uploads/2019/04/img_2.jpg',
      date: '2020/12/02',
      startTime: '21:00',
      endTime: '23:00',
      productionLocation: 'USA',
      language: 'Italiano',
      actors: null,
      directors: null,
      categories: [
        {
          id: 2,
          name: 'Azione'
        },
        {
          id: 3,
          name: 'Romantico'
        }
      ],
      room: 2,
      comingSoon: false
    },
    {
      id: 1,
      name: 'Spiderman 3',
      description: 'Spiderman 3',
      photoUrl: 'http://demo.amytheme.com/movie/demo/single-cinema/wp-content/uploads/2019/04/img_3.jpg',
      date: '2020/12/02',
      startTime: '21:00',
      endTime: '23:00',
      productionLocation: 'USA',
      language: 'Italiano',
      actors: null,
      directors: null,
      categories: [
        {
          id: 2,
          name: 'Azione'
        },
        {
          id: 3,
          name: 'Romantico'
        }
      ],
      room: 2,
      comingSoon: false
    },
    {
      id: 1,
      name: 'Spiderman 3',
      description: 'Spiderman 3',
      photoUrl: 'http://demo.amytheme.com/movie/demo/single-cinema/wp-content/uploads/2019/04/img_4.jpg',
      date: '2020/12/02',
      startTime: '21:00',
      endTime: '23:00',
      productionLocation: 'USA',
      language: 'Italiano',
      actors: null,
      directors: null,
      categories: [
        {
          id: 2,
          name: 'Azione'
        },
        {
          id: 3,
          name: 'Romantico'
        }
      ],
      room: 2,
      comingSoon: false
    },
    {
      id: 1,
      name: 'Spiderman 3',
      description: 'Spiderman 3',
      photoUrl: 'http://demo.amytheme.com/movie/demo/single-cinema/wp-content/uploads/2019/04/img_5.jpg',
      date: '2020/12/02',
      startTime: '21:00',
      endTime: '23:00',
      productionLocation: 'USA',
      language: 'Italiano',
      actors: null,
      directors: null,
      categories: [
        {
          id: 2,
          name: 'Azione'
        },
        {
          id: 3,
          name: 'Romantico'
        }
      ],
      room: 2,
      comingSoon: false
    },
    {
      id: 1,
      name: 'Spiderman 3',
      description: 'Spiderman 3',
      photoUrl: 'http://demo.amytheme.com/movie/demo/single-cinema/wp-content/uploads/2019/04/img_6.jpg',
      date: '2020/12/02',
      startTime: '21:00',
      endTime: '23:00',
      productionLocation: 'USA',
      language: 'Italiano',
      actors: null,
      directors: null,
      categories: [
        {
          id: 2,
          name: 'Azione'
        },
        {
          id: 3,
          name: 'Romantico'
        }
      ],
      room: 2,
      comingSoon: false
    },
    {
      id: 1,
      name: 'Spiderman 3',
      description: 'Spiderman 3',
      photoUrl: 'http://demo.amytheme.com/movie/demo/single-cinema/wp-content/uploads/2019/04/img_7.jpg',
      date: '2020/12/02',
      startTime: '21:00',
      endTime: '23:00',
      productionLocation: 'USA',
      language: 'Italiano',
      actors: null,
      directors: null,
      categories: [
        {
          id: 2,
          name: 'Azione'
        },
        {
          id: 3,
          name: 'Romantico'
        }
      ],
      room: 2,
      comingSoon: false
    },
    {
      id: 1,
      name: 'Spiderman 3',
      description: 'Spiderman 3',
      photoUrl: 'http://demo.amytheme.com/movie/demo/single-cinema/wp-content/uploads/2019/04/img_8.jpg',
      date: '2020/12/02',
      startTime: '21:00',
      endTime: '23:00',
      productionLocation: 'USA',
      language: 'Italiano',
      actors: null,
      directors: null,
      categories: [
        {
          id: 2,
          name: 'Azione'
        },
        {
          id: 3,
          name: 'Romantico'
        }
      ],
      room: 2,
      comingSoon: false
    }
  ];

  comingSoonSliderShows: Show[] = [
    {
      id: 1,
      name: 'Spiderman 3',
      description: 'Spiderman 3',
      photoUrl: 'http://demo.amytheme.com/movie/demo/single-cinema/wp-content/uploads/2019/04/img_1.jpg',
      date: '2020/12/02',
      startTime: '21:00',
      endTime: '23:00',
      productionLocation: 'USA',
      language: 'Italiano',
      actors: null,
      directors: null,
      categories: [
        {
          id: 2,
          name: 'Azione'
        },
        {
          id: 3,
          name: 'Romantico'
        }
      ],
      room: 2,
      comingSoon: false
    },
    {
      id: 1,
      name: 'Spiderman 3',
      description: 'Spiderman 3',
      photoUrl: 'http://demo.amytheme.com/movie/demo/single-cinema/wp-content/uploads/2019/04/img_2.jpg',
      date: '2020/12/02',
      startTime: '21:00',
      endTime: '23:00',
      productionLocation: 'USA',
      language: 'Italiano',
      actors: null,
      directors: null,
      categories: [
        {
          id: 2,
          name: 'Azione'
        },
        {
          id: 3,
          name: 'Romantico'
        }
      ],
      room: 2,
      comingSoon: false
    },
    {
      id: 1,
      name: 'Spiderman 3',
      description: 'Spiderman 3',
      photoUrl: 'http://demo.amytheme.com/movie/demo/single-cinema/wp-content/uploads/2019/04/img_3.jpg',
      date: '2020/12/02',
      startTime: '21:00',
      endTime: '23:00',
      productionLocation: 'USA',
      language: 'Italiano',
      actors: null,
      directors: null,
      categories: [
        {
          id: 2,
          name: 'Azione'
        },
        {
          id: 3,
          name: 'Romantico'
        }
      ],
      room: 2,
      comingSoon: false
    },
    {
      id: 1,
      name: 'Spiderman 3',
      description: 'Spiderman 3',
      photoUrl: 'http://demo.amytheme.com/movie/demo/single-cinema/wp-content/uploads/2019/04/img_4.jpg',
      date: '2020/12/02',
      startTime: '21:00',
      endTime: '23:00',
      productionLocation: 'USA',
      language: 'Italiano',
      actors: null,
      directors: null,
      categories: [
        {
          id: 2,
          name: 'Azione'
        },
        {
          id: 3,
          name: 'Romantico'
        }
      ],
      room: 2,
      comingSoon: false
    },
    {
      id: 1,
      name: 'Spiderman 3',
      description: 'Spiderman 3',
      photoUrl: 'http://demo.amytheme.com/movie/demo/single-cinema/wp-content/uploads/2019/04/img_5.jpg',
      date: '2020/12/02',
      startTime: '21:00',
      endTime: '23:00',
      productionLocation: 'USA',
      language: 'Italiano',
      actors: null,
      directors: null,
      categories: [
        {
          id: 2,
          name: 'Azione'
        },
        {
          id: 3,
          name: 'Romantico'
        }
      ],
      room: 2,
      comingSoon: false
    },
    {
      id: 1,
      name: 'Spiderman 3',
      description: 'Spiderman 3',
      photoUrl: 'http://demo.amytheme.com/movie/demo/single-cinema/wp-content/uploads/2019/04/img_6.jpg',
      date: '2020/12/02',
      startTime: '21:00',
      endTime: '23:00',
      productionLocation: 'USA',
      language: 'Italiano',
      actors: null,
      directors: null,
      categories: [
        {
          id: 2,
          name: 'Azione'
        },
        {
          id: 3,
          name: 'Romantico'
        }
      ],
      room: 2,
      comingSoon: false
    },
    {
      id: 1,
      name: 'Spiderman 3',
      description: 'Spiderman 3',
      photoUrl: 'http://demo.amytheme.com/movie/demo/single-cinema/wp-content/uploads/2019/04/img_7.jpg',
      date: '2020/12/02',
      startTime: '21:00',
      endTime: '23:00',
      productionLocation: 'USA',
      language: 'Italiano',
      actors: null,
      directors: null,
      categories: [
        {
          id: 2,
          name: 'Azione'
        },
        {
          id: 3,
          name: 'Romantico'
        }
      ],
      room: 2,
      comingSoon: false
    },
    {
      id: 1,
      name: 'Spiderman 3',
      description: 'Spiderman 3',
      photoUrl: 'http://demo.amytheme.com/movie/demo/single-cinema/wp-content/uploads/2019/04/img_8.jpg',
      date: '2020/12/02',
      startTime: '21:00',
      endTime: '23:00',
      productionLocation: 'USA',
      language: 'Italiano',
      actors: null,
      directors: null,
      categories: [
        {
          id: 2,
          name: 'Azione'
        },
        {
          id: 3,
          name: 'Romantico'
        }
      ],
      room: 2,
      comingSoon: false
    }
  ];

  actionSliderConfig = {
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: true,
    infinite: true,
    centerMode: true,
    responsive: [
      {breakpoint: 480,
        settings: {slidesToShow: 1, slidesToScroll: 1}},
      {breakpoint: 979, settings: {slidesToShow: 3, slidesToScroll: 3}},
      {breakpoint: 1199, settings: {slidesToShow: 5, slidesToScroll: 5}},
      {breakpoint: 1999, settings: {slidesToShow: 7, slidesToScroll: 7}},
      {breakpoint: 4999, settings: {slidesToShow: 7, slidesToScroll: 7}}],
    dots: false
  };

  ngOnInit(): void {

    // TODO: To implement after Database changes
    /* this.listService.getShows().subscribe(
      (data) => this.sliderShows = data
    );*/
  }

  constructor(private listService: ListService) {
  }

}
