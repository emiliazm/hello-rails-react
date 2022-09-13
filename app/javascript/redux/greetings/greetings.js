import getGreetingsApi from '../api/api';

const GET_GREETINGS = 'hello-react-front-end/greetings/GET_GREETINGS';

const initialState = '';

export const getGreetings = () => async (dispatch) => {
  const data = await getGreetingsApi();
  dispatch({ type: GET_GREETINGS, data });
};

export const reducerGreetings = (state = initialState, action) => {
  switch (action.type) {
    case GET_GREETINGS:
      return action.data;
    default:
      return state;
  }
};
