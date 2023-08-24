import Button from "./components/Button";
import Input from "./components/Input";
import { Container, Row } from "./style";
import { useState } from "react";

function App() {

const[number, setNumber] = useState("0")


function appNumber(value){
  setNumber(prev => `${prev == "0"?"":prev}$value}`)
}

  return (
    <Container>
        <Input/>
        <Row>
          <Button label='7' onClick={appNumber(7)}/>
          <Button label='8'/>
          <Button label='9'/>
          <Button label='/'/>
        </Row>
        <Row>
          <Button label='4'/>
          <Button label='5'/>
          <Button label='6'/>
          <Button label='x'/>
        </Row>
        <Row>
          <Button label='1'/>
          <Button label='2'/>
          <Button label='3'/>
          <Button label='-'/>
        </Row>
        <Row>
          <Button label='0'/>
          <Button label='.'/>
          <Button label='='/>
          <Button label='+'/>
        </Row>
    </Container>
  );
}

export default App;
