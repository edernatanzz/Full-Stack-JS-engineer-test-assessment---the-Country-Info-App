'use client';
import styled from "styled-components";
import 'boxicons/css/boxicons.min.css';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(
    to right,
    var(--color-primary-gradient-start),
    var(--color-primary-gradient-end)
  );
  color: var(--color-white);
  padding: 1rem 2rem;
  border-bottom: 2px solid var(--color-border);
  z-index: 999;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Navlink = styled.a`
  display: flex;
  align-items: center;
  color: var(--color-white);
  text-decoration: none;
  font-weight: 500;
  margin: 0;
  gap: 0.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #bee3f8;
  }

  span {
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Title>Country Info App</Title>
      <Nav>
        <Navlink href="/">
          <i className="bx bx-home-alt-2" style={{ fontSize: '1.2rem' }}></i>
          <span>Home</span>
        </Navlink>
        |
        <Navlink href="/country">
          <i className="bx bx-globe" style={{ fontSize: '1.2rem' }}></i>
          <span>Countries</span>
        </Navlink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
