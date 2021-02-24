import { useState, useEffect } from 'react'
import styles from '../styles/components/CountDown.module.css'

let countdownTimeout: NodeJS.Timeout;

export function CountDown() {

    const [time, setTime] = useState(25 * 60)
    const [isActive, setIsActive] = useState(false);

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

            { isActive ?
                (<button type="button"
                    className={ `${styles.countdownButton} ${styles.countdownButtonActive}`}
                    onClick={resetCountdown}>
                    Abort the cycle
                </button>)
                :
                (<button type="button"
                    className={styles.countdownButton}
                    onClick={startCountdown}>
                    Start a new cycle
                </button>)
            }
        </div>
    )
}