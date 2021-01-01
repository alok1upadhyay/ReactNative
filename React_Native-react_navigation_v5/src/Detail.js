import React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import {
  useNavigation,
  useRoute,
  } from '@react-navigation/native';

import { styles } from './styles/styles';
import BottomTabs from './NavigationFlow/BottomTabs'

Detail = () => {

  const navigation = useNavigation();
  const route = useRoute();

  console.log(route)

  return (
    <View style={styles.center}>
      <Text style={styles.title}>{route.params.detailScreen}</Text>
      {
        Platform.select({
          ios:
            <Button
              title='View Bottom Tabs'
              onPress={() => navigation.navigate('BottomTabs', { name: "param 1" })}
            />,
          android:
            <TouchableOpacity
              style={{ marginBottom: 16 }}
              onPress={() => navigation.navigate('BottomTabs', { name: "param 1" })}>
              <Text style={{ color: 'blue', fontSize: 20 }}>View Bottom Tabs</Text>
            </TouchableOpacity>
        })
      }
    </View >
  );
}

export default Detail;