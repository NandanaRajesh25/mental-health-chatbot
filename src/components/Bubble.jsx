import { motion } from "framer-motion";

export default function Bubble({ message, onPop, index }) {
  // Generate random position within safe bounds
  const getRandomPosition = () => {
    const minX = 10; // Minimum distance from left
    const maxX = 70; // Maximum percentage from left
    const minY = 20; // Minimum distance from top
    const maxY = 60; // Maximum percentage from top
    
    // Use index to help distribute bubbles
    const x = (Math.random() * (maxX - minX) + minX);
    const y = (Math.random() * (maxY - minY) + minY);
    
    return {
      left: `${x}%`,
      top: `${y}%`
    };
  };

  const position = getRandomPosition();

  return (
    <motion.div
      className="bubble"
      style={position}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ 
        opacity: 0,
        scale: [1, 1.2, 0],
        transition: { duration: 0.5 }
      }}
      whileHover={{ scale: 1.05 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20
      }}
      onClick={onPop}
    >
      💭 {message}
    </motion.div>
  );
}
