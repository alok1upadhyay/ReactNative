import React from 'react';
import LoginScreen from '../screens/LoginScreen'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  DrawerActions
} from '@react-navigation/native';
import createDrawer from '../NavigationFlow/createDrawer'


export default createLoginStack = (Stack) =>
    <Stack.Navigator>
      <Stack.Screen
          name="Home"
          component={LoginScreen}
          options={{ title: "Let's Navigate" }}
        />
      <Stack.Screen
        name="Feed"
        children={createDrawer}
        options={({ navigation }) => ({
          title: "React Navigation",
          headerLeft: () =>
            <Icon
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
              style={[{ color: 'blue', marginLeft: 8 }]}
              size={24}
              name={'menu'}
            />
        })
        }
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{
          title: "Detail Screen"
        }}
      />
      <Stack.Screen name="BottomTabs" component={BottomTabs} />
    </Stack.Navigator>