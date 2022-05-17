import React, {useState} from 'react';

import {View, Text} from 'react-native';
import {
  Container,
  Title,
  Input,
  Button,
  ButtonText,
  SignUpButton,
  SignUpText,
} from './styles.js';

export default function Login() {
  const [login, setLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function toggleLogin() {
    setLogin(!login);
  }

  //Login screen
  if (login) {
    return (
      <Container>
        <Title>
          Dev<Text style={{color: '#E52246'}}>Post</Text>
        </Title>
        <Input
          value={email}
          onChangeText={text => setEmail(text)}
          placeholder="seuemail@teste.com"
        />
        <Input
          value={password}
          onChangeText={text => setPassword(text)}
          placeholder="*******"
        />
        <Button>
          <ButtonText>Acessar</ButtonText>
        </Button>
        <SignUpButton onPress={toggleLogin}>
          <SignUpText>Criar uma conta</SignUpText>
        </SignUpButton>
      </Container>
    );
  }

  //SignUp screen
  return (
    <Container>
      <Title>
        Dev<Text style={{color: '#E52246'}}>Post</Text>
      </Title>
      <Input
        value={email}
        onChangeText={text => setEmail(text)}
        placeholder="seuemail@teste.com"
      />
      <Input
        value={password}
        onChangeText={text => setPassword(text)}
        placeholder="Seu nome"
      />
      <Input
        value={password}
        onChangeText={text => setPassword(text)}
        placeholder="*******"
      />
      <Button>
        <ButtonText>Acessar</ButtonText>
      </Button>
      <SignUpButton onPress={toggleLogin}>
        <SignUpText>Já possuo uma conta</SignUpText>
      </SignUpButton>
    </Container>
  );
}
