import { motion } from "framer-motion";

export function WordmarkImage({ src }: { src: string }) {
  return (
    <motion.div
      initial={{ scale: 0.3, opacity: 1 }}
      animate={{ scale: 4, opacity: 1 }}
      transition={{ duration: 2.5, ease: "easeInOut" }}
      className="w-[560px] max-w-[80vw]"
    >
      <img 
        src={src} 
        alt="SENIL" 
        className="w-full h-auto"
      />
    </motion.div>
  );
}