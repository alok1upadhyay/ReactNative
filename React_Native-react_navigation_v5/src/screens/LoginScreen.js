import React from 'react';
import { Button } from 'react-native';

export default LoginScreen = ({ navigation }) => {
    return (
      <Button
        title="LOGIN WITH USERID AND PASSWORD"
        onPress={() =>
          navigation.navigate('Feed')
        }
      />
    );
  };