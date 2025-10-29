// src/pages/Contact.tsx
import {
  Box,
  Heading,
  Stack,
  Text,
  Link,
  VStack,
  HStack,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);

export default function Contact() {
  const cardBg = useColorModeValue(
    "rgba(255,255,255,0.1)",
    "rgba(26,32,44,0.6)"
  );

  return (
    <Box
      id="contact"
      py={24}
      px={{ base: 6, md: 12 }}
      bgGradient="linear(to-br, gray.900, teal.900)"
      position="relative"
      color="white"
      overflow="hidden"
    >
      {/* Background glow orbs */}
      <Box
        position="absolute"
        top="10%"
        left="10%"
        w="300px"
        h="300px"
        bg="teal.500"
        opacity={0.2}
        filter="blur(160px)"
        rounded="full"
      />
      <Box
        position="absolute"
        bottom="10%"
        right="10%"
        w="280px"
        h="280px"
        bg="cyan.400"
        opacity={0.2}
        filter="blur(160px)"
        rounded="full"
      />

      <VStack spacing={6} zIndex={2} position="relative">
        <MotionHeading
          fontSize={{ base: "3xl", md: "5xl" }}
          fontWeight="bold"
          bgGradient="linear(to-r, teal.300, cyan.300)"
          bgClip="text"
          initial={{ y: -40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Contact Me
        </MotionHeading>

        <MotionBox
          bg={cardBg}
          backdropFilter="blur(12px)"
          border="1px solid rgba(255,255,255,0.15)"
          borderRadius="2xl"
          p={10}
          maxW="2xl"
          w="full"
          shadow="2xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Stack spacing={5}>
            <HStack>
              <Icon as={FaEnvelope} color="teal.300" />
              <Text>
                Email:{" "}
                <Link
                  href="mailto:rahul.sharma.dev@gmail.com"
                  color="teal.400"
                  _hover={{ color: "cyan.300", textDecoration: "underline" }}
                >
                  rahul.sharma.dev@gmail.com
                </Link>
              </Text>
            </HStack>

            <HStack>
              <Icon as={FaPhone} color="teal.300" />
              <Text>Phone: +91 9876543210</Text>
            </HStack>

            <HStack>
              <Icon as={FaLinkedin} color="teal.300" />
              <Text>
                LinkedIn:{" "}
                <Link
                  href="https://linkedin.com/in/rahul-sharma-dev"
                  color="teal.400"
                  _hover={{ color: "cyan.300", textDecoration: "underline" }}
                  isExternal
                >
                  linkedin.com/in/rahul-sharma-dev
                </Link>
              </Text>
            </HStack>

            <HStack>
              <Icon as={FaGithub} color="teal.300" />
              <Text>
                GitHub:{" "}
                <Link
                  href="https://github.com/rahulsharmadev"
                  color="teal.400"
                  _hover={{ color: "cyan.300", textDecoration: "underline" }}
                  isExternal
                >
                  github.com/rahulsharmadev
                </Link>
              </Text>
            </HStack>
          </Stack>
        </MotionBox>
      </VStack>
    </Box>
  );
}
