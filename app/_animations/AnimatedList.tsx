import { motion } from "framer-motion";
import { listVariants } from ".";

type Props = {
  className?: string;
  children: React.ReactNode;
};

export default function AnimatedList({ className, children }: Props) {
  return (
    <motion.ul
      className={className}
      variants={listVariants}
      initial="hidden"
      animate="visible"
    >
      {children}
    </motion.ul>
  );
}
