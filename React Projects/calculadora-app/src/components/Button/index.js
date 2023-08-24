import { ButtonContainer } from "./styles";

const Button = ({label, onClick, isOperation,isChar, isEqual}) => {
  return (
    <ButtonContainer onClick={onClick} style={{'color': isOperation?'red':isChar?'green':'', 'backgroundColor': isEqual?'green':''}}>
      {label}
    </ButtonContainer>
  );
}

export default Button;
