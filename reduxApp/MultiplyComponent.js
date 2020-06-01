import React, {Component} from 'react';
import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import {connect} from 'react-redux';
import {multiply} from './actions/multiplyAction';
class MultiplyComponent extends Component {

  multiply = () => {
    console.log('multiply');

    this.props.multiply();
  };

  render() {
    return (
      <SafeAreaView>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}>
          <TouchableOpacity onPress={this.multiply}>
            <Text>MULTIPLY BY 2</Text>
        </TouchableOpacity>
          <Text>{this.props.multiplyValue}</Text>
        </View>
      </SafeAreaView>
    );
  }
}

//returns state which maps to props
function mapStateToProps(state) {
  return {multiplyValue: state.multiplyReducer.multiplyValue};
}

const mapDispatchToProps = {
  multiply,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MultiplyComponent);