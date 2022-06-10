import React from 'react';

import {View, Text} from 'react-native';

import {Container, AreaInput, Input} from './styles';

import Feather from 'react-native-vector-icons/Feather';

export default function Search() {
  return (
    <Container>
      <AreaInput>
        <Feather name="search" size={20} color="#E52246" />
        <Input placeholder="Procurando alguém?" />
      </AreaInput>
    </Container>
  );
}
