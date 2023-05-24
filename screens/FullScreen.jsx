import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Loading } from '../components/Loading';

export const FullScreen = ({ route, navigation }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { id, title } = route.params;

  useEffect(() => {
    navigation.setOptions({
      title,
    });

    axios
      .get('https://64691d97183682d6143a295a.mockapi.io/photos/' + id)
      .then(({data}) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err);
        Alert.alert('Ошибка', 'Не удалось получить данные')
      }).finally(() => {
        setIsLoading(false);
      })
  }, [])

  if (isLoading) {
    return <Loading/>
  }

  return (
    <View style={{
      padding: 20,
      justifyContent: 'center',
      }}>
        <TouchableOpacity onPress={() => alert('Произошел тык по картинке')}>
          <Image source={{uri: data.url}} style={styles.image}></Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert('А то был тык по иконке')}>
          <Image source={{uri: data.thumbnailUrl}} style={styles.icon}></Image>
        </TouchableOpacity>
          <Text style={styles.title}>{data.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    borderRadius: 10,
    width: '100%',
    height: 250,
    marginBottom: 20
  },
  icon: {
    borderRadius: 10,
    width: 50,
    height: 50,
    marginBottom: 12
  },
  text: {
    fontSize: 16
  },
});
