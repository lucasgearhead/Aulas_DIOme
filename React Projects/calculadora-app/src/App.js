
import Input from './components/Input';
import Button from './components/Button';

import { Container, Content, Row } from './styles';
import { useState } from 'react';

export const App = () => {

  const [currentNumber, setCurrentNumber] = useState('0')
  const[firstNumber, setFirstNumber] = useState('0')
  const[operation, setOperation] = useState('')

  const handleOnClear = () =>{
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation('')
  };  

  const handleAppNumber = (number) =>{
    setCurrentNumber(prev => `${prev == '0'? '': prev}${number}`)
  }

  const handleSumNumbers = () =>{
    if(firstNumber == '0'){
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('+');
    }else{
      const sum = Number(firstNumber)+Number(currentNumber)
      setCurrentNumber(String(sum))
      setOperation('+')
    }
  }

  const handleSubNumbers = () =>{
    if(firstNumber == '0'){
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('-');
    }else{
      const sub = Number(firstNumber)-Number(currentNumber)
      setCurrentNumber(String(sub))
      setOperation('-')
    }
  }

  const handleDivNumbers = () =>{
    if(firstNumber == '0'){
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('/');
    }else{
      const div = Number(firstNumber)/Number(currentNumber)
      setCurrentNumber(String(div))
      setOperation('/')
    }
  }

  const handleMultNumbers = () =>{
    if(firstNumber == '0'){
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('*');
    }else{
      const mult = Number(firstNumber)*Number(currentNumber)
      setCurrentNumber(String(mult))
      setOperation('*')
    }
  }

  const handleEquals = () =>{
    if(firstNumber != '0' && operation != "" && currentNumber != '0'){
      switch(operation){
        case '+':
          handleSumNumbers();
          break;

        case '-':
          handleSubNumbers();
          break;

        case '/':
          handleDivNumbers();
          break;

        case '*':
          handleMultNumbers();
          break;

        default:
          break;
      }
    }
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
          <Button label="C" isOperation={true} onClick={handleOnClear}/>
          <Button label="()" isChar={true}/>
          <Button label="%" isChar={true}/>
          <Button label="/" isChar={true} onClick={handleDivNumbers}/>
        </Row>

        <Row>
          <Button label="7" onClick={() => handleAppNumber('7')}/>
          <Button label="8" onClick={() => handleAppNumber('8')}/>
          <Button label="9" onClick={() => handleAppNumber('9')}/>
          <Button label="x" isChar={true} onClick={handleMultNumbers}/>
        </Row>

        <Row>
          <Button label="4" onClick={() => handleAppNumber('4')}/>
          <Button label="5" onClick={() => handleAppNumber('5')}/>
          <Button label="6" onClick={() => handleAppNumber('6')}/>
          <Button label="-" isChar={true} onClick={handleSubNumbers}/>
        </Row>

        <Row>
          <Button label="1" onClick={() => handleAppNumber('1')}/>
          <Button label="2" onClick={() => handleAppNumber('2')}/>
          <Button label="3" onClick={() => handleAppNumber('3')}/>
          <Button label="+" isChar={true} onClick={handleSumNumbers}/>
        </Row>

        <Row>
          <Button label="+/-"/>
          <Button label="0" onClick={() => handleAppNumber('0')}/>
          <Button label="," onClick={() => handleAppNumber('')}/>
          <Button label="=" isEqual={true} onClick={handleEquals}/>
        </Row>
      </Content>
    </Container>
  );
}

export default App;