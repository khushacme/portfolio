// src/pages/About.tsx
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Icon,
  VStack,
  HStack,
  Divider,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  FaReact,
  FaAngular,
  FaJs,
  FaPalette,
  FaRocket,
  FaCode,
} from "react-icons/fa";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);

export default function About() {
  const bg = useColorModeValue("gray.50", "gray.900");

  const skills = [
    {
      icon: FaReact,
      title: "React.js & Next.js",
      description:
        "Crafting modern, high-performing SPAs & SSR apps using React and Next.js with seamless animations.",
      color: "#61DBFB",
    },
    {
      icon: FaAngular,
      title: "Angular",
      description:
        "Building enterprise-grade frontend architectures with Angular’s power and structure.",
      color: "#DD0031",
    },
    {
      icon: FaJs,
      title: "JavaScript / TypeScript",
      description:
        "Writing clean, type-safe, and optimized code to create dynamic user experiences.",
      color: "#F7DF1E",
    },
    {
      icon: FaPalette,
      title: "UI / UX Design",
      description:
        "Turning ideas into pixel-perfect interfaces using Figma, Tailwind, and Chakra UI.",
      color: "#E91E63",
    },
    {
      icon: FaRocket,
      title: "Performance & Animation",
      description:
        "Creating buttery-smooth UI transitions with Framer Motion and code optimization.",
      color: "#9C27B0",
    },
    {
      icon: FaCode,
      title: "Clean Code & Architecture",
      description:
        "Following SOLID principles and best practices to build scalable front-end systems.",
      color: "#00B5D8",
    },
  ];

  return (
    <Box
      id="about"
      minH="100vh"
      py={24}
      px={{ base: 6, md: 16 }}
      bgGradient="linear(to-br, #0f172a, #0f766e)"
      color="white"
      position="relative"
      overflow="hidden"
    >
      {/* Floating Glow Background */}
      <Box
        position="absolute"
        top="10%"
        left="10%"
        w="300px"
        h="300px"
        bg="teal.400"
        opacity={0.25}
        filter="blur(150px)"
        borderRadius="50%"
        zIndex={0}
      />
      <Box
        position="absolute"
        bottom="10%"
        right="10%"
        w="250px"
        h="250px"
        bg="cyan.500"
        opacity={0.25}
        filter="blur(140px)"
        borderRadius="50%"
        zIndex={0}
      />

      <VStack spacing={4} zIndex={2} position="relative" mb={20}>
        <MotionHeading
          fontSize={{ base: "3xl", md: "5xl" }}
          fontWeight="bold"
          bgGradient="linear(to-r, teal.300, cyan.300)"
          bgClip="text"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </MotionHeading>

        <Divider
          borderColor="teal.400"
          borderWidth="2px"
          w="80px"
          borderRadius="full"
        />

        <MotionText
          maxW="3xl"
          mx="auto"
          textAlign="center"
          fontSize="lg"
          color="gray.200"
          lineHeight="taller"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Hi, I’m <strong>Rahul Sharma</strong> — a passionate Frontend Developer
          with 8+ years of experience. I love designing smooth, interactive web
          experiences that merge creativity with code. Every line I write aims to
          make the web more delightful and accessible.
        </MotionText>
      </VStack>

      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 3 }}
        spacing={10}
        maxW="7xl"
        mx="auto"
        position="relative"
        zIndex={2}
      >
        {skills.map((skill, idx) => (
          <MotionBox
            key={idx}
            p={8}
            rounded="2xl"
            bg="rgba(255,255,255,0.06)"
            backdropFilter="blur(14px)"
            border="1px solid rgba(255,255,255,0.1)"
            boxShadow="0 10px 25px rgba(0,0,0,0.3)"
            whileHover={{
              y: -10,
              scale: 1.05,
              boxShadow: "0 25px 50px rgba(0,0,0,0.5)",
            }}
            transition={{ duration: 0.4 }}
          >
            <VStack spacing={4}>
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 1.2 }}
              >
                <Icon as={skill.icon} w={16} h={16} color={skill.color} />
              </motion.div>

              <Heading size="md" color="teal.200">
                {skill.title}
              </Heading>

              <Text fontSize="sm" color="gray.300" textAlign="center">
                {skill.description}
              </Text>
            </VStack>
          </MotionBox>
        ))}
      </SimpleGrid>

      {/* Bottom Glow Line */}
      <Box
        mt={20}
        h="2px"
        w="80%"
        mx="auto"
        bgGradient="linear(to-r, transparent, teal.400, transparent)"
      />
    </Box>
  );
}
