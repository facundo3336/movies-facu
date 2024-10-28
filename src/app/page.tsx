import { Card } from "./components/Card/Card";
import { Header } from "./components/Header/Header";
import styles from "./page.module.css";
import { DynaPuff } from "next/font/google";

const inter = DynaPuff({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={styles.page + " " + inter.className}>
      <Header></Header>
      <section>
        <Card rating={74} />
      </section>
    </div>
  );
}
