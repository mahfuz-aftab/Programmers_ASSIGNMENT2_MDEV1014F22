import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

import TopStories from '../pages/TopStories';
import NewsList from '../pages/NewsList';
import ChannelList from '../pages/ChannelList';

const Tabs = createBottomTabNavigator()
const BottomTabNavigator = () => {
    return (
        <Tabs.Navigator>
          <Tabs.Screen name="Top Stories" component={TopStories} options={{title: "Top Stories", tabBarIcon:({color})=><MaterialCommunityIcons name="arrow-top-right" size={24} color={color} />}}/>
          <Tabs.Screen name="Newz" component={NewsList} options={{title: "Newz", tabBarIcon:({color})=><Entypo name="news" size={24} color={color} />}}/>
          <Tabs.Screen name="Channels" component={ChannelList} options={{title: "Channels", tabBarIcon:({color})=><MaterialCommunityIcons name="access-point" size={24} color={color} />}}/>
        </Tabs.Navigator>
    )
}

export default BottomTabNavigator;
