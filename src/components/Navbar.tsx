import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  VStack,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Text
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { HamburgerIcon } from "@chakra-ui/icons";

export default function Navbar() {
  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/skills", label: "Skills" },
    { to: "/projects", label: "Projects" },
    { to: "/contact", label: "Contact" },
    // { to: "/rahulslider", label: "RahulSlider" },
      
  ];

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      position="sticky"
      top="0"
      zIndex="1000"
      bg="rgba(18,18,18,0.75)" // glass-like dark bg
      backdropFilter="blur(12px)"
      borderBottom="1px solid rgba(255,255,255,0.08)"
    >
      <Flex
        maxW="7xl"
        mx="auto"
        px={{ base: 4, md: 8 }}
        py={3}
        justify="space-between"
        align="center"
      >
        {/* Brand / Logo */}
        <Text
          fontWeight="extrabold"
          fontSize="2xl"
          bgGradient="linear(to-r, teal.300, blue.400)"
          bgClip="text"
          letterSpacing="wide"
        >
          Rahul&nbsp;Sharma
        </Text>

        {/* Desktop Links */}
        <HStack spacing={8} display={{ base: "none", md: "flex" }}>
          {links.map((link) => (
            <Link
  key={link.to}
  as={NavLink}
  to={link.to}
  position="relative"
  px={1}
  fontWeight="medium"
  color="gray.200"
  textDecoration="none"
  _after={{
    content: '""',
    position: "absolute",
    bottom: "-2px",
    left: 0,
    width: "0%",
    height: "2px",
    bg: "teal.300",
    transition: "width 0.3s ease",
  }}
  _hover={{
    color: "teal.300",
    textDecoration: "none",
    _after: { width: "100%" }, 
  }}
>
  {link.label}
</Link>
          ))}
        </HStack>

        {/* Mobile Menu Button */}
        <IconButton
          aria-label="Open Menu"
          icon={<HamburgerIcon />}
          display={{ base: "flex", md: "none" }}
          onClick={onOpen}
          variant="ghost"
          color="gray.100"
          _hover={{ bg: "whiteAlpha.100" }}
        />
      </Flex>

      {/* Drawer for Mobile */}
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent bg="gray.900">
          <DrawerCloseButton color="gray.200" />
          <DrawerBody>
            <VStack spacing={6} mt={12}>
              {links.map((link) => (
                <Link
                  key={link.to}
                  as={NavLink}
                  to={link.to}
                  onClick={onClose}
                  fontSize="lg"
                  color="gray.200"
                  _hover={{ color: "teal.300", textDecoration: "none" }}
                >
                  {link.label}
                </Link>
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
