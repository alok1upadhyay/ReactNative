import {INCREMENT, DECREMENT} from '../actions/counterActions';

const initialState = {
  count: 0,
};

export default countReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};
