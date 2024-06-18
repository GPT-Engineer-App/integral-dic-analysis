import { Box, Button, Input, VStack, Text } from "@chakra-ui/react";
import { useState } from "react";

const Upload = () => {
  const [files, setFiles] = useState(null);

  const handleFileChange = (event) => {
    setFiles(event.target.files);
  };

  const handleUpload = () => {
    if (files) {
      // Handle file upload logic here
      console.log("Files uploaded:", files);
    } else {
      console.error("No files selected");
    }
  };

  return (
    <Box p={4}>
      <VStack spacing={4}>
        <Text fontSize="2xl">Upload Image Sequences</Text>
        <Input type="file" multiple onChange={handleFileChange} />
        <Button colorScheme="teal" onClick={handleUpload}>Upload</Button>
      </VStack>
    </Box>
  );
};

export default Upload;