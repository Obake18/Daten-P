import { React , useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Button } from 'react-native';

export default function App() {
    const [input1, setInput1] = useState('0');
    const [input2, setInput2] = useState('0');
    const [result, setResult] = useState('');
    const [operation, setOperation] = useState('+');
  
    return (
            <View>
                <Text> Calculando . . . </Text>
                <TextInput defaultValue='{input1.toString()}' onChangeText={(texto) => setInput1(Number(texto))} keyboardType='numeric'/>
                <TextInput defaultValue='{input2.toString()}' onChangeText={(texto) => setInput2(Number(texto))} keyboardType='numeric'/>

                <Button title = "Somando. . . " onPress={() => setOperation}/>
                <Button title = "Subtraindo. . . " onPress={() => setOperation('-')}/>
        
            </View>
    
    );




}