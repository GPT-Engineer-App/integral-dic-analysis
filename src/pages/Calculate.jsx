import { Box, Button, VStack, Text } from "@chakra-ui/react";

const Calculate = () => {
  const handleCalculate = () => {
    // Handle J-integral calculation logic here
    console.log("Calculating J-integral...");
  };

  return (
    <Box p={4}>
      <VStack spacing={4}>
        <Text fontSize="2xl">Calculate J-Integral</Text>
        <Button colorScheme="teal" onClick={handleCalculate}>Calculate</Button>
      </VStack>
    </Box>
  );
};

export default Calculate;