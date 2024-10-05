// src/components/Options/Options.jsx
import React from "react"; // Рекомендований імпорт React
import styles from "./Options.module.css";

const Options = ({ onLeaveFeedback, onResetFeedback, totalFeedback }) => {
    return (
        <div className={styles.options}>
            <button onClick={() => onLeaveFeedback("good")}>Good</button>
            <button onClick={() => onLeaveFeedback("neutral")}>Neutral</button>
            <button onClick={() => onLeaveFeedback("bad")}>Bad</button>
            {totalFeedback > 0 && (
                <button onClick={onResetFeedback} className={styles.reset}>
                    Reset
                </button>
            )}
        </div>
    );
};

export default Options;
