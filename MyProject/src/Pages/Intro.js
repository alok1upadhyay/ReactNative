import React, { Component }  from 'react';
import { View, Text, SafeAreaView, StyleSheet} from 'react-native'
import {bgColor} from '../../env.json'


export default class Intro extends Component {
    render() {
      return (
        <SafeAreaView>
        <View style = { styles.container }
>
          <Text>
            This is a React Native app inclused redux, saga, actions, reducers, components, accessibility, jest. Needs to include seperate styling and dev, stage, preProd & prod schemas.
          </Text>
        </View>
        </SafeAreaView>
      );
    }
  }

  const styles = StyleSheet.create(
    {
        container:
        {
            backgroundColor: bgColor // Set your own custom Color
        }
    });