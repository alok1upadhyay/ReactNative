import {MULTIPLY} from '../actions/multiplyAction';

const initialState = {
  multiplyValue: 2,
};

export default multiplyReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case MULTIPLY:
      return {
        ...state,
        multiplyValue: state.multiplyValue * 2,
      };
    default:
      return state;
  }
};
