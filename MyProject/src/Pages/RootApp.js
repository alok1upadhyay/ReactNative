import GetButton from '../Components/Button';
import NewsItemWithTitle from '../Components/NewsItem';
import GetLoader from '../Components/Loader';
import GetAlert from '../Components/Alert';
import React  from 'react';
import {
    SafeAreaView,
    StatusBar,
  } from 'react-native';


export default class RootApp extends React.Component {

    render(){
      return (
        <SafeAreaView>
          <StatusBar barStyle="dark-content" />
              <GetButton/>
              <GetLoader/>
              <GetAlert/>
              <NewsItemWithTitle/>
          </SafeAreaView>
        
      );
    }}