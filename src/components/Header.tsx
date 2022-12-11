import React from 'react';
import { Text, View, Pressable, SafeAreaView } from 'react-native';

import { globalStyles } from '../../styles/globalStyles';

const Header = () => {
    return (
        <SafeAreaView style={globalStyles.header}>
            
            <Text style={globalStyles.headerText}>Barrie Newz</Text>
        </SafeAreaView>
    )
}

export default Header;
