import './submitButton.scss';
import { FC } from 'react';
import { submitbuttonProps } from './submitButton.type';

const SubmitButton: FC<submitbuttonProps> = ({ text, type, disabled, onClick }) => {
  return (
    <button disabled={disabled} className="submit-button" type={type} onClick={onClick}>
      {text}
    </button>
  );
};

export default SubmitButton;
