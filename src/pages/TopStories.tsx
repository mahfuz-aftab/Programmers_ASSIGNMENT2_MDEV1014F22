import React from 'react';
import { Text, View, SafeAreaView, Image, ScrollView } from 'react-native';

import { globalStyles } from '../../styles/globalStyles';


const TopStories = () => {
    return (

        <SafeAreaView style={globalStyles.wrapper}>
            <ScrollView>
                <View>
                  <Text style={globalStyles.title}>Welcome to Barrie Newz App</Text>
                  <Text style={globalStyles.subTitle}>Top Stories in Barrie</Text>
                </View>
                <View>
                    <Text style={globalStyles.title}>Georgian College Hosting Career Event</Text>
                </View>

                <View>
                    <Image style={globalStyles.articleSingleImage} source={require('./../../assets/app/career.jpg')} />
                </View>

                <View style={globalStyles.articleSingleBox}>
                    <Text style={globalStyles.articleText}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default TopStories;
