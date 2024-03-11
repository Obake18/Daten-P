import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [input1, setInput1] = useState('0');
  const [input2, setInput2] = useState('0');
  const [result, setResult] = useState('');
  const [operation, setOperation] = useState('+');

  const handleCalculate = () => {
    const num1 = parseFloat(input1);
    const num2 = parseFloat(input2);

    if (!isNaN(num1) && !isNaN(num2)) {
      let calculatedResult = 0;

      if (operation === '+') {
        calculatedResult = num1 + num2;
      } else if (operation === '-') {
        calculatedResult = num1 - num2;
      }

      setResult(`Resultado: ${calculatedResult}`);
    } else {
      setResult('Por favor, insira números válidos.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculando . . . </Text>
      <TextInput
        defaultValue={input1.toString()}
        onChangeText={(texto) => setInput1(texto)}
        keyboardType='numeric'
        style={styles.input}
      />
      <TextInput
        defaultValue={input2.toString()}
        onChangeText={(texto) => setInput2(texto)}
        keyboardType='numeric'
        style={styles.input}
      />

      <View style={styles.buttonContainer}>
        <Button title="Somando" onPress={() => setOperation('+')} color="gray" />
        <Button title="Subtraindo " onPress={() => setOperation('-')} color="gray" />
        <Button title="Calcular" onPress={handleCalculate} color="gray" />
      </View>

      <Text style={styles.result}>{result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '100%',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    width: '100%',
  },
  result: {
    fontSize: 16,
  },
});
