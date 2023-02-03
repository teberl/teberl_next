import styles from "./page.module.css";
import { Rokkitt } from "@next/font/google";
const rokkitt = Rokkitt({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={rokkitt.className}>
      <h1 className={styles.headline}>Coming soon: Gartenbau Inderst</h1>
    </div>
  );
}
