import styled from 'styled-components/native';


const tamanhoMilimetros = 15;
const tamanhoRelativo = tamanhoMilimetros * 2.835;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Circle = styled.View`
  width: ${tamanhoRelativo}px;
  height: ${tamanhoRelativo}px;
  background-color: red;
  border-radius: ${tamanhoRelativo / 2}px;
`;
export default function App() {
  
  return (
    <Container>
      <Circle />
    </Container>
  );
}
