import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import { CountdownContext } from '../contexts/CountDownContext'
import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox() {
    const { activeChallenge, resetChallenge, completedChallenge } = useContext(ChallengesContext)
    const { resetCountdown } = useContext(CountdownContext)

    const handleCountdownSucceeded = () => {
        completedChallenge()
        resetCountdown()
    }

    const handleCountdownFailed = () => {
        resetChallenge()
        resetCountdown()
    }

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
                                onClick={handleCountdownFailed}
                             >
                                I failed
                             </button>

                             <button
                                type="button"
                                className={styles.challengeSucceededButton}
                                onClick={handleCountdownSucceeded}
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