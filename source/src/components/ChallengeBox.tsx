import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox() {
    const { activeChallenge, resetChallenge } = useContext(ChallengesContext)

    return (
        <div className={styles.challengeBoxContainer}>
            {
                activeChallenge
                    ? (<div className={styles.challengeActive}>
                        <header>Earn {activeChallenge.amount} xp</header>
                        
                        <main>
                            <strong>New Challenge</strong>
                            <img src={`icons/${activeChallenge.type}.svg`} alt="new challenge body"/>
                            <p>{activeChallenge.description}</p>
                        </main>
                        
                        <footer>
                            <button
                                type="button"
                                className={styles.challengeFailedButton}
                                onClick={resetChallenge}
                             >
                                I failed
                             </button>

                             <button
                                type="button"
                                className={styles.challengeSucceededButton}
                             >
                                I completed
                             </button>
                        </footer>
                    </div>)
                    : (
                        <div className={styles.challengeNotActive}>
                            <strong>Complete a cycle to get challenges</strong>
                            <p>
                                <img src="icons/level-up.svg" alt="level up" />
                             Go to the next level by completing the given challenges
                             </p>
                        </div>)
            }
        </div>
    )
}