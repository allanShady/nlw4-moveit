import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox() {
    const hasActiveChallenges = true

    return (
        <div className={styles.challengeBoxContainer}>
            {
                hasActiveChallenges
                    ? (<div className={styles.challengeActive}>
                        <header>Earn 400 xp</header>
                        
                        <main>
                            <strong>New Challenge</strong>
                            <img src="icons/body.svg" alt="new challenge body"/>
                            <p>Walk for 30 minutes</p>
                        </main>
                        
                        <footer>
                            <button
                                type="button"
                                className={styles.challengeFailedButton}
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