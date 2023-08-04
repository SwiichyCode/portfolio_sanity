import { motion } from "framer-motion";
import { itemVariants } from ".";

type Props = {
  className?: string;
  children: React.ReactNode;
};

export default function AnimatedItemList({ className, children }: Props) {
  return (
    <motion.li className={className} variants={itemVariants}>
      {children}
    </motion.li>
  );
}
