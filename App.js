import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

const Cat = () => {
  const name = 'bios';
  return <Text> Hello, I'm {name.toUpperCase()} </Text>
}

const App = () => {
  const [clicks, setClicks] = useState(0);

  const handleReset = () => {
    setClicks(0);
  };

  return (
    <View style={styles.container}>
      <Button title="Aperta aí" onPress={() => setClicks(clicks + 1)} />
      
      <Button title="Reseta" onPress={handleReset} />

      <Text> O BIOS apertou  {clicks} vezes </Text>
      <StatusBar style="auto" />
    </View>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});