import React from 'react';
import { IInfo } from 'lib/types';

export default function AlibiResult({ info }: { info: IInfo }) {
  return (
    <div>
      <p>AlibiResult</p>
      <p>{info.name}</p>
      <p>{info.date}</p>
      <p>{info.time}</p>
    </div>
  );
}
