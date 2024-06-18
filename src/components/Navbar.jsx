import { Box, Flex, Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="teal.500" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box>
          <Link as={NavLink} to="/" px={2} py={1} rounded="md" _hover={{ textDecoration: "none", bg: "teal.700" }} _activeLink={{ bg: "teal.700" }}>
            Home
          </Link>
          <Link as={NavLink} to="/upload" px={2} py={1} rounded="md" _hover={{ textDecoration: "none", bg: "teal.700" }} _activeLink={{ bg: "teal.700" }}>
            Upload
          </Link>
          <Link as={NavLink} to="/analyze" px={2} py={1} rounded="md" _hover={{ textDecoration: "none", bg: "teal.700" }} _activeLink={{ bg: "teal.700" }}>
            Analyze
          </Link>
          <Link as={NavLink} to="/identify" px={2} py={1} rounded="md" _hover={{ textDecoration: "none", bg: "teal.700" }} _activeLink={{ bg: "teal.700" }}>
            Identify
          </Link>
          <Link as={NavLink} to="/define" px={2} py={1} rounded="md" _hover={{ textDecoration: "none", bg: "teal.700" }} _activeLink={{ bg: "teal.700" }}>
            Define
          </Link>
          <Link as={NavLink} to="/calculate" px={2} py={1} rounded="md" _hover={{ textDecoration: "none", bg: "teal.700" }} _activeLink={{ bg: "teal.700" }}>
            Calculate
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;