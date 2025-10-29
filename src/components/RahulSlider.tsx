import { useEffect, useRef, useState } from "react";
import gsap from "gsap";


export default function App() {
  const slidesRef = useRef<HTMLDivElement[]>([]);
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [current, setCurrent] = useState(0);

  const slideTexts = [
    "Hi, I'm Rahul|I design experiences & build interfaces",
    "Full Stack Developer|React • Node • TypeScript",
    "I love Parallax & Smooth Animations |Creative Code • Motion Design",
  ];

  const showSlide = (i: number) => {
    if (!slidesRef.current[i]) return;

    gsap.to(slidesRef.current[current] as HTMLDivElement, { opacity: 0, duration: 1 });
    gsap.fromTo(
      slidesRef.current[i] as HTMLDivElement,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power2.out" }
    );
    setCurrent(i);
  };

  useEffect(() => {
    showSlide(0);

    const interval = setInterval(() => {
      setCurrent((prev) => {
        const next = (prev + 1) % slideTexts.length;
        gsap.to(slidesRef.current[prev] as HTMLDivElement, { opacity: 0, duration: 1 });
        gsap.fromTo(
          slidesRef.current[next] as HTMLDivElement,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1.2, ease: "power2.out" }
        );
        return next;
      });
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    gsap.to(".shape", { rotation: 360, repeat: -1, duration: 60, ease: "linear" });
    gsap.to(".shape.circle", { scale: 1.2, repeat: -1, yoyo: true, duration: 8, ease: "sine.inOut" });

    const slider = sliderRef.current;
    if (!slider) return;

    const handleMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 10;
      const y = (e.clientY / window.innerHeight - 0.5) * -10;
      gsap.to(slider, { rotationY: x, rotationX: y, transformPerspective: 800, duration: 0.5 });
    };
    const reset = () => gsap.to(slider, { rotationX: 0, rotationY: 0, duration: 0.6 });

    slider.addEventListener("mousemove", handleMove);
    slider.addEventListener("mouseleave", reset);

    return () => {
      slider.removeEventListener("mousemove", handleMove);
      slider.removeEventListener("mouseleave", reset);
    };
  }, []);

  return (
    <div className="slider" ref={sliderRef}>
      {slideTexts.map((text, i) => {
        const [title, sub] = text.split("|");
        return (
          <div
            key={i}
            className="slide"
            ref={(el) => {
              if (el) slidesRef.current[i] = el;
            }}
          >
            <h1>{title}</h1>
            <p>{sub}</p>
          </div>
        );
      })}

      <div className="shape circle" style={{ width: 300, height: 300, top: "10%", left: "15%" }} />
      <div className="shape" style={{ width: 400, height: 400, top: "60%", left: "70%", rotate: "45deg" }} />
      <div className="shape circle" style={{ width: 200, height: 200, top: "40%", left: "50%" }} />

      <div className="dots">
        {slideTexts.map((_, i) => (
          <span
            key={i}
            className={i === current ? "active" : ""}
            onClick={() => showSlide(i)}
          />
        ))}
      </div>
    </div>
  );
}
