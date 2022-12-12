import React from 'react';
import { Text, View, SafeAreaView, Pressable, ScrollView } from 'react-native';
import NewsCard from '../components/NewsCard';

import { globalStyles } from '../../styles/globalStyles';

const NewsList = ({ navigation }: { navigation: any }) => {
  const articlesList: {
    title: string,
    content: string
  }[] = [
    {
      title: 'GC MDEV Meet 2022',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s ..',
    },
    {
      title: 'React Native Workshop at GC',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s ..',
    },
    {
      title: 'New Playground Opening in Barrie',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s ..',
    },
    {
      title: 'Boxing Day 2022',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s ..',
    },
    {
      title: 'Hocky Tournament in Barrie',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s ..',
    },
  ];

  return (
    <SafeAreaView style={globalStyles.wrapper}>
      <ScrollView>
        <View>
          <Text style={globalStyles.title}>November 01, 2022</Text>
        </View>

        {articlesList.map((article, index) => (
          <NewsCard
            key={index}
            navigation={navigation}
            title={article.title}
            content={article.content}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default NewsList;
