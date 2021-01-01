import React from 'react';
import Contacts from '../screens/drawer/Contacts';
import Favorites from '../screens/drawer/Favorites';
import Settings from '../screens/drawer/Settings';
import Feed from '../feed';

import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();

export default createDrawer = () =>
<Drawer.Navigator>
  <Drawer.Screen name="Feed" component={Feed} />
  <Drawer.Screen name="Contacts" component={Contacts} />
  <Drawer.Screen name="Favorites" component={Favorites} />
  <Drawer.Screen name="Settings" component={Settings} />
</Drawer.Navigator>