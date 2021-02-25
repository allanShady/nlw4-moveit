import styles from '../styles/components/Profile.module.css'

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/allanShady.png" alt="Allan Camilo"/>
            <div>
                <strong> Allan Camilo </strong>

                
                <p>
                <img src="icons/level.svg" alt="Level"/>
                    Level 1</p>
            </div>
        </div>
    )
}