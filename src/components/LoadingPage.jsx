import { motion } from "framer-motion";

const LoadingPage = () => {
  const variants = {
    initial: {
      scaleY: 0.5,
      opacity: 0,
    },
    animate: {
      scaleY: 1,
      opacity: 1,
      transition: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 1,
        ease: "circIn",
      },
    },
  };
  return (
    <div className="grid h-screen place-content-center  px-4 py-24">
      <motion.div
        transition={{
          staggerChildren: 0.25,
        }}
        initial="initial"
        animate="animate"
        className="flex gap-1"
      >
        <motion.div variants={variants} className="h-12 w-2 bg-sky-600" />
        <motion.div variants={variants} className="h-12 w-2 bg-sky-600" />
        <motion.div variants={variants} className="h-12 w-2 bg-sky-600" />
        <motion.div variants={variants} className="h-12 w-2 bg-sky-600" />
        <motion.div variants={variants} className="h-12 w-2 bg-sky-600" />
      </motion.div>
    </div>
  );
};

export default LoadingPage;
