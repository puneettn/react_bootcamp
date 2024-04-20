import styles from "./ButtonContainer.module.css";

const ButtonContainer = () => {
  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "9",
    "0",
    ".",
  ];

  return (
    <div className={styles.buttonsContainer}>
      {buttonNames.map((eachButton) => (
        <button key={eachButton} className={styles.buttons}>
          {eachButton}
        </button>
      ))}
    </div>
  );
};

export default ButtonContainer;
