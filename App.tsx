import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Header from './src/components/Header';
import Login from './src/pages/Login';
import Register from './src/pages/Register';
import Home from './src/pages/Home';
import NewsList from './src/pages/NewsList';
import NewsDetails from './src/pages/NewsDetails';
import ChannelList from './src/pages/ChannelList';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Header></Header>
      <Stack.Navigator initialRouteName="Login Page" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} options={{title: "Create Account"}} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Newz Channels" component={ChannelList} />
        <Stack.Screen name="All Newz" component={NewsList} />
        <Stack.Screen name="Newz Details" component={NewsDetails} />
      </Stack.Navigator>

    </NavigationContainer>

  );
}
