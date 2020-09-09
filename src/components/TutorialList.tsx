import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 0 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  > img {
    width: 15vh;
    height: 10vh;
    margin: 4px 0;
    object-fit: cover;
  }
`;

interface Props {
  images: Array<string>;
}

const TutorialList: React.FC<Props> = (props) => {
  const { images } = props;
  return (
    <Wrapper>
      {images.map(
        (image): JSX.Element => (
          <img src={image} alt="" key={+new Date().toString() + image} />
        )
      )}
    </Wrapper>
  );
};

export default TutorialList;
