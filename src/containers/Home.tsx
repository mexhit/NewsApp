import React, {useEffect, useState} from 'react';
import {StyleSheet, ActivityIndicator, FlatList} from 'react-native';
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
  const debouncedTerm = useDebounce(term, 1000);

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
    if (term) {
      setLoading(true);
      NewsService.searchArticles(term)
        .then(list => {
          setArticles(list);
        })
        .catch(error => console.log(error))
        .finally(() => {
          setLoading(false);
        });
    }
  }, [term, debouncedTerm]);

  return (
    <>
      <SearchBar
        platform={'default'}
        onChangeText={setTerm}
        // @ts-ignore
        value={term}
        placeholder="Type Here..."
        onClear={setArticleList}
      />
      {loading && <ActivityIndicator animating={loading} />}
      <FlatList
        showsVerticalScrollIndicator={false}
        data={articles}
        keyExtractor={({title}) => title}
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
    fontWeight: '600',
  },
});

export default Home;
