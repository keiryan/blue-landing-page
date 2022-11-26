import styled from "styled-components";

const breakpoints = {
  tablet: 768,
};

export const StyledLink = styled.a`
  color: #0073b1;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;

export const Base = styled.div`
  display: flex;
`;

export const AppContainer = styled(Base)`
  width: 100vw;
  height: 100vh;
`;

const Half = styled(Base)`
  flex: 1;
`;

export const BackgroundImageContainer = styled(Half)`
  background-image: url("abstract-overlapping-blue-background-free-vector.jpg");
  background-size: cover;
  background-position: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const FormContainer = styled(Half)`
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px) {
    background-image: url("abstract-overlapping-blue-background-free-vector.jpg");
    background-size: cover;
    background-position: center;
  }
`;

export const BottomLinkContainer = styled(Base)`
  gap: 12px;
  margin: 20px 0;
  font-size: 10px;
`;

export const BottomLink = styled(StyledLink)`
  color: #91959b;
  @media screen and (max-width: 768px) {
    color: #fff;
  }
`;
