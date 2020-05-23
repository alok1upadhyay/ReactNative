import React, {Component} from 'react';
import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import {connect} from 'react-redux';
class Counter extends Component {
  render() {
    return (
      // eslint-disable-next-line react-native/no-inline-styles
      <SafeAreaView>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <TouchableOpacity onPress={this.props.increaseCounter}>
          <Text>INCREASE</Text>
        </TouchableOpacity>
        <Text>{this.props.counter}</Text>
        <TouchableOpacity onPress={this.props.decreaseCounter}>
          <Text>DECREASE</Text>
        </TouchableOpacity>
      </View>
      </SafeAreaView>
      );
  }
}

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

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter);
