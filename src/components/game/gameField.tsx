import { FC } from 'react';
import './gameField.scss';
const GameField: FC<{ items: number }> = ({ items }) => {
  return (
    <div className="field-wrapper">
      <div className="field-items">
        {Array.from({ length: items }, (_, index) => (
          <div key={index} className="field-item">
            ⚽️
          </div>
        ))}
      </div>
      <div className="field-length">{items}</div>
    </div>
  );
};
export default GameField;
