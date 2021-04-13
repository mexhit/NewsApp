import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import {Article} from '../types/Article';
import {Text} from 'react-native-elements';
import * as NewsService from '../api/news';
import {useRoute} from '@react-navigation/native';
import {DetailsScreenRouteProp} from '../navigation/RootNavigation';

const Details = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(false);
  const route = useRoute<DetailsScreenRouteProp>();

  useEffect(() => {
    setLoading(true);
    NewsService.searchArticles(route.params.title)
      .then(list => {
        setArticles(list);
      })
      .catch(error => console.log(error))
      .finally(() => {
        setLoading(false);
      });
  }, [route.params.title]);

  return (
    <ScrollView>
      <ActivityIndicator animating={loading} />
      {articles.length > 0 && (
        <>
          <Image source={{uri: articles[0].urlToImage}} style={styles.image} />
          <View style={styles.infoContent}>
            <View style={styles.metadata}>
              <Text style={styles.textTitle}>Author: </Text>
              <Text>{articles[0].author}</Text>
            </View>
            <View style={styles.metadata}>
              <Text style={styles.textTitle}>Date: </Text>
              <Text>{new Date(articles[0].publishedAt).toDateString()}</Text>
            </View>
            <Text style={styles.textTitle}>{articles[0].title}</Text>
            <View>
              <Text style={[styles.textTitle, styles.content]}>
                {articles[0].content}
              </Text>
            </View>
          </View>
        </>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {width: '100%', aspectRatio: 4 / 3, alignSelf: 'center'},
  textTitle: {
    fontSize: 18,
    fontFamily: 'System',
    fontWeight: 'bold',
  },
  infoContent: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  content: {
    marginTop: 20,
    fontWeight: '400',
    fontSize: 13,
  },
  metadata: {
    flexDirection: 'row',
    marginBottom: 20,
    alignContent: 'center',
    margin: 0,
  },
});

export default Details;
