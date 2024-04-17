"use client";
import styles from "./page.module.scss";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Gallery from "./components/Gallery";
import { faMagnifyingGlass, faArrowPointer, faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import { faEye as faEyeRegular } from "@fortawesome/free-regular-svg-icons";

const projects = [
   {
      cursorLabelIcon: faEyeRegular,
      imageSrcFolder: "ezpt_elmodeer",
      cursorColor: "#fff",
      cursorLabelColor: "#000",
   },
   {
      cursorLabelIcon: faMagnifyingGlass,
      imageSrcFolder: "hag_haga",
      cursorColor: "#000",
      cursorLabelColor: "#fff",
   },
   {
      cursorLabelIcon: faArrowPointer,
      imageSrcFolder: "gpal_alkalb",
      cursorColor: "#EB5938",
      cursorLabelColor: "#000",
   },
   {
      cursorLabelIcon: faLocationArrow,
      imageSrcFolder: "3rapia_mahshora",
      cursorColor: "#2B9A53",
      cursorLabelColor: "#fff",
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

   return (
      <main className={styles.main}>
         <div className={styles.main__content}>
            {projects.map((project, i) => {
               return <Gallery key={i} {...project} />;
            })}
         </div>
      </main>
   );
}
