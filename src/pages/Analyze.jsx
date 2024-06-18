import { Box, Button, VStack, Text } from "@chakra-ui/react";

const Analyze = () => {
  const handleAnalyze = () => {
    // Handle DIC data analysis logic here
    console.log("Analyzing DIC data...");
  };

  return (
    <Box p={4}>
      <VStack spacing={4}>
        <Text fontSize="2xl">Analyze DIC Data</Text>
        <Button colorScheme="teal" onClick={handleAnalyze}>Analyze</Button>
      </VStack>
    </Box>
  );
};

export default Analyze;