import {FileInfo} from '@syncfusion/ej2-angular-inputs';

export interface Show {
  id: number;
  title: string;
  description: string;
  coverImageRawData: string | Blob;
  coverImageExtension: string;
  date: Date;
  startTime: Date;
  endTime: Date;
  productionLocation: string;
  language: string;
}
