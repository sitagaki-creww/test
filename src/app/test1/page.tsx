import styles from "./page.module.scss";
import { Carousel } from "../_components/Carousel/index";

export default function Test1() {
  return (
    <main className={styles.main}>
      <Carousel />
    </main>
  );
}
