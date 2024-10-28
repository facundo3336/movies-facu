import Link from "next/link";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link href={"/"}>
        <h1>MoviesFacu</h1>
      </Link>
    </header>
  );
};
