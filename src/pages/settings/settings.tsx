import { useNavigate } from 'react-router-dom';
import SubmitButton from '../../components/generall/submitButton/submitButton';
import { useAppDispatch, useAppSelector } from '../../store/hooks/redux';
import Counter from '../../components/generall/counter/counter';
import updateSettings from '../../store/actions/updateSettings';
import { calculateQuantity } from '../../utils/utils';
import { players } from '../../store/types/storeTypes';
import './settings.scss';
const Settings = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const settings = useAppSelector((state) => state.settingsReducer);

  return (
    <div className="settings-wrapper">
      <SubmitButton
        text={'Play'}
        onClick={() => {
          navigate('/game');
        }}
      />
      <div className="settings-buttons">
        <Counter
          title={'quantity'}
          value={settings.quantity}
          onChange={(value) => dispatch(updateSettings({ quantity: value }))}
        />
        {calculateQuantity(settings.quantity)}
        <Counter
          title={'maxCount'}
          value={settings.maxCount}
          onChange={(value) => dispatch(updateSettings({ maxCount: value }))}
        />
      </div>
      Who will start: {settings.whosTurn}
      <div className="settings-buttons">
        <SubmitButton
          text={players.PLAYER}
          onClick={() => {
            dispatch(updateSettings({ whosTurn: players.PLAYER }));
          }}
        />
        <SubmitButton
          text={players.AI}
          onClick={() => {
            dispatch(updateSettings({ whosTurn: players.AI }));
          }}
        />
      </div>
    </div>
  );
};
export default Settings;
