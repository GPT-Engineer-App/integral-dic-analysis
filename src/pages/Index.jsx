import { Container, Text, VStack, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Welcome to the J-Integral Calculation Web App</Text>
        <Text>Upload image sequences, analyze DIC data, identify the crack tip, define the integration region, and calculate the J-integral.</Text>
        <Button as={Link} to="/upload" colorScheme="teal" size="lg">Get Started</Button>
      </VStack>
    </Container>
  );
};

export default Index;