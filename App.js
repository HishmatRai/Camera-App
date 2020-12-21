import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/home'
export default class App extends React.Component {
  constructor(props) {
      super();
  }
render(){
  return(
    <View style={styles.container}>
<Home  />
    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
