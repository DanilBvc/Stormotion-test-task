import { FC } from 'react';
import './counter.scss';
import SubmitButton from '../submitButton/submitButton';
const Counter: FC<{ title: string; value: number; onChange: (value: number) => void }> = ({
  title,
  value,
  onChange,
}) => {
  const incrementClicks = () => {
    onChange(value + 1);
  };

  const decrementClicks = () => {
    onChange(value - 1);
  };
  return (
    <div className="counter-wrapper">
      <p className="counter-title">{title}</p>
      <SubmitButton text={'+'} onClick={incrementClicks} />
      <p className="counter">{value}</p>
      <SubmitButton text="-" onClick={decrementClicks} />
    </div>
  );
};
export default Counter;
