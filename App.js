import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import styled from 'styled-components/native'; 

const HeaderText = styled.Text`
font-size:25px;
`

const Input = styled.TextInput`
  width:90%;
  height:50px;
  font-size:18px;
  background-color:#F1FdFf;
  margin-top:16px
  border-radius:12px
  padding:10px
`

const CalcButton = styled.Button``

const ResultArea = styled.View`
  width:100%;
  margin-top:30px;
  background-color: #F1FdFf;
  padding:20px;
  justify-content:center;
  align-items: center;
`

const ResultItemArea = styled.Text`
  font-size:18px;
  font-weight:bold;
`

const ResultItem = styled.Text`
  font-size:16px
  margin-bottom:30px
`

const PctArea = styled.View`
  flex-direction: row;
  margin:25px;
`

const PctItem = styled.Button``


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b3f4ff',
    alignItems: 'center',
    paddingTop:35
  },
});


export default function App() {

  const [bill,setBill] = useState('')
  const [tip,setTip] = useState(0)
  const [pct, setPct] = useState(10)

  const calc = () => {
    let nBill = parseFloat(bill);

    if(nBill){
      setTip( (pct/100) * nBill )
    }
  }

  useEffect(()=>{
    calc();
  }, [pct]);

  return (
    <SafeAreaView style={styles.container}>
      <HeaderText>Calculadora de Gorjeta</HeaderText>
      <Input 
        placeholder="Quanto deu a conta?"
        keyboardType="numeric"
        value={bill}  
        onChangeText={ n=>setBill(n) } 
      />

      <PctArea>
        <PctItem title="5%" onPress={()=>setPct(5)}/>
        <PctItem title="10%"onPress={()=>setPct(10)}/>
        <PctItem title="15%"onPress={()=>setPct(15)}/>
        <PctItem title="20%"onPress={()=>setPct(20)}/>
      </PctArea>
      <CalcButton title={`Calcular ${pct}%`} onPress={calc}/>
      {tip > 0 &&
        <ResultArea>
          <ResultItemArea>Valor da Conta</ResultItemArea>
          <ResultItem>R$ {parseFloat(bill).toFixed(2)}</ResultItem>
          <ResultItemArea>Valor da Gorjeta</ResultItemArea>
          <ResultItem>R$ {tip.toFixed(2)}({pct}%)</ResultItem>
          <ResultItemArea>Valor Total</ResultItemArea>
          <ResultItem>R$ {(parseFloat(bill) + tip).toFixed(2)}</ResultItem>
        </ResultArea>
      }
    </SafeAreaView>
  );
}
