import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #36393f;
`;

export const ButtonPost = styled.TouchableOpacity`
  position: absolute;
  right: 6%;
  bottom: 5%;
  height: 60px;
  width: 60px;
  background-color: #202225;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  z-index: 99;
`;

export const ListPosts = styled.FlatList`
  flex: 1;
  background-color: #f1f1f1;
`;
