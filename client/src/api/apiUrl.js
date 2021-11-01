const apiBaseUrl = 'http://localhost:3001';
// const apiBaseUrl = 'http://192.168.1.119:3001';

export const apiUrl = {
  apiCheckUserEmail: `${apiBaseUrl}/api/get_available_users`,
  apiSignUp: `${apiBaseUrl}/api/signup`,
  apiSignIn: `${apiBaseUrl}/api/signin`,
  apiUserAuth: `${apiBaseUrl}/api/user_authentication`,
  apiUpdateName: `${apiBaseUrl}/api/update_name`,
  apiUpdatePassword: `${apiBaseUrl}/api/update_password`,
  apiApplyEmployee: `${apiBaseUrl}/api/get_supervisor`,
  apiGetRole: `${apiBaseUrl}/api/user_role`,
  apiGetState: `${apiBaseUrl}/api/get_state`,
  apiUpdateMode: `${apiBaseUrl}/api/put_state_mode`,
  apiUpdateMotor1: `${apiBaseUrl}/api/put_state_relaymotor1`,
  apiUpdateHumidifier1: `${apiBaseUrl}/api/put_state_humidifier1`,
  apiUpdateMotor2: `${apiBaseUrl}/api/put_state_relaymotor2`,
  apiUpdateHumidifier2: `${apiBaseUrl}/api/put_state_humidifier2`
};