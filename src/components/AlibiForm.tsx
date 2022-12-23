import React from 'react';
import { IAlibiForm } from 'lib/types';

export default function AlibiFrom({ info, setInfo }: IAlibiForm) {
  const handleFormInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        placeholder="이름"
        value={info.name}
        onChange={handleFormInfo}
      />
      <input
        type="date"
        name="date"
        placeholder="날짜"
        value={info.date}
        onChange={handleFormInfo}
      />
      <input
        type="text"
        name="time"
        placeholder="시간"
        value={info.time}
        onChange={handleFormInfo}
      />
    </div>
  );
}
