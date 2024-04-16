"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Gallery from "./components/Gallery";

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
  return (
    <main>
      {projects.map(({ imageSrcFolder }, i) => {
        return <Gallery key={i} imageSrcFolder={imageSrcFolder} />;
      })}
    </main>
  );
}
