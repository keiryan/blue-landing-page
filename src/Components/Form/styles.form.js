import styled from "styled-components";
import { Base, StyledLink} from "../../app.styles";

export const Container = styled(Base)`
  flex-direction: column;
  @media screen and (max-width: 768px) {
    background-color: #fff;
    padding: 30px 60px;
    border-radius: 16px;
  }
`;

export const Form = styled(Base)`
  flex-direction: column;
`;

export const FormRow = styled.div`
  margin: 12px 0;
`;

export const FormHeader = styled.h2`
  font-size: 22px;
`;

export const InputContainer = styled(Base)`
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 12px;
  margin: 6px 0;
`;

export const DualInputContainer = styled(Base)`
  gap: 12px;
`;

export const TermsContainer = styled(Base)`
  font-size: 10px;
  align-items: center;
`;

export const Terms = styled.div``;

export const ToggleContainer = styled.div`
  margin-right: 10px;
`;

export const CreateAccountButton = styled(Base)`
  background-color: #308ce7;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  gap: 12px;
  align-items: center;
  padding: 4px 12px 4px 8px;
  margin: 20px 0px;
  border-radius: 4px;
  width: max-content;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.4);
  cursor: pointer;
`;

export const Divider = styled.div`
  width: 100%;
  margin: 20px 0;
  border-bottom: 1px solid #ebebeb;
`;

export const HaveAnAccount = styled.div`
  font-size: 10px;
  text-align: center;
  color: #91959b;
`;

export const LoginLink = styled(StyledLink)`
  font-weight: bold;
`;


