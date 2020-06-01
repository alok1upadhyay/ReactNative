import React, {Component} from 'react';
import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import {connect} from 'react-redux';
import {increment, decrement} from './actions/counterActions';
class Counter extends Component {

  increment = () => {
    console.log('increment');

    this.props.increment();
  };

  decrement = () => {
    console.log('dec');

    this.props.decrement();
  };

  render() {
    return (
      <SafeAreaView>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}>
          <TouchableOpacity onPress={this.increment}>
            <Text>INCREASE ME</Text>
        </TouchableOpacity>
          <Text>{this.props.count}</Text>
        <TouchableOpacity onPress={this.decrement}>
            <Text>DECREASE ME</Text>
        </TouchableOpacity>
      </View>
      </SafeAreaView>
    );
  }
}

//returns state which maps to props
function mapStateToProps(state) {
  return {count: state.countReducer.count};
}

const mapDispatchToProps = {
  increment,
  decrement,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter);
