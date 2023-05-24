import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
  View,
  Alert,
  FlatList,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';
import Post from '../components/Post';
import { Loading } from '../components/Loading';

export const HomeScreen = ({ navigation }) => {
  const [items, setItems] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const fetchPosts = () => {
    setIsLoading(true);

    axios
      .get('https://64691d97183682d6143a295a.mockapi.io/photos')
      .then(({data}) => {
        setItems(data);
      })
      .catch((err) => {
        console.log(err);
        Alert.alert('Ошибка', 'Не удалось получить данные')
      }).finally(() => {
        setIsLoading(false);
      })
  }

  useEffect(fetchPosts, []);

  if (isLoading) {
    return <Loading/>
  }

  return (
    <View>
      <FlatList
        refreshControl={<RefreshControl refreshing={isLoading} onRefresh={fetchPosts}/>}
        data={items}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => navigation.navigate('FullScreen', { id: item.id, title: item.title })}>
            <Post key={item.id} title={item.title} imageUrl={item.url} thumbnailUrl={item.thumbnailUrl}/>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}