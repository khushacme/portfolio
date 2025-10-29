// src/pages/Projects.tsx
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  HStack,
  Tag,
  Icon,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaCode } from "react-icons/fa";

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);

export default function Projects() {
  const projects = [
    {
      title: "E-commerce Web Platform",
      desc: "A full-featured online store with React.js, Redux Toolkit, Node.js, and MongoDB — including product filtering, cart system, and checkout integration.",
      tags: ["React.js", "MongoDB", "Redux", "Node.js"],
      img: "https://picsum.photos/seed/ecom/600/400",
    },
    {
      title: "Healthcare Dashboard",
      desc: "Real-time health data visualization built using Angular and Firebase — includes authentication, live charts, and responsive analytics.",
      tags: ["Angular", "Firebase", "Chart.js"],
      img: "https://picsum.photos/seed/health/600/400",
    },
    {
      title: "Portfolio Website",
      desc: "Personal developer portfolio using Next.js, Chakra UI, and Framer Motion with smooth transitions, interactive sections, and light/dark theme support.",
      tags: ["Next.js", "Framer Motion", "Chakra UI"],
      img: "https://picsum.photos/seed/portfolio/600/400",
    },
  ];

  return (
    <Box
      id="projects"
      py={24}
      px={{ base: 6, md: 12 }}
      bgGradient="linear(to-br, gray.900, teal.900)"
      position="relative"
      color="white"
      overflow="hidden"
    >
      {/* Background mesh pattern */}
      <Box
        position="absolute"
        top={0}
        left={0}
        w="full"
        h="full"
        bgImage="url('/patterns/mesh.svg')"
        bgSize="cover"
        opacity={0.15}
        zIndex={0}
      />

      <MotionHeading
        textAlign="center"
        mb={16}
        fontSize={{ base: "3xl", md: "5xl" }}
        initial={{ y: -40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        zIndex={1}
        position="relative"
      >
        My Projects
      </MotionHeading>

      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
        spacing={10}
        zIndex={1}
        position="relative"
      >
        {projects.map((p, i) => (
          <MotionBox
            key={i}
            bg="rgba(255,255,255,0.08)"
            backdropFilter="blur(10px)"
            borderRadius="2xl"
            shadow="2xl"
            border="1px solid rgba(255,255,255,0.15)"
            overflow="hidden"
            whileHover={{ y: -10, scale: 1.05 }}
            transition={{ duration: 0.4 }}
            cursor="pointer"
            position="relative"
          >
            <Box
              bgImage={`url(${p.img})`}
              bgSize="cover"
              bgPos="center"
              h="200px"
              w="100%"
              _after={{
                content: '""',
                position: "absolute",
                inset: 0,
                bg: "linear-gradient(to-t, rgba(0,0,0,0.6), transparent)",
              }}
            />

            <VStack align="start" spacing={4} p={6}>
              <HStack spacing={2}>
                <Icon as={FaCode} color="teal.300" />
                <Heading size="md">{p.title}</Heading>
              </HStack>
              <Text color="gray.300" fontSize="sm">
                {p.desc}
              </Text>

              <HStack wrap="wrap" spacing={2}>
                {p.tags.map((tag) => (
                  <Tag
                    key={tag}
                    size="sm"
                    variant="subtle"
                    colorScheme="teal"
                    borderRadius="full"
                  >
                    {tag}
                  </Tag>
                ))}
              </HStack>

              <HStack spacing={3} pt={2}>
                <Icon
                  as={FaExternalLinkAlt}
                  boxSize={4}
                  color="teal.400"
                  _hover={{ color: "teal.200" }}
                />
                <Text fontSize="xs" color="gray.400">
                  View Project
                </Text>
              </HStack>
            </VStack>

            <Box
              position="absolute"
              inset={0}
              borderRadius="2xl"
              border="1px solid teal"
              opacity={0.1}
              pointerEvents="none"
            />
          </MotionBox>
        ))}
      </SimpleGrid>
    </Box>
  );
}
