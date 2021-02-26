import { useContext } from 'react';
import { CountdownContext } from '../contexts/CountDownContext';
import styles from '../styles/components/CountDown.module.css'

export function CountDown() {
    const {
        minutes,
        seconds,
        hasFinished,
        isActive,
        startCountdown,
        resetCountdown
    } = useContext(CountdownContext)


    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

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
                        <img src="icons/check_circle.svg" alt="check mark" />
                    </button>)
                    : (<>
                        { isActive ?
                            (<button type="button"
                                className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                                onClick={resetCountdown}>
                                Abort the cycle
                                <img src="icons/close.svg" alt="check mark" />
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