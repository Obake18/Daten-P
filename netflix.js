import React, { useState } from 'react';
import { Image, View, Text, TextInput, TouchableOpacity, StatusBar, StyleSheet } from 'react-native';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Aqui você pode adicionar a lógica de autenticação
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="black" />
      <Image source={require('./assets/Logo/Rectangle 1ntflx.png')} style={styles.logo} />
      <Text style={styles.ajuda}>Ajuda</Text>
      <Image source={require('./assets/Logo/voltar.png')} style={styles.voltar} />
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email ou número de telefone"
          placeholderTextColor='#999' // Cor do placeholder
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry
          placeholderTextColor='#999' // Cor do placeholder
          value={password}
          onChangeText={text => setPassword(text)}
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Recuperar Senha</Text>
        </TouchableOpacity>
        <Text style={styles.captcha}>
          O acesso está protegido pelo Google reCAPTCHA para garantir que você não é um robô.{' '}
          <Text style={{ fontWeight: 'bold' }}>Saiba mais</Text>.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#141414',
    paddingHorizontal: 20,
  },
  logo: {
    
    marginTop: 20, // Coloca a imagem no topo da tela
    marginBottom: 40,
  },
  formContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#333',
    width: '100%',
    padding: 15,
    marginBottom: 20,
    borderRadius: 5,
    color: '#fff',
  },
  ajuda: {
    position: 'absolute',
    color: '#fff',
    marginTop:0,
    left: 400,
    padding:0,
    margin:0,
    top: 15,
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  button: {
    backgroundColor: '#222',
    width: '100%',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },

  voltar:{
    width: 50,
    height: 50,
    position: 'absolute',
    marginTop:0,
    right: 410,
    padding:0,
    margin:0,
    top: 15,
  },
  forgotPassword: {
    marginTop: 20,
    color: '#b3b3b3',
    textDecorationLine: 'underline',
  },
  captcha: {
    marginTop: 90,
    color: '#b3b3b3',
    textAlign: 'center',
  },
});

export default App;
