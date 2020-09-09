import React from 'react';
import Sketch from 'react-p5';
import styled from 'styled-components';
import TutorialList from './TutorialList';

import tutorPic1 from '../statics/images/tutorial/pic1.png';
import tutorPic2 from '../statics/images/tutorial/pic2.png';
import tutorPic3 from '../statics/images/tutorial/pic3.png';
import tutorPic4 from '../statics/images/tutorial/pic4.png';
import tutorPic5 from '../statics/images/tutorial/pic5.png';
import tutorPic6 from '../statics/images/tutorial/pic6.png';
import tutorPic7 from '../statics/images/tutorial/pic7.png';
import tutorPic8 from '../statics/images/tutorial/pic8.png';
import tutorPic9 from '../statics/images/tutorial/pic9.png';
import tutorPic10 from '../statics/images/tutorial/pic10.png';
import tutorPic11 from '../statics/images/tutorial/pic11.png';
import tutorPic12 from '../statics/images/tutorial/pic12.png';

const tutorialImagesSource = [
  tutorPic1,
  tutorPic2,
  tutorPic3,
  tutorPic4,
  tutorPic5,
  tutorPic6,
  tutorPic7,
  tutorPic8,
  tutorPic9,
  tutorPic10,
  tutorPic11,
  tutorPic12
];

const Wrapper = styled.div`
  padding: 8px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: #000000;
`;

const CameraPad: React.FC = () => {
  return (
    <Wrapper>
      <TutorialList images={tutorialImagesSource.slice(0, 6)} />
      <TutorialList images={tutorialImagesSource.slice(6)} />
    </Wrapper>
  );
};

export default CameraPad;
