import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

export default function App() {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [result, setResult] = useState('');
  const [operation, setOperation] = useState('+');

  const handleButtonPress = () => {
    evaluateExpression();
  };

  const evaluateExpression = () => {
    try {
      const value1 = parseFloat(input1);
      const value2 = parseFloat(input2);

      if (!isNaN(value1) && !isNaN(value2)) {
        switch (operation) {
          case '+':
            setResult((value1 + value2).toString());
            break;
          case '-':
            setResult((value1 - value2).toString());
            break;
          case '*':
            setResult((value1 * value2).toString());
            break;
          case '/':
            if (value2 !== 0) {
              setResult((value1 / value2).toString());
            } else {
              setResult('Divisão por zero');
            }
            break;
          default:
            setResult('Operação inválida');
        }
      } else {
        setResult('Valores inválidos');
      }
    } catch (error) {
      setResult('Erro');
    }
  };

  const clearOperations = () => {
    setOperation('+'); // Pode ser ajustado para a operação padrão desejada
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite"
          keyboardType="numeric"
          value={input1}
          onChangeText={(text) => setInput1(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Digite"
          keyboardType="numeric"
          value={input2}
          onChangeText={(text) => setInput2(text)}
        />
      </View>
      <View style={styles.operationContainer}>
        <TouchableOpacity
          style={styles.operationButton}
          onPress={() => setOperation('+')}>
          <Text>+</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.operationButton}
          onPress={() => setOperation('-')}>
          <Text>-</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.operationButton}
          onPress={() => setOperation('*')}>
          <Text>*</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.operationButton}
          onPress={() => setOperation('/')}>
          <Text>/</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.clearButton}
          onPress={() => clearOperations()}>
          <Text>Limpar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.resultContainer}>
        <Text style={styles.result}>{result}</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleButtonPress()}>
        <Text>=</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    marginBottom: 10,
  },
  input: {
    fontSize: 24,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: 200,
    textAlign: 'center',
  },
  operationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  operationButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DDDDDD',
    borderRadius: 5,
    padding: 15,
    marginHorizontal: 5,
  },
  clearButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DDDDDD',
    borderRadius: 5,
    padding: 15,
    marginHorizontal: 5,
  },
  resultContainer: {
    marginBottom: 20,
  },
  result: {
    fontSize: 36,
    fontWeight: 'bold',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DDDDDD',
    borderRadius: 5,
    padding: 20,
    margin: 5,
  },
});
