import React, {useEffect, useState} from 'react';
import {StyleSheet, FlatList, Platform, RefreshControl} from 'react-native';
import {ListItem, Image, SearchBar} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import * as NewsService from '../api/news';
import {Article} from '../types/Article';
import useDebounce from '../hooks/useDebounce';

const Home = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const navigation = useNavigation();
  const [term, setTerm] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const debouncedTerm = useDebounce(term, 500);

  const setArticleList = () => {
    setLoading(true);
    NewsService.getArticleList()
      .then(list => {
        setArticles(list);
      })
      .catch(error => console.log(error))
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    setArticleList();
  }, []);

  useEffect(() => {
    if (debouncedTerm) {
      setLoading(true);
      NewsService.searchArticles(debouncedTerm)
        .then(list => {
          setArticles(list);
        })
        .catch(error => console.log(error))
        .finally(() => {
          setLoading(false);
        });
    }
  }, [debouncedTerm]);

  return (
    <>
      <SearchBar
        platform={Platform.OS === 'ios' ? 'ios' : 'android'}
        onChangeText={setTerm}
        // @ts-ignore
        value={term}
        placeholder="Type Here..."
        onClear={setArticleList}
      />
      <FlatList
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={setArticleList} />
        }
        showsVerticalScrollIndicator={false}
        data={articles}
        keyExtractor={({title}, index) => title + index}
        renderItem={({item}) => {
          return (
            <ListItem
              bottomDivider
              onPress={() => {
                navigation.navigate('Details', {title: item.title});
              }}>
              <Image source={{uri: item.urlToImage}} style={styles.image} />
              <ListItem.Content>
                <ListItem.Title style={styles.textTitle} numberOfLines={3}>
                  {item.title}
                </ListItem.Title>
              </ListItem.Content>
            </ListItem>
          );
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  image: {width: 80, height: 80, borderRadius: 10},
  textTitle: {
    fontSize: 15,
    fontFamily: 'System',
    fontWeight: 'bold',
  },
});

export default Home;
