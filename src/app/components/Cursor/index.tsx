import { useRef, useEffect } from "react";
import styles from "./style.module.scss";
import { gsap } from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface CursorProps {
   cursorLabelIcon: IconDefinition;
   cursorColor: string;
   cursorLabelColor: string;
}
function Index({ cursorLabelIcon, cursorColor, cursorLabelColor }: CursorProps) {
   // ref for the cursor and cursor label.
   const cursor = useRef<HTMLSpanElement>(null);
   const cursorLabel = useRef<HTMLSpanElement>(null);

   useEffect(() => {
      // change cursor position top and left based on mouse position.
      const xMoveCursor = gsap.quickTo(cursor.current, "left", { duration: 0.2, ease: "power3" });
      const yMoveCursor = gsap.quickTo(cursor.current, "top", { duration: 0.2, ease: "power3" });

      // change cursor label position top and left based on mouse position.
      const xMoveCursorLabel = gsap.quickTo(cursorLabel.current, "left", { duration: 0.16, ease: "power3" });
      const yMoveCursorLabel = gsap.quickTo(cursorLabel.current, "top", { duration: 0.16, ease: "power3" });

      // call all the functions to move cursor and label to the mouse position.
      const moveCursorAndLabel = (e: MouseEvent) => {
         xMoveCursor(e.clientX - (window.innerWidth / 2) * 0.07);
         yMoveCursor(e.clientY - (window.innerWidth / 2) * 0.07);

         xMoveCursorLabel(e.clientX - (window.innerWidth / 2) * 0.1);
         yMoveCursorLabel(e.clientY - (window.innerWidth / 2) * 0.02);
      };

      window.addEventListener("mousemove", (e) => {
         moveCursorAndLabel(e);
      });

      return () => {
         window.removeEventListener("mousemove", (e) => {
            moveCursorAndLabel(e);
         });
      };
   }, []);
   return (
      <>
         <span style={{ backgroundColor: cursorColor }} className={styles.cursor} ref={cursor}></span>
         <span className={styles.cursorLabel} ref={cursorLabel}>
            <FontAwesomeIcon color={cursorLabelColor} size="lg" icon={cursorLabelIcon} />
         </span>
      </>
   );
}

export default Index;
