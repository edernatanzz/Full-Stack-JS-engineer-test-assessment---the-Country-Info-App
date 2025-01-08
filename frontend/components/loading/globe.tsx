'use client';

import styled, { keyframes } from "styled-components";

const spinHorizontal = keyframes`
  0% {
    transform: rotateX(0deg);
  }
  100% {
    transform: rotateX(360deg); 
  }
`;

const GlobeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;

const Globe = styled.i`

  font-size: 75px;
  color: #ffffff;
  animation: ${spinHorizontal} 6s linear infinite;
  cursor:pointer;
`;
const Alink= styled.a``

const RotatingGlobe = () => {
    
  return (
    <GlobeContainer>
      <Alink href="/country"><Globe className="bx bx-planet"></Globe></Alink>
    </GlobeContainer>
  );
};

export default RotatingGlobe;
