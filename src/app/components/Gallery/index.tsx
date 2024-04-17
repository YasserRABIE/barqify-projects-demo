import styles from "./style.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import Cursor from "../Cursor";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface Project {
   cursorLabelIcon: IconDefinition;
   imageSrcFolder: string;
   cursorColor: string;
   cursorLabelColor: string;
}

function Index({ imageSrcFolder, cursorLabelIcon, cursorColor, cursorLabelColor }: Project) {
   // ref for the vignette.
   const vignette = useRef<HTMLDivElement>(null);

   // rest of the gallery props that cursor uses.
   const cursorProps = { cursorColor, cursorLabelColor, cursorLabelIcon };

   useEffect(() => {
      const xMoveVignette = gsap.quickTo(vignette.current, "left", { duration: 0.4, ease: "power3" });
      const yMoveVignette = gsap.quickTo(vignette.current, "top", { duration: 0.4, ease: "power3" });

      window.addEventListener("mousemove", (e) => {
         xMoveVignette(e.clientX - (window.innerWidth / 2) * 0.25);
         yMoveVignette(e.clientY - (window.innerWidth / 2) * 0.3);
      });

      return () => {
         window.removeEventListener("mousemove", (e) => {
            xMoveVignette(e.clientX - (window.innerWidth / 2) * 0.25);
            yMoveVignette(e.clientY - (window.innerWidth / 2) * 0.3);
         });
      };
   }, []);
   return (
      <div className={styles.gallery}>
         <div className={styles.image__container}>
            <Image src={`/images/${imageSrcFolder}/background.jpg`} alt="image" fill loading="eager" />
         </div>
         <motion.div ref={vignette} className={styles.vignette}>
            <Image src={`/images/${imageSrcFolder}/1.jpg`} alt="image" fill loading="eager" />
         </motion.div>
         <Cursor {...cursorProps} />
      </div>
   );
}

export default Index;
