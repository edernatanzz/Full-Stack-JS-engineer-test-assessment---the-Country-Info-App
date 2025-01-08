'use client';
import styled from "styled-components";
import RotatingGlobe from "../loading/globe";

const PresentationContainer = styled.div`
  background-color: #000; 
  color: #fff; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
  padding: 2rem;
  position: relative;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin: 0;
  color: var(--color-text-presentation);

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const FlagsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 10%;
  left: 5%;
  right: 5%;

  @media (max-width: 768px) {
    top: 5%;
    flex-direction: column;
    gap: 1rem;
  }

  @media (max-width: 480px) {
    gap: 0.5rem;
  }
`;

const FlagColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }

  @media (max-width: 480px) {
    flex-wrap: wrap;
    gap: 0.5rem;
  }
`;

const Flag = styled.img`
  width: 60px;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    width: 50px;
  }

  @media (max-width: 480px) {
    width: 40px;
  }
`;

const Footer = styled.div`
  position: absolute;
  bottom: 2rem;
  text-align: center;
  font-size: 1rem;
  font-weight: bold;
  color: #aaa;

  @media (max-width: 768px) {
    bottom: 1rem;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const Presentation = () => {
  return (
    <PresentationContainer>
      <FlagsContainer>
        <FlagColumn>
          <Flag src="/flags/flag1.png" alt="Flag 1" />
          <Flag src="/flags/flag2.png" alt="Flag 2" />
          <Flag src="/flags/flag3.png" alt="Flag 3" />
          <Flag src="/flags/flag1.png" alt="Flag 1" />
          <Flag src="/flags/flag2.png" alt="Flag 2" />
          <Flag src="/flags/flag3.png" alt="Flag 3" />
        </FlagColumn>
        <FlagColumn>
        <Flag src="/flags/flag1.png" alt="Flag 1" />
          <Flag src="/flags/flag2.png" alt="Flag 2" />
          <Flag src="/flags/flag3.png" alt="Flag 3" />
          <Flag src="/flags/flag1.png" alt="Flag 1" />
          <Flag src="/flags/flag2.png" alt="Flag 2" />
          <Flag src="/flags/flag3.png" alt="Flag 3" />
        </FlagColumn>
      </FlagsContainer>
      <Title>Welcome to the Country Info App</Title>
      <Subtitle>Explore information about countries!</Subtitle>
      <Footer>Created by Eder Natan</Footer>
      <RotatingGlobe/>
    </PresentationContainer>
  );
};

export default Presentation;
