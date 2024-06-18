import { Box, Button, VStack, Text } from "@chakra-ui/react";

const Identify = () => {
  const handleIdentify = () => {
    // Handle crack tip identification logic here
    console.log("Identifying crack tip...");
  };

  return (
    <Box p={4}>
      <VStack spacing={4}>
        <Text fontSize="2xl">Identify Crack Tip</Text>
        <Button colorScheme="teal" onClick={handleIdentify}>Identify</Button>
      </VStack>
    </Box>
  );
};

export default Identify;