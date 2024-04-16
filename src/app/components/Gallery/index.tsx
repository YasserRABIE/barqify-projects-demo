import styles from "./style.module.scss";
import Image from "next/image";

function index({ imageSrcFolder }: { imageSrcFolder: string }) {
  return (
    <div className={styles.gallery}>
      <div className={styles.imageContainer}>
        <Image
          src={`/images/${imageSrcFolder}/background.jpg`}
          alt="image"
          fill />
      </div>
      <div className={styles.vignette}>
        <Image
          src={`/images/${imageSrcFolder}/1.jpg`}
          alt="image"
          fill />
      </div>
    </div>
  );
}

export default index;
