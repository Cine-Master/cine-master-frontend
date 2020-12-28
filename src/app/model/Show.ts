import {FileInfo} from '@syncfusion/ej2-angular-inputs';

export interface Show {
  id: number;
  name: string;
  description: string;

  // TODO: To implement in the next Sprint

  /*
  coverImageRawData: string | Blob;
  coverImageExtension: string;
  */
  photoUrl: string;
  date: string;
  startTime: string;
  endTime: string;
  productionLocation: string;
  language: string;
  actors: any[];
  directors: any[];
  categories: any[];
  room: any;
  comingSoon: boolean;
}
