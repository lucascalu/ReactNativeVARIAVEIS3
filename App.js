import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

export default function App() {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [result, setResult] = useState(null);

  const handleSum = () => {
    const sum = parseFloat(number1) + parseFloat(number2);
    setResult(sum);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora em React Native</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o primeiro número"
        onChangeText={(text) => setNumber1(text)}
        keyboardType="numeric"
        value={number1}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite o segundo número"
        onChangeText={(text) => setNumber2(text)}
        keyboardType="numeric"
        value={number2}
      />
      <Button title="Somar" onPress={handleSum} />
      {result !== null && <Text style={styles.result}>Resultado: {result}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
  },
});
