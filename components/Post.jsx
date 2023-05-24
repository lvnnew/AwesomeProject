import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

const truncateTitle = (str) => {
  if (str.lenght >= 50) {
    return str.substring(0, 50) + '...';
  }

  return str;
}

const Post = ({title, imageUrl, thumbnailUrl}) => {
  return (
    <View>
      <View style={styles.post}>
        <View style={styles.imageContainer}>
        <TouchableOpacity onPress={() => alert('Произошел тык по картинке')}>
          <Image source={{uri: imageUrl}} style={styles.image}></Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert('А это был тык по иконке')}>
          <Image source={{uri: thumbnailUrl}} style={styles.image}></Image>
        </TouchableOpacity>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>
    </View>
  );
}

export default Post;

const styles = StyleSheet.create({
  post: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    margin: 5,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)'
  },
  imageContainer: {
    flexDirection: 'row',
  },
  image: {
    height: 40,
    width: 40,
    borderRadius: 12,
    marginRight: 5
  },
  textContainer: {
    maxWidth: '75%',
    justifyContent: 'flex-start',
    marginLeft: 5
  },
  title: {
    fontSize: 16,
    fontWeight: 500,
    maxWidth: 300
  },
});