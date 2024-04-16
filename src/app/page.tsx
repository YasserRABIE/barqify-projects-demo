"use client";
import styles from "./page.module.scss";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Gallery from "./components/Gallery";
import { useSpring } from "framer-motion";

const projects = [
   {
      imageSrcFolder: "ezpt_elmodeer",
   },
   {
      imageSrcFolder: "hag_haga",
   },
   {
      imageSrcFolder: "gpal_alkalb",
   },
   {
      imageSrcFolder: "3rapia_mahshora",
   },
];

export default function Home() {
   useEffect(() => {
      const lenis = new Lenis();
      function raf(time: number) {
         lenis.raf(time);
         requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
   }, []);

   const springEffect = { stiffness: 150, damping: 15, mass: 0.1 };

   const mousePosition = {
      x: useSpring(0, springEffect),
      y: useSpring(0, springEffect),
   };

   const handleMouse = (e: React.MouseEvent) => {
      const { clientX, clientY } = e;
      mousePosition.x.set(clientX - (window.innerWidth / 2) * 0.25);
      mousePosition.y.set(clientY - (window.innerWidth / 2) * 0.3);
   };

   return (
      <main onMouseMove={handleMouse} className={styles.main}>
         {projects.map(({ imageSrcFolder }, i) => {
            return <Gallery key={i} {...mousePosition} imageSrcFolder={imageSrcFolder} />;
         })}
      </main>
   );
}
