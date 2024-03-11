import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

/**
 * Componente principal que representa a calculadora React Native.
 */
export default function App() {
  // Estados para armazenar os valores, operação e resultado
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [result, setResult] = useState('');
  const [operation, setOperation] = useState('+');

  /**
   * Manipulador de evento chamado quando o botão "=" é pressionado.
   * Chama a função evaluateExpression para calcular o resultado.
   */
  const handleButtonPress = () => {
    evaluateExpression();
  };

  /**
   * Avalia a expressão com base nos valores inseridos e na operação selecionada.
   * Exibe o resultado em tempo real e lida com possíveis erros.
   */
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

  /**
   * Reinicia a operação para a adição. Pode ser ajustado para a operação padrão desejada.
   */
  const clearOperations = () => {
    setOperation('+');
  };

  // Estrutura da interface do usuário
  return (
    <View style={styles.container}>
      {/* Entrada de Valores */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite o primeiro valor"
          keyboardType="numeric"
          value={input1}
          onChangeText={(text) => setInput1(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Digite o segundo valor"
          keyboardType="numeric"
          value={input2}
          onChangeText={(text) => setInput2(text)}
        />
      </View>

      {/* Botões de Operação */}
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

      {/* Resultado */}
      <View style={styles.resultContainer}>
        <Text style={styles.result}>{result}</Text>
      </View>

      {/* Botão de Igual */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleButtonPress()}>
        <Text>=</Text>
      </TouchableOpacity>
    </View>
  );
}

// Estilos para a interface da calculadora
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