import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './Screens/Login_tela';
import Home from './Screens/Home_tela';
import Carro from './Screens/Carrinho_tela';
import { Ionicons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={{
            tabBarActiveTintColor: 'red',
          }}
        >
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="home" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Login"
            component={Login}
            options={{
              tabBarLabel: 'Login',
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="notifications" color={color} size={size} />
              ),
              tabBarBadge: 3,
            }}
          />
{/*           <Tab.Screen
            name="Carro"
            component={Carro}
            options={{
              tabBarLabel: 'Carro',
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="account" color={color} size={size} />
              ),
            }}
          /> */}
        </Tab.Navigator>
    </NavigationContainer>
    
  );
}
