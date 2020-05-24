# redux
it’s an application data-flow architecture. As per docs, Redux is a predictable state container for JavaScript apps.
Important terms:

******************************************************************************************************************************

# store
 - Holds entire state of your application. Nees reducer as a parameter to be pass in createStore.

import {createStore} from 'redux';
const store = createStore(reducer);

******************************************************************************************************************************

# actions
 - For any state change necessary required  change will be dispatched through actions.

******************************************************************************************************************************

# reducer
 - Reducer will process action to change state. Two params : initialState & action id.
 
const initialState = {
  counter: 0,
};

const reducer = (state = initialState, action) => {
  if (action.type === 'increaseCounter') {
    return {counter: state.counter + 1};
  } else if (action.type === 'decreaseCounter') {
    return {counter: state.counter - 1};
  }
  return state;
};

******************************************************************************************************************************

# Provider
  - The <Provider /> makes the Redux store available to any nested components that have been wrapped in the connect() function. Since any React component in a React Redux app can be connected, most applications will render a <Provider> at the top level, with the entire app's component tree inside of it.
dispatch - dispatch is used to dispatch actions and trigger state changes to the store.
  
  import {Provider} from 'react-redux';

  export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Counter />
      </Provider>
    );
  }
}

******************************************************************************************************************************

# connect
 - connect function connects a React component to a Redux store. It provides its connected component with the pieces of the data it needs from the store, and the functions it can use to dispatch actions to the store.
 
 import {connect} from 'react-redux';

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter);

******************************************************************************************************************************

# maps

//returns state which maps to props
function mapStateToProps(state) {
  return {counter: state.counter};
}

function mapDispatchToProps(dispatch) {
  return {
    increaseCounter: () => dispatch({type: 'increaseCounter'}),
    decreaseCounter: () => dispatch({type: 'decreaseCounter'}),
  };
}
