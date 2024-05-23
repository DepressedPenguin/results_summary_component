import styles from "./result.module.scss";

// $$$$$$$$$$$$$$$$$$$$$
// ICONS SECTIONS THAT I NEED
import icon_memory from "../../assets/icon_bar_result/icon-memory.svg";
import icon_reaction from "../../assets/icon_bar_result/icon-reaction.svg";
import icon_verbal from "../../assets/icon_bar_result/icon-verbal.svg";
import icon_visual from "../../assets/icon_bar_result/icon-visual.svg";

export default function Result() {
  return (
    <>
      <div className={styles.result_card_main}>
        <div className={styles.left_box}>
          <div className={styles.headline_result}>
            <h3 className={styles.headline_h3}>Your Result</h3>
          </div>
          <div className={styles.result_soc}>
            <div className={styles.cer_state}>
              <h1 className={styles.result_card_headline}>76</h1>
              <p className={styles.result_sub_para}>of 100</p>
            </div>
          </div>
          <div className={styles.para_result}>
            <h1>Great</h1>
            <p className={styles.para_right_card}>
              You scored higher than 65% of
              <br />
              the people who have taken
              <br />
              these tests.
            </p>
          </div>
        </div>
        <div className={styles.right_box}>
          <div className={styles.headline_summary}>
            <p className={styles.summary_p}>Summary</p>
          </div>
          <div className={styles.states_space}>
            <div className={styles.box_state}>
              <div className={styles.result_headline}>
                <img src={icon_reaction} alt="reaction icon" />
                <p className={styles.reaction_span}>Reaction</p>
              </div>
              <div className={styles.result_number}>
                <p className={styles.main_number_result}>80</p>
                <p className={styles.sub_number_grey}>/</p>
                <p className={styles.sub_number_grey}>100</p>
              </div>
            </div>
            <div className={styles.box_state}>
              <div className={styles.result_headline}>
                <img src={icon_memory} alt="memory icon" />
                <p className={styles.memory_span}>Memory</p>
              </div>
              <div className={styles.result_number}>
                <p className={styles.main_number_result}>92</p>
                <p className={styles.sub_number_grey}>/</p>
                <p className={styles.sub_number_grey}>100</p>
              </div>
            </div>
            <div className={styles.box_state}>
              <div className={styles.result_headline}>
                <img src={icon_verbal} alt="verbal icon" />
                <p className={styles.verbal_span}>Verbal</p>
              </div>
              <div className={styles.result_number}>
                <p className={styles.main_number_result}>61</p>
                <p className={styles.sub_number_grey}>/</p>
                <p className={styles.sub_number_grey}>100</p>
              </div>
            </div>
            <div className={styles.box_state}>
              <div className={styles.result_headline}>
                <img src={icon_visual} alt="visual icon" />
                <p className={styles.visual_span}>Visual</p>
              </div>
              <div className={styles.result_number}>
                <p className={styles.main_number_result}>72</p>
                <p className={styles.sub_number_grey}>/</p>
                <p className={styles.sub_number_grey}>100</p>
              </div>
            </div>
          </div>
          <div className={styles.btn_keep}>
            <input
              className={styles.btn_continue}
              type="button"
              value="Continue"
            />
          </div>
        </div>
      </div>
    </>
  );
}
