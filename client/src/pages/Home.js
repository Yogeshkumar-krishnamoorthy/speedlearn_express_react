import styled from 'styled-components';

const Container = styled.div`
  background-color: #eee;
  padding: 20px;
  border-radius: 10px;
`;

const Text = styled.p`
  font-size: 16px;
  color: #333;
`;

function Home() {
  return (
    <Container>
      <Text>Hello, World!</Text>
    </Container>
  );
}

export default Home
