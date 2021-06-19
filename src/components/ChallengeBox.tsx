import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import { CountdownContext } from "../contexts/CountdownContext";
import styles from "../styles/components/ChallengeBox.module.css";
import { CompletedChallenges } from "./CompletedChallenges";

export function ChallengeBox() {
    const {activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext);    
    const{resetCountdown}= useContext(CountdownContext);

    function handdleChallengeSucceeded(){
      completeChallenge();
      resetCountdown();
      new Audio('/victory_tone_ff7.mp3').play()
    }

    function handdleChallengeFailed(){
      resetChallenge();
      resetCountdown();
      new Audio('/Mario_Game_Over.mp3').play()
    }

  return (
    <div className={styles.challengeBoxContainer}>
      {activeChallenge ? (
          <div className={styles.challengeActive}>
             <header>Ganhe {activeChallenge.amount}</header> 
             <main>
                 <img src ={`icons/${activeChallenge.type}.svg`}></img>
                 <strong>Novo Desafio</strong>
                 <p>{activeChallenge.description}</p>
             </main>

             <footer>
                 <button 
                 type="button"
                 className={styles.challengeFailedButton}
                 onClick={handdleChallengeFailed}
                 >
                    Falhei
                 </button>
                 <button 
                 type="button"
                 className={styles.challengeSucceededButton}
                 onClick={handdleChallengeSucceeded}
                 >
                Completei
                </button>
             </footer>
            </div>
      ) : (
          <div className={styles.challengeNotActive}>
          <strong>Finalize um ciclo para receber um desafio</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up" />
            Avance de level completando desafios.
          </p>
        </div>
      )}
    </div>
  );
}
