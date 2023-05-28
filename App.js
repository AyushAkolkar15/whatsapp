import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Header from './screens/Header';
import Navigation from './screens/Navigation';

export default function App() {
  return (
    <NavigationContainer>
      <View style = {styles.container}>
        <StatusBar backgroundColor='#0e806a' barStyle = 'light-content'/>
        <Header />
          <View style={{ flex:1, backgroundcolor : 'white'}}>
            <Navigation/>

          </View>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});
