import React, {useState, useContext} from 'react';

import {View, Text, ActivityIndicator} from 'react-native';
import {
  Container,
  Title,
  Input,
  Button,
  ButtonText,
  SignUpButton,
  SignUpText,
} from './styles.js';

import {AuthContext} from '../../contexts/auth.js';
import * as Animatable from 'react-native-animatable';
const TitleAnimated = Animatable.createAnimatableComponent(Title);

export default function Login() {
  const [login, setLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {signUp, signIn, loadingAuth} = useContext(AuthContext);

  function toggleLogin() {
    setLogin(!login);
    setEmail('');
    setName('');
    setPassword('');
  }

  async function handleSignIn() {
    if (email === '' || password === '') {
      alert('Preencha todos os campos');
      return;
    }
    await signIn(email, password);
  }

  async function handleSignUp() {
    if (email === '' || password === '' || name === '') {
      alert('Preencha todos os campos');
      return;
    }
    await signUp(email, password, name);
  }

  //Login screen
  if (login) {
    return (
      <Container>
        <TitleAnimated animation="flipInY">
          Dev<Text style={{color: '#E52246'}}>Post</Text>
        </TitleAnimated>
        <Input
          value={email}
          onChangeText={text => setEmail(text)}
          placeholder="seuemail@teste.com"
        />
        <Input
          value={password}
          onChangeText={text => setPassword(text)}
          placeholder="*******"
          secureTextEntry={true}
        />
        <Button onPress={handleSignIn}>
          {loadingAuth ? (
            <ActivityIndicator size={20} color="#ffff" />
          ) : (
            <ButtonText>Acessar</ButtonText>
          )}
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
      <TitleAnimated animation="flipInX">
        Dev<Text style={{color: '#E52246'}}>Post</Text>
      </TitleAnimated>
      <Input
        value={email}
        onChangeText={text => setEmail(text)}
        placeholder="seuemail@teste.com"
      />
      <Input
        value={name}
        onChangeText={text => setName(text)}
        placeholder="Seu nome"
      />
      <Input
        value={password}
        onChangeText={text => setPassword(text)}
        placeholder="*******"
        secureTextEntry={true}
      />
      <Button onPress={handleSignUp}>
        {loadingAuth ? (
          <ActivityIndicator size={20} color="#ffff" />
        ) : (
          <ButtonText>Cadastrar</ButtonText>
        )}
      </Button>
      <SignUpButton onPress={toggleLogin}>
        <SignUpText>Já possuo uma conta</SignUpText>
      </SignUpButton>
    </Container>
  );
}
