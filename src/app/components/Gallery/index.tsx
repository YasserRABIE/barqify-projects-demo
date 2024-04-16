import styles from "./style.module.scss";
import Image from "next/image";
import { MotionValue, motion } from "framer-motion";

function index({ imageSrcFolder, x, y }: { imageSrcFolder: string; x: MotionValue<number>; y: MotionValue<number> }) {
   return (
      <div className={styles.gallery}>
         <div className={styles.imageContainer}>
            <Image src={`/images/${imageSrcFolder}/background.jpg`} alt="image" fill />
         </div>
         <motion.div
            style={{
               x: x,
               y: y,
            }}
            className={styles.vignette}
         >
            <Image src={`/images/${imageSrcFolder}/1.jpg`} alt="image" fill />
         </motion.div>
      </div>
   );
}

export default index;
