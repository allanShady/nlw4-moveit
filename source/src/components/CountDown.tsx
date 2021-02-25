import { useState, useEffect, useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/CountDown.module.css'

let countdownTimeout: NodeJS.Timeout;

export function CountDown() {
    const { startNewChallenge } = useContext(ChallengesContext)

    const [time, setTime] = useState(0.1 * 60)
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    const CURRENT_MINUTES = Math.floor(time / 60)
    const CURRENT_SECONDS = time % 60

    const [minuteLeft, minuteRight] = String(CURRENT_MINUTES).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(CURRENT_SECONDS).padStart(2, '0').split('');

    const startCountdown = () => setIsActive(true)
    const resetCountdown = () => {
        clearTimeout(countdownTimeout)
        setIsActive(false)
        setTime(25 * 60)
    }

    useEffect(() => {
        if (isActive && time > 0)
            countdownTimeout = setTimeout(() => setTime(time - 1), 1000)
        else if (isActive && time == 0) {
            setIsActive(false)
            setHasFinished(true);
            startNewChallenge()
        }
    }, [isActive, time])

    return (
        <div>
            <div className={styles.countDownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            {
                hasFinished
                    ? (<button type="button" disabled
                        className={styles.countdownButton}>
                        Cycle closed 
                        <img src="icons/check_circle.svg" alt="check mark"/>
                    </button>)
                    : (<>
                        { isActive ?
                            (<button type="button"
                                className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                                onClick={resetCountdown}>
                                Abort the cycle
                                <img src="icons/close.svg" alt="check mark"/>
                            </button>)
                            :
                            (<button type="button"
                                className={styles.countdownButton}
                                onClick={startCountdown}>
                                Start a new cycle
                            </button>)
                        }
                    </>
                    )
            }
        </div>
    )
}