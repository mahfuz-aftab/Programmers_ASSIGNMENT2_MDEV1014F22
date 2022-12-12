import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Header from './src/components/Header';
import BottomTabNavigator from './src/components/BottomTabNavigator';
import Login from './src/pages/Login';
import Register from './src/pages/Register';
import NewsList from './src/pages/NewsList';
import NewsDetails from './src/pages/NewsDetails';
import ChannelList from './src/pages/ChannelList';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Header></Header>
      <Stack.Navigator initialRouteName="Login Page" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
        <Stack.Screen name="Newz Channels" component={ChannelList} />
        <Stack.Screen name="All Newz" component={NewsList} />
        <Stack.Screen name="Newz Details" component={NewsDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
