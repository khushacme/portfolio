// src/pages/Skills.tsx
import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Heading,
  Image,
  Text,
  useColorModeValue,
  Progress,
  Badge,
  VStack,
  HStack,
  Divider,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);

interface SkillSlide {
  id: string;
  title: string;
  description: string;
  level: number;
  badge: string;
  image: string;
}

const skills: SkillSlide[] = [
  {
    id: "1",
    title: "React.js",
    description: "Dynamic UIs with reusable components and hooks.",
    level: 95,
    badge: "Frontend",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=60",
  },
  {
    id: "2",
    title: "Next.js",
    description: "SEO-friendly apps with SSR & static site generation.",
    level: 90,
    badge: "Full-Stack",
    image: "https://images.unsplash.com/photo-1537432376769-00a8c7efb9a0?auto=format&fit=crop&w=900&q=60",
  },
  {
    id: "3",
    title: "TypeScript",
    description: "Type-safe JavaScript for scalable projects.",
    level: 88,
    badge: "Language",
    image: "https://images.unsplash.com/photo-1587620931286-1ab198f8c9d7?auto=format&fit=crop&w=900&q=60",
  },
  {
    id: "4",
    title: "Tailwind CSS",
    description: "Utility-first CSS for rapid, responsive design.",
    level: 92,
    badge: "Styling",
    image: "https://images.unsplash.com/photo-1505685296765-3a2736de412f?auto=format&fit=crop&w=900&q=60",
  },
  {
    id: "5",
    title: "GraphQL",
    description: "Flexible API queries & schema-driven development.",
    level: 80,
    badge: "Backend",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=900&q=60",
  },
];

export default function Skills() {
  const bg = useColorModeValue("gray.50", "gray.900");
  const cardBg = useColorModeValue("rgba(255,255,255,0.7)", "rgba(26,32,44,0.6)");
  const borderGlow = useColorModeValue("teal.400", "teal.200");

  const [current, setCurrent] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const currentRef = useRef(0);
  const autoPlayRef = useRef<number | null>(null);

  useEffect(() => {
    currentRef.current = current;
  }, [current]);

  const scrollToSlide = (i: number) => {
    if (!containerRef.current) return;
    const child = containerRef.current.children[i] as HTMLElement;
    if (child) {
      containerRef.current.scrollTo({ left: child.offsetLeft, behavior: "smooth" });
      setCurrent(i);
    }
  };

  // Detect nearest slide while manually scrolling
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    let rafId: number | null = null;
    const onScroll = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const left = el.scrollLeft;
        const kids = Array.from(el.children) as HTMLElement[];
        let nearest = 0,
          min = Infinity;
        kids.forEach((c, idx) => {
          const dist = Math.abs(c.offsetLeft - left);
          if (dist < min) {
            min = dist;
            nearest = idx;
          }
        });
        if (nearest !== currentRef.current) setCurrent(nearest);
      });
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      el.removeEventListener("scroll", onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  // autoplay logic
  const stop = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = null;
    }
  };
  const start = () => {
    stop();
    autoPlayRef.current = window.setInterval(() => {
      const next = (currentRef.current + 1) % skills.length;
      scrollToSlide(next);
    }, 4000);
  };
  useEffect(() => {
    start();
    return () => stop();
  }, []);

  return (
    <Box
      id="skills"
      py={24}
      px={{ base: 6, md: 12 }}
      bgGradient="linear(to-br, #0f172a, #0f766e)"
      position="relative"
      overflow="hidden"
      color="white"
    >
      {/* Glow Orbs */}
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

      <VStack spacing={4} mb={16} position="relative" zIndex={2}>
        <MotionHeading
          fontSize={{ base: "3xl", md: "5xl" }}
          fontWeight="bold"
          bgGradient="linear(to-r, teal.300, cyan.300)"
          bgClip="text"
          initial={{ y: -40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          My Skills
        </MotionHeading>
        <Divider borderColor="teal.400" borderWidth="2px" w="80px" />
        <Text maxW="3xl" mx="auto" textAlign="center" color="gray.200" fontSize="lg">
          I constantly learn and adapt new technologies to deliver interactive, performant, and visually stunning digital experiences.
        </Text>
      </VStack>

      {/* Skill Slider */}
      <MotionBox
        ref={containerRef}
        display="flex"
        gap={6}
        overflowX="auto"
        scrollSnapType="x mandatory"
        onMouseEnter={stop}
        onMouseLeave={start}
        css={{
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": { display: "none" },
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        zIndex={2}
      >
        {skills.map((s) => (
          <MotionBox
            key={s.id}
            flex={{ base: "0 0 90%", md: "0 0 48%", lg: "0 0 calc((100% - 48px) / 3)" }}
            scrollSnapAlign="start"
            bg={cardBg}
            backdropFilter="blur(14px)"
            borderRadius="2xl"
            borderWidth="1px"
            borderColor="whiteAlpha.200"
            shadow="2xl"
            overflow="hidden"
            position="relative"
            whileHover={{ y: -10, scale: 1.05 }}
            transition={{ duration: 0.4 }}
          >
            <Image src={s.image} alt={s.title} w="100%" h="200px" objectFit="cover" />
            <VStack align="stretch" spacing={3} p={6}>
              <HStack justify="space-between">
                <Heading fontSize="xl" color="white">
                  {s.title}
                </Heading>
                <Badge colorScheme="teal" borderRadius="md" px={3}>
                  {s.badge}
                </Badge>
              </HStack>
              <Text fontSize="sm" color="gray.200">
                {s.description}
              </Text>
              <Box>
                <Text fontSize="xs" color="gray.300" mb={1}>
                  Proficiency
                </Text>
                <Progress
                  value={s.level}
                  size="sm"
                  colorScheme="teal"
                  borderRadius="full"
                  bg="whiteAlpha.300"
                />
              </Box>
            </VStack>
            <Box
              position="absolute"
              inset={0}
              borderRadius="2xl"
              border={`1px solid ${borderGlow}`}
              opacity={0.15}
              pointerEvents="none"
            />
          </MotionBox>
        ))}
      </MotionBox>

      {/* Indicators */}
      <Box display="flex" justifyContent="center" mt={8} gap={2}>
        {skills.map((_, i) => (
          <motion.div
            key={i}
            style={{
              width: current === i ? 14 : 8,
              height: current === i ? 14 : 8,
              background: current === i ? "teal" : "rgba(255,255,255,0.4)",
              borderRadius: "50%",
              cursor: "pointer",
            }}
            onClick={() => scrollToSlide(i)}
            animate={{
              scale: current === i ? 1.3 : 1,
              opacity: current === i ? 1 : 0.6,
            }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </Box>
    </Box>
  );
}
