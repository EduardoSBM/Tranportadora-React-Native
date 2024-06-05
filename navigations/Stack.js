import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View} from 'react-native';
import Login from './Components/Login';
import Home from './Components/Home';

export default function Stack() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
        <Stack.Navigator> 
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
});
