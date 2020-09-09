import React from 'react';
import styled from 'styled-components';

import CameraPad from './components/CameraPad';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <Wrapper>
      <CameraPad />
    </Wrapper>
  );
}

export default App;
