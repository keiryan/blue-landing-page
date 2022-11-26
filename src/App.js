import "./App.css";
import {
  AppContainer,
  BackgroundImageContainer,
  FormContainer,
  BottomLinkContainer,
  BottomLink,
  CompanyName,
} from "./app.styles";

import LoginForm from "./Components/Form/form";

function App() {

  return (
    <AppContainer>
      <BackgroundImageContainer></BackgroundImageContainer>
      <FormContainer>
        <div></div>
        <LoginForm />
        <BottomLinkContainer>
          <BottomLink>Help</BottomLink>
          <BottomLink>Legal</BottomLink>
          <BottomLink>Privacy</BottomLink>
          <BottomLink>TOS</BottomLink>
        </BottomLinkContainer>
      </FormContainer>
    </AppContainer>
  );
}

export default App;
