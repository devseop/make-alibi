import styled from '@emotion/styled';
import AlibiFrom from 'components/AlibiForm';
import AlibiResult from 'components/AlibiResult';
import { useState } from 'react';
import { IInfo } from 'lib/types';

export default function ScreenContainer() {
  const [info, setInfo] = useState<IInfo>({
    name: '',
    date: '',
    time: '',
  });

  return (
    <Container>
      <AlibiFrom info={info} setInfo={setInfo} />
      <AlibiResult info={info} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  min-width: 1024px;
`;
