import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StatusBar from './src/components/StatusBar';
import Routes from './src/Routes';

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex : 1}}>
        <StatusBar/>
        <Routes/>
      </View>
    );
  }
}