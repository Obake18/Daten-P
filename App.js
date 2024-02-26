import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const Cat = () =>{
  const name = 'bios';
  return <Text> Hello, I'm {name.toUpperCase()} </Text>

}

export default Cat;

function App() {
  return (
    <View style={styles.container}>
      <Text>Zé da Manga!!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
