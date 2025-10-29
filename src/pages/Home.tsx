// src/pages/LandingPage.tsx
import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Heading,
  Text,
  Image,
  Button,
  IconButton,
  SimpleGrid,
  Icon,
  VStack,
  HStack,
  Stack,
  Link,
  Input,
  FormControl,
  FormLabel,
  Textarea,
  useColorModeValue,
  Badge,
  Progress,
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCode,
  FaPalette,
  FaRocket,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

/* === Motion shortcuts === */
const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);

/* === Hero slides === */
const slides = [
  {
    id: 1,
    title: "Hi, I'm Rahul Sharma",
    text: "Senior Front-End Developer crafting interactive, modern, and responsive web apps.",
    img: "/rahul-sharma.jpg",
  },
  {
    id: 2,
    title: "Creative UI & Animation",
    text: "I design seamless interfaces using Chakra UI, Framer Motion, and Next.js.",
  },
  {
    id: 3,
    title: "Performance & Scalability",
    text: "Building scalable, high-performance web solutions for startups and enterprises worldwide.",
  },
];

/* === HeroSlider Component === */
function HeroSlider() {
  const [index, setIndex] = useState(0);
  const darkBg = "linear-gradient(135deg, #0f2027, #203a43, #2c5364)";

  useEffect(() => {
    const timer = setInterval(() => setIndex((prev) => (prev + 1) % slides.length), 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setIndex((i) => (i + 1) % slides.length);
  const prevSlide = () => setIndex((i) => (i - 1 + slides.length) % slides.length);

  return (
    <Box
      id="home"
      position="relative"
      minH="100vh"
      overflow="hidden"
      bgGradient={darkBg}
      color="white"
      display="flex"
      alignItems="center"
      justifyContent="center"
      px={6}
    >
      {/* Animated Blobs */}
      <Box position="absolute" top="10%" left="5%" w="60px" h="60px" bg="teal.400" borderRadius="full" filter="blur(60px)" animate={{ y: [0, 20, 0] }} transition={{ duration: 8, repeat: Infinity }} />
      <Box position="absolute" top="30%" right="10%" w="100px" h="100px" bg="yellow.400" borderRadius="full" filter="blur(100px)" animate={{ y: [0, -30, 0] }} transition={{ duration: 10, repeat: Infinity }} />

      <AnimatePresence mode="wait">
        <MotionBox
          key={slides[index].id}
          display="flex"
          flexDirection="column"
          alignItems="center"
          textAlign="center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8 }}
          zIndex={1}
        >
          <Image
            borderRadius="full"
            boxSize={{ base: "140px", md: "180px" }}
            src={slides[index].img}
            alt={slides[index].title}
            border="4px solid rgba(255,255,255,0.4)"
            shadow="2xl"
            mb={6}
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
          <Heading
            size={{ base: "2xl", md: "4xl" }}
            bgGradient="linear(to-r, teal.300, yellow.300)"
            bgClip="text"
            mb={4}
          >
            {slides[index].title}
          </Heading>
          <Text maxW="600px" fontSize="lg" mb={6}>
            {slides[index].text}
          </Text>
          <Button
            as={motion.button}
            colorScheme="yellow"
            size="lg"
            whileHover={{ scale: 1.1 }}
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            View My Work
          </Button>
        </MotionBox>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <HStack position="absolute" bottom={8} spacing={8} justify="center" width="100%">
        <IconButton aria-label="Previous" icon={<FaChevronLeft />} onClick={prevSlide} variant="ghost" color="whiteAlpha.800" _hover={{ bg: "whiteAlpha.200" }} />
        <IconButton aria-label="Next" icon={<FaChevronRight />} onClick={nextSlide} variant="ghost" color="whiteAlpha.800" _hover={{ bg: "whiteAlpha.200" }} />
      </HStack>
    </Box>
  );
}

/* === Section Wrapper === */
const Section = ({ id, children }: { id: string; children: React.ReactNode }) => {
  const sectionBg = useColorModeValue("gray.50", "gray.900");
  return (
    <MotionBox
      id={id}
      py={20}
      px={6}
      bg={sectionBg}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </MotionBox>
  );
};

/* === Full Landing Page === */
export default function LandingPage() {
  const cardBg = useColorModeValue("whiteAlpha.700", "whiteAlpha.100");

  const skills = [
    { icon: FaCode, title: "Front-End Development", text: "React, Next.js, TypeScript, Chakra UI" },
    { icon: FaPalette, title: "UI/UX Design", text: "Figma, Tailwind, Chakra UI, accessibility" },
    { icon: FaRocket, title: "Performance & Animation", text: "Framer Motion, optimized code" },
  ];

  const projects = [
    { title: "E-commerce Web App", desc: "React + Redux + MongoDB" },
    { title: "Portfolio Website", desc: "Next.js + Chakra UI + Framer Motion" },
    { title: "Healthcare Dashboard", desc: "Angular + Firebase" },
    { title: "Analytics Platform", desc: "React + GraphQL + Tailwind" },
  ];

  return (
    <Box>
      <HeroSlider />

      {/* About */}
      <Section id="about">
        <MotionHeading textAlign="center" fontSize={{ base: "3xl", md: "5xl" }} mb={6} initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
          About Me
        </MotionHeading>
        <MotionText maxW="3xl" mx="auto" fontSize="lg" textAlign="center" color="gray.700" initial={{ x: 50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
          I'm Rahul Sharma, a Front-End Developer creating interactive, modern, and high-performance web apps with smooth animations.
        </MotionText>
      </Section>

      {/* Skills */}
      <Section id="skills">
        <Heading textAlign="center" mb={10}>Skills</Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} maxW="6xl" mx="auto">
          {skills.map((s, i) => (
            <MotionBox key={i} p={6} bg={cardBg} rounded="2xl" shadow="2xl" textAlign="center" whileHover={{ y: -8, scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }} transition={{ duration: 0.4 }}>
              <Icon as={s.icon} w={14} h={14} color="teal.400" mb={4} />
              <Heading size="md" mb={2}>{s.title}</Heading>
              <Text>{s.text}</Text>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Section>

      {/* Projects */}
      <Section id="projects">
        <Heading textAlign="center" mb={10}>Projects</Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} maxW="6xl" mx="auto">
          {projects.map((p, i) => (
            <MotionBox key={i} p={6} bg={cardBg} rounded="2xl" shadow="2xl" position="relative" whileHover={{ scale: 1.03, y: -8 }} transition={{ duration: 0.4 }}>
              <Heading size="md" mb={2}>{p.title}</Heading>
              <Text>{p.desc}</Text>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Section>

      {/* Contact */}
      <Section id="contact">
        <Heading textAlign="center" mb={6}>Contact Me</Heading>
        <Stack direction={{ base: "column", md: "row" }} spacing={12} maxW="6xl" mx="auto" align="start">
          {/* Info */}
          <VStack align="start" spacing={4} flex="1">
            <HStack><FaEnvelope /><Text>rahul.sharma.dev@gmail.com</Text></HStack>
            <HStack><FaPhone /><Text>+91 9876543210</Text></HStack>
            <HStack><FaLinkedin /><Link href="https://linkedin.com/in/rahul-sharma-dev" isExternal color="teal.400">linkedin.com/in/rahul-sharma-dev</Link></HStack>
            <HStack><FaGithub /><Link href="https://github.com/rahulsharmadev" isExternal color="teal.400">github.com/rahulsharmadev</Link></HStack>
          </VStack>

          {/* Form */}
          <Box flex="1" bg="whiteAlpha.100" p={6} rounded="2xl" backdropFilter="blur(12px)">
            <form onSubmit={(e) => { e.preventDefault(); alert("Message sent!"); }}>
              <FormControl mb={4} isRequired>
                <FormLabel>Name</FormLabel>
                <Input placeholder="Your Name" _focus={{ bg: "whiteAlpha.200" }} />
              </FormControl>
              <FormControl mb={4} isRequired>
                <FormLabel>Email</FormLabel>
                <Input type="email" placeholder="you@example.com" _focus={{ bg: "whiteAlpha.200" }} />
              </FormControl>
              <FormControl mb={4} isRequired>
                <FormLabel>Message</FormLabel>
                <Textarea placeholder="Your message..." rows={5} _focus={{ bg: "whiteAlpha.200" }} />
              </FormControl>
              <Button type="submit" colorScheme="teal" width="full" as={motion.button} whileHover={{ scale: 1.05 }}>Send Message</Button>
            </form>
          </Box>
        </Stack>
      </Section>

      {/* Footer */}
      <Box bg="gray.900" color="gray.300" py={8}>
        <VStack spacing={4}>
          <HStack spacing={6}>
            {["#home", "#about", "#skills", "#projects", "#contact"].map((href) => (
              <Link key={href} href={href} _hover={{ color: "teal.400" }}>{href.replace("#","")}</Link>
            ))}
          </HStack>
          <Text fontSize="sm">© {new Date().getFullYear()} Rahul Sharma. All rights reserved.</Text>
        </VStack>
      </Box>
    </Box>
  );
}
