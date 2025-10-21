import { motion } from "framer-motion";

export function WordmarkImage({ src }: { src: string }) {
  return (
    <motion.div
      initial={{ scale: 0.92, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
      className="w-[560px] max-w-[80vw]"
    >
      <img 
        src={src} 
        alt="SENIL" 
        className="w-full h-auto"
        style={{ aspectRatio: '1120/336' }}
      />
    </motion.div>
  );
}