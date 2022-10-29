import React from 'react';
import { Text, View, SafeAreaView, Image } from 'react-native';
import { globalStyles } from '../../styles/globalStyles';

const NewsDetailsPage = () => {
    return (
        <SafeAreaView style={globalStyles.wrapper}>
            <View>
                <Text style={globalStyles.appLebelTitleText}>New Playground Opening in Barrie</Text>
            </View>

            <View style={[globalStyles.boxStyle, globalStyles.boxNewz]}>
                <View style={globalStyles.defaultContainerHome}>
                    <Image style={globalStyles.iconStyle} source={require('./../../assets/app/Park.jpg')} />
                </View>
            </View>

            <View style={[globalStyles.boxStyle, globalStyles.boxNewzChannels]}>
                <View style={globalStyles.defaultContainerHome}>
                    <Text style={globalStyles.defaultContainerNewzLorem}>

                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                    </Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default NewsDetailsPage;
