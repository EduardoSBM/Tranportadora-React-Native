import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import "react-native-gesture-handler";
import Login from './Screens/Login_tela';
import Home from './Screens/Home_tela';
import Carro from './Screens/Carrinho_tela';




export default function Drawer() {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Login" component={Login}></Drawer.Screen>
        <Drawer.Screen name="Home" component={Home}></Drawer.Screen>
        <Drawer.Screen name="Carro" component={Carro}></Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
