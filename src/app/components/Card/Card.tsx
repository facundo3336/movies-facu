import styles from "./Card.module.scss";

interface Props {
  rating: number;
}

export const Card = ({ rating }: Props) => {
  const ratingClassname = () => {
    if (rating < 30) {
      return "red";
    } else if (rating < 75) {
      return "yellow";
    }

    return "green";
  };

  return (
    <div>
      <div
        style={{
          backgroundImage:
            "url(" +
            `${"https://m.media-amazon.com/images/I/71WWFJzCCgL._AC_UF894,1000_QL80_.jpg"}` +
            ")",
        }}
        className={styles.poster}
      >
        <div className={styles.rating + " " + styles[ratingClassname()]}>
          78
        </div>
      </div>
      <div className={styles.infoBox}>
        <h2>Hotel Transylvania: Transformania</h2>
        <span>Mar 10, 2022</span>
      </div>
    </div>
  );
};
