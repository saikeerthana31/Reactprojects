import React from "react";

interface TextInputProps {
  text: string;
  setText: (value: string) => void;
}

const TextInput: React.FC<TextInputProps> = ({ text, setText }) => {
  return (
    <input
      type="text"
      value={text}
      onChange={(e) => setText(e.target.value)}
      className="text-input"
    />
  );
};

export default TextInput;
