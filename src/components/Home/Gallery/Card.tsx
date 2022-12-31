import React, { memo } from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import Image from 'next/image';

const Container = styled.div`
  background-color: transparent;
  margin: 0;
  padding: 0;
  border: 0;
  transition: all 0.2s;
  position: relative;

  img {
    width: 100%;
    height: auto;
    margin: auto;
    display: block;
  }

  &:hover {
    transform: scale(1.08, 1.08);
    z-index: 5;
    /* box-shadow: 2px 2px 4px #05a1a7, 4px 4px 8px #05a1a7; */
  }
`;

function Card(props: { image: any; alt: string }) {
  const { image, alt } = props;
  return (
    <Container className="card">
      <Fade>
        <Image
          src={image}
          alt={alt}
          width={300}
          height={300}
          style={{
            width: '33.4vw',
            height: 'auto',
            maxHeight: '300px',
            objectFit: 'cover',
          }}
        />
      </Fade>
    </Container>
  );
}

export default memo(Card);
