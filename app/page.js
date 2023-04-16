import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Deneme from "./components";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <Deneme />
    </main>
  );
}
