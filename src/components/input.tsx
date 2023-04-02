import React from "react";
import TextField from "@mui/material/TextField";

interface IProps {
  text: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
}

const Input = ({ text, onChange }: IProps) => {
  return (
    <div className="relative">
      <TextField
        label="Email"
        value={text}
        onChange={onChange}
        placeholder="example@email.com"
      />
    </div>
  );
};

export default Input;
