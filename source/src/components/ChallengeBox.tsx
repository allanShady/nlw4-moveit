import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox() {
    const hasActiveChallenges = true

    return (
        <div className={styles.challengeBoxContainer}>
            {
                hasActiveChallenges
                    ? (<div>
                        
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