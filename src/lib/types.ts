import { Dispatch, SetStateAction } from 'react';

export interface IInfo {
  name: string;
  date: string;
  time: string;
}

export interface IAlibiForm {
  info: IInfo;
  setInfo: Dispatch<SetStateAction<IInfo>>;
}
