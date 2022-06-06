import React, {useState, useContext, useCallback} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';

import {useNavigation, useFocusEffect} from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import {AuthContext} from '../../contexts/auth';
import firestore from '@react-native-firebase/firestore';

import PostsList from '../../components/PostsList';

import {Container, ButtonPost, ListPosts} from './styles';

import Header from '../../components/Header';

export default function Home() {
  const navigation = useNavigation();
  const {user} = useContext(AuthContext);

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  useFocusEffect(
    useCallback(() => {
      setLoading(true);
      let isActive = true;
      function fetchPosts() {
        firestore()
          .collection('posts')
          .orderBy('created', 'desc')
          .limit(5)
          .get()
          .then(snapshot => {
            if (isActive) {
              setPosts([]);
              const postList = [];
              snapshot.docs.map(u => {
                postList.push({
                  ...u.data(),
                  id: u.id,
                });
              });
              setPosts(postList);
              setLoading(false);
            }
          });
      }
      fetchPosts();
      return () => {
        isActive = false;
      };
    }, []),
  );
  return (
    <Container>
      <Header />
      {loading ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size="large" color="#E52246" />
        </View>
      ) : (
        <ListPosts
          data={posts}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => <PostsList data={item} userId={user?.uid} />}
        />
      )}
      <ButtonPost
        activeOpacity={0.8}
        onPress={() => {
          navigation.navigate('NewPost');
        }}>
        <Feather name="edit-2" size={25} color="#FFFF" />
      </ButtonPost>
    </Container>
  );
}
