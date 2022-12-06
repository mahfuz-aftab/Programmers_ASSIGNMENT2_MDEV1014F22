import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

import TopStories from './TopStories';
import NewsList from './NewsList';
import ChannelList from './ChannelList';


const Tabs = createBottomTabNavigator()
const Home = () => {
    return (
                  <Tabs.Navigator>
                    <Tabs.Screen name="Top Stories" component={TopStories} options={{title: "Top Stories", tabBarIcon:({color, size})=><MaterialCommunityIcons name="arrow-top-right" size={24} color={color} />}}/>
                    <Tabs.Screen name="Newz" component={NewsList} options={{title: "Newz", tabBarIcon:({color, size})=><Entypo name="news" size={24} color={color} />}}/>
                    <Tabs.Screen name="Channels" component={ChannelList} options={{title: "Channels", tabBarIcon:({color, size})=><MaterialCommunityIcons name="access-point" size={24} color="black" />}}/>
                  </Tabs.Navigator>
    )
}

export default Home;
