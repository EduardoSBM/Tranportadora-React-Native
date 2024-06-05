import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './Screens/Login_tela';
import Home from './Screens/Home_tela';
import Carro from './Screens/Carrinho_tela';
import Pagamentos from './Screens/Pagamento_tela';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';


export default function App() {

  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
        <Tab.Navigator

          initialRouteName='Login'
          screenOptions={{
            tabBarActiveTintColor: "white",
            tabBarActiveBackgroundColor: "red",
            tabBarInactiveBackgroundColor: "red",
            tabBarInactiveTintColor: "grey",
            headerStyle: {backgroundColor: "red"},
            headerTintColor: "white",
            headerTitleAlign: "left",
          }}>
          <Tab.Screen name='Login' component={Login} options={{tabBarLabel: 'Login',
          tabBarIcon:({color, size})  => (<Entypo name="login" size={30} color={color} />)}}/>


          <Tab.Screen name='Home' component={Home} options={{tabBarLabel: 'Home',
          tabBarIcon:({color, size})  => (<FontAwesome name="home" size={30} color={color}/>)}}/>


          <Tab.Screen name='Veículos' component={Carro} options={{tabBarLabel: 'Veículos',
          tabBarIcon:({color, size})  => (<Fontisto name="bus" size={28} color={color} />)}}/>

          <Tab.Screen name='Pagamento' component={Pagamentos} options={{tabBarLabel: 'Pagamento',
          tabBarIcon:({color, size})  => (<MaterialIcons name="attach-money" size={30} color={color} />)}}/>
        </Tab.Navigator>
    </NavigationContainer>
    
  );
}





