import { settings, settingsReducerPayload } from '../types/storeTypes';

const updateSettings = (payload: settingsReducerPayload) => ({
  type: settings.UPDATE_SETTINGS,
  payload,
});
export default updateSettings;
