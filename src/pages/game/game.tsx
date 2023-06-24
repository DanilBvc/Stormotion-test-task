import { useEffect, useState } from 'react';
import GameField from '../../components/game/gameField';
import SubmitButton from '../../components/generall/submitButton/submitButton';
import { useAppSelector } from '../../store/hooks/redux';
import { aiLogic, calculateQuantity, whoWinner } from '../../utils/utils';
import { players } from '../../store/types/storeTypes';
import Modal from '../../components/generall/modal/modal';
import './game.scss';
import { useNavigate } from 'react-router-dom';
const Game = () => {
  const settings = useAppSelector((state) => state.settingsReducer);
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const [gameScore, setGameScore] = useState({
    AI: 0,
    PLAYER: 0,
    quantity: calculateQuantity(settings.quantity),
    whosTurn: settings.whosTurn,
  });

  const increaseScore = (count: number) => {
    const updatedScore = {
      ...gameScore,
      [gameScore.whosTurn]: gameScore[gameScore.whosTurn] + count,
      quantity: gameScore.quantity - count,
      whosTurn: gameScore.whosTurn === players.AI ? players.PLAYER : players.AI,
    };
    setGameScore(updatedScore);
  };

  const resetGame = () => {
    setGameScore({
      AI: 0,
      PLAYER: 0,
      quantity: calculateQuantity(settings.quantity),
      whosTurn: settings.whosTurn,
    });
    setModal(false);
  };

  useEffect(() => {
    if (gameScore.quantity === 0) {
      setModal(true);
    }
  }, [gameScore]);

  useEffect(() => {
    if (gameScore.whosTurn === players.AI && gameScore.quantity !== 0) {
      const aiTurn = aiLogic(gameScore.quantity, settings.maxCount);
      setGameScore({
        ...gameScore,
        AI: gameScore.AI + aiTurn,
        quantity: gameScore.quantity - aiTurn,
        whosTurn: players.PLAYER,
      });
    }
  }, [gameScore, settings.maxCount]);

  return (
    <>
      <Modal closeModal={resetGame} open={modal} additionalClass={''}>
        winner: {whoWinner(gameScore.PLAYER, gameScore.AI)}
      </Modal>
      <div className="game-wrapper">
        <span>{gameScore.whosTurn} turn</span>
        <div className="ai-wrapper">{<GameField items={gameScore.AI} />}</div>
        <div className="quantity-wrapper">{<GameField items={gameScore.quantity} />}</div>
        <div className="player-wrapper">{<GameField items={gameScore.PLAYER} />}</div>
        <div className="controlls">
          {Array.from({ length: settings.maxCount }, (_, item: number) => (
            <SubmitButton
              disabled={gameScore.quantity < item + 1}
              text={`${item + 1}`}
              key={item}
              onClick={() => increaseScore(item + 1)}
            />
          ))}
        </div>
        <SubmitButton
          text={'back to settings'}
          onClick={() => {
            navigate('/');
          }}
        />
      </div>
    </>
  );
};
export default Game;
