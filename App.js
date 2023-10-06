import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import BarPage from './screens/BarPage';
import {LogBox} from 'react-native';

/* Just to ignore a small warning because of a problem with dependencies.. */
LogBox.ignoreLogs(['Setting a timer']);

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      
     <Stack.Screen options= {{headerShown:false}} name="Login" component={LoginScreen} />
      <Stack.Screen options= {{headerShown:false}} name="BarPage" component={BarPage} />
      <Stack.Screen options= {{headerShown:false}} name="PatientPage" component={HomeScreen} />

    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
