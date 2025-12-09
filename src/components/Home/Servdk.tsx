import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useInView } from "react-intersection-observer";
import Events from "./Events";

// --------------------------------------------------------
// ANGLED BLOCK COMPONENT
// --------------------------------------------------------
interface AngledBlockProps {
  text: string;
  color: string;
  rotateBase: number;
  index: number;
}

const AngledBlock: React.FC<AngledBlockProps> = ({
  text,
  color,
  rotateBase,
  index,
}) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.08, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.4]);
  const rotate = useTransform(
    scrollYProgress,
    [0, 1],
    [`${rotateBase - 4}deg`, `${rotateBase + 4}deg`]
  );

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity, rotate }}
      className="
        w-[88vw] max-w-[680px] h-[110px]
        flex items-center justify-center
        shadow-[0px_15px_25px_rgba(0,0,0,0.4)]
        rounded-[6px]
        absolute
      "
      initial={{ y: index * 90 }}
    >
      <div
        style={{ backgroundColor: color }}
        className="w-full h-full flex items-center justify-center rounded-[6px]"
      >
        <div className="text-white text-[48px] uppercase tracking-[6px] font-light">
          {text}
        </div>
      </div>
    </motion.div>
  );
};

// --------------------------------------------------------
// VIDEO PLACEHOLDER
// --------------------------------------------------------
const VideoPlaceholder = () => {
  const textSegments = Array.from({ length: 4 }, (_, i) => ({
    text: "PLAY VIDEO",
    rotate: i * 90,
  }));

  const PlayIcon = () => (
    <div className="absolute z-20 w-0 h-0 border-t-[10px] border-b-[10px] border-l-[18px] border-t-transparent border-b-transparent border-l-white ml-1" />
  );

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="absolute w-[80px] h-[80px] bg-white/10 rounded-full flex items-center justify-center z-10">
        <PlayIcon />
      </div>

      {textSegments.map((segment, index) => (
        <div
          key={index}
          className="absolute w-[180px] h-[180px] flex items-start justify-center text-white/80 font-serif tracking-[2px] text-xs"
          style={{ transform: `rotate(${segment.rotate}deg)` }}
        >
          <span
            className="absolute top-[-10px]"
            style={{ transform: `rotate(-${segment.rotate}deg)` }}
          >
            {segment.text}
          </span>
        </div>
      ))}
    </div>
  );
};

// --------------------------------------------------------
// MAIN COMPONENT
// --------------------------------------------------------
const ScrollHighlight: React.FC = () => {
  const items = [
    { text: "CUSTOM PLANS", color: "#BA8966", rotate: 4 },
    { text: "BOLD IDEAS", color: "#F9EDE5", rotate: -3 },
    { text: "SMOOTH FLOW", color: "#723126", rotate: 2 },
    { text: "LASTING JOY", color: "#F9D860", rotate: -4 },
  ];

  // Section in-view detection
  const [sectionRef, sectionInView] = useInView({
    threshold: 0.3,
  });

  // Video scroll animation target (always mounted)
  const videoRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: videoRef, // Ref always exists now
    offset: ["start end", "center center"],
  });

  const width = useTransform(scrollYProgress, [0, 1], ["180px", "100%"]);
  const height = useTransform(scrollYProgress, [0, 1], ["180px", "400px"]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], ["50%", "12px"]);
  const placeholderOpacity = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6],
    [1, 1, 0]
  );
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.6, 1],
    ["#181818", "#181818", "transparent"]
  );

  return (
    <div
      ref={sectionRef}
      className="w-full flex flex-col items-center bg-black py-20 relative space-y-12"
    >
      {/* HEADING */}
      <div className="text-center space-y-1">
        <h2 className="text-3xl font-bold text-white">
          Experience the Difference:
        </h2>
        <h3 className="text-2xl font-semibold text-gray-300">
          Why Choose Hush Lush
        </h3>
      </div>

      {/* ANGLED CARDS */}
      <div className="h-[100vh] w-full flex justify-center relative">
        <div className="relative h-[450px] w-full max-w-[700px]">
          {items.map((item, i) => (
            <AngledBlock
              key={i}
              text={item.text}
              color={item.color}
              index={i}
              rotateBase={item.rotate}
            />
          ))}
        </div>
      </div>

      <div className="text-3xl text-gray-300 -mt-[120px]">And More...</div>

      {/* ------------------------------------------------- */}
      {/*       VIDEO SCROLL + ENTER / EXIT ANIMATIONS      */}
      {/* ------------------------------------------------- */}

      {/* ALWAYS-MOUNTED WRAPPER (prevents hydration error) */}
      <div className="w-full flex justify-center mt-10 mb-20 min-h-[400px]">
        <div ref={videoRef} className="w-full max-w-[900px] relative">
          <AnimatePresence mode="wait">
            {sectionInView && (
              <motion.div
                key="videoBox"
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                exit={{
                  opacity: 0,
                  scale: 0.4,
                  x: 200,
                  y: 200,
                  transition: { duration: 0.8 },
                }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 flex justify-center items-center"
              >
                <motion.div
                  style={{ width, height, borderRadius, backgroundColor }}
                  className="overflow-hidden shadow-2xl relative"
                >
                  <motion.div
                    style={{ opacity: placeholderOpacity }}
                    className="absolute inset-0 z-30"
                  >
                    <VideoPlaceholder />
                  </motion.div>

                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                    title="YouTube video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* EVENTS SECTION */}
      <Events />
    </div>
  );
};

export default ScrollHighlight;
