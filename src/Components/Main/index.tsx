import Result from "../Result";
import styles from "./main.module.scss";

// ##################

export default function Main() {
  return (
    <>
      <div className={styles.main_card}>
        <Result />
      </div>
    </>
  );
}
