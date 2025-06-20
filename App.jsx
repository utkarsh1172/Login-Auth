import {createStackNavigator} from '@react-navigation/stack';
import {View, Text, Button} from 'react-native';
import {NavigationContainer, useNavigation,DrawerActions} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './Screens/HomeScreen';
import ProfileScreen from './Screens/ProfileScreen';
import UserScreen from './Screens/UserScreen';
import 'react-native-gesture-handler'
import Icon  from 'react-native-vector-icons/Entypo';
import DrawerContent from './DrawerContent';
import SplashScreen from 'react-native-splash-screen';
import { useEffect } from 'react';
import LoginPage from './Screens/Login&Register/Login';
import RegisterPage from './Screens/Login&Register/Register';


const StackNav = () => {
  const Stack = createStackNavigator();
  const navigation = useNavigation()
  return (
    <Stack.Navigator
    screenOptions={{
      statusBarColor: '#0163d2',
      headerStyle: {backgroundColor: '#0163d2'},
      headerTintColor: '#fff',
      headerTitleAlign: 'center',
      headerLeft: () => {
        return(
          <Icon
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
          name="menu"
          size={30}
          color='#fff' />
        )
      }
    }}>
    <Stack.Screen name='Home' component={HomeScreen}/>
    <Stack.Screen name='Profile' component={ProfileScreen}/>
    <Stack.Screen name='User' component={UserScreen} options={{headerShown:true}}/>
  </Stack.Navigator>
  )
}

const DrawerNav = () => {
  const Drawer= createDrawerNavigator()
  return(
    <Drawer.Navigator
    drawerContent={ props => <DrawerContent {...props}/>}
    screenOptions={{
     headerShown:false
   }}
   >
  <Drawer.Screen name='Home' component={StackNav}/>
  </Drawer.Navigator>
  )
}
function App() {

  useEffect(() => {
    setTimeout(() =>{
      SplashScreen.hide()
    },500)

  }, [])
    const Stack = createStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown:false
      }}>
        <Stack.Screen name='Login' component={LoginPage}/>
        <Stack.Screen name='Register' component={RegisterPage}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

// const style = creat
