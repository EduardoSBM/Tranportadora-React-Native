import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Login from './Screens/Login_tela';
import Home from './Screens/Home_tela';
import Pagamentos from './Screens/Pagamento_tela';
import Cadastro from './Screens/Cadastrar_tela';
import Demanda from './Screens/Demanda';
import Pesquisa from './Screens/PesquisaDemanda';
import Suporte from './Screens/Suporte';
import Configs from './Screens/Configs';

import { FontAwesome } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

function HomeTabs() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName='Login'
      screenOptions={{
        tabBarActiveTintColor: "red",
        tabBarActiveBackgroundColor: "transparent",
        tabBarInactiveBackgroundColor: "transparent",
        tabBarInactiveTintColor: "grey",
        headerStyle: { backgroundColor: "red" },
        headerTitle: ' '
       
      }}>

      <Tab.Screen name='Home' component={Home} options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color }) => (<Fontisto name="home" size={30} color={color} />)
      }} />

      <Tab.Screen name='Pagamento' component={Pagamentos} options={{
        tabBarLabel: 'Pagamento',
        tabBarIcon: ({ color }) => (<MaterialIcons name="attach-money" size={30} color={color} />)
      }} />
    </Tab.Navigator>
  )
}

export default function Stack() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        
            headerStyle: { backgroundColor: "transparent" },
            headerTintColor: "red",//não sei como tirar nome "demanda" e "home" na home
            headerTitleAlign: "center",}}>
        <Stack.Screen options={{ headerShown: false }} name='Login' component={Login} />
        <Stack.Screen options={{ headerShown: true, headerTitle:' ' }} name='Demanda' component={Demanda} />
        <Stack.Screen options={{ headerShown: true }} name='Pesquisa' component={Pesquisa} />
        <Stack.Screen options={{ headerShown: true }} name='Suporte' component={Suporte} />
        <Stack.Screen options={{ headerShown: true }} name='Configs' component={Configs} />
        <Stack.Screen options={{ headerShown: false }} name='Cadastro' component={Cadastro} />
        <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeTabs} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}