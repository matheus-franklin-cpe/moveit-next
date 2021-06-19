import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/Profile.module.css";

export function Profile() {
  const { level } = useContext(ChallengesContext);
  return (
    <div className={styles.profileContainer}>
      <img
        src="https://cdn.discordapp.com/avatars/519302377048899585/1f368eef35eda4e1a39cab2207e482eb.png"
        alt="Matheus Franklin"
      />
      <div>
        <strong>Matheus Franklin</strong>
        <p>
          <img src="icons/level.svg" />
          Level {level}
        </p>
      </div>
    </div>
  );
}
