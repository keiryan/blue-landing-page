import { useState } from "react";
import { StyledInput, InputContainer } from "./styles.input";

export default function Input(props) {
  const handleChange = (e) => {
    console.log(e.target.value);
    // props.handleChange(e.target.value);
  };
  return (
    <InputContainer>
      <StyledInput
        type={props.type || "text"}
        placeholder={props.placeholder || "Enter text"}
      />
    </InputContainer>
  );
}
