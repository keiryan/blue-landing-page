import { useState } from "react";
import {
  Container,
  Form,
  FormRow,
  DualInputContainer,
  InputContainer,
  Label,
  FormHeader,
  TermsContainer,
  Terms,
  ToggleContainer,
  CreateAccountButton,
  Divider,
  HaveAnAccount,
  LoginLink,
} from "./styles.form";
import { StyledLink } from "../../app.styles";
import Input from "../Input/input";
import Toggle from "../Toggle/toggle";

export default function LoginForm() {
  const [loginInfo, setLoginInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  return (
    <Container>
      <FormHeader>Register</FormHeader>
      <Form>
        <FormRow>
          <DualInputContainer>
            <InputContainer>
              <Label>First Name</Label>
              <Input type="text" placeholder="First Name" />
            </InputContainer>

            <InputContainer>
              <Label>Last Name</Label>
              <Input type="text" placeholder="Last Name" />
            </InputContainer>
          </DualInputContainer>
        </FormRow>
        <FormRow>
          <InputContainer>
            <Label>Email Address</Label>
            <Input type="email" placeholder="Email Address" />
          </InputContainer>
        </FormRow>

        <FormRow>
          <InputContainer>
            <Label>Password</Label>
            <Input type="password" placeholder="Your Password" />
          </InputContainer>
        </FormRow>
        <TermsContainer>
          <ToggleContainer>
            <Toggle
              toggledSettings={{
                toggled: false,
                container: {
                  outerHeight: 16,
                  outerWidth: 26,
                  toggledColor: "#308CE7",
                  padding: 1,
                },
                inner: {
                  toggleSize: 14,
                },
              }}
            />
          </ToggleContainer>

          <Terms>
            I agree to the <StyledLink>Terms of Service</StyledLink> as well as
            the <StyledLink>Privacy Policy</StyledLink>
          </Terms>
        </TermsContainer>
        <CreateAccountButton>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            enable-background="new 0 0 24 24"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#ffffff"
          >
            <g>
              <rect fill="none" height="24" width="24" />
            </g>
            <g>
              <path d="M11,7L9.6,8.4l2.6,2.6H2v2h10.2l-2.6,2.6L11,17l5-5L11,7z M20,19h-8v2h8c1.1,0,2-0.9,2-2V5c0-1.1-0.9-2-2-2h-8v2h8V19z" />
            </g>
          </svg>
          Create Account
        </CreateAccountButton>
        <Divider />
      </Form>
      <HaveAnAccount>
        Already have an account? <LoginLink>Login Now</LoginLink>
      </HaveAnAccount>
    </Container>
  );
}
