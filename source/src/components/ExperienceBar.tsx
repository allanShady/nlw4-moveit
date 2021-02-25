import styles from '../styles/components/ExperienceBar.module.css';

export function ExperienceBar() {
    return(
        <header className={styles.experienceBar}>
            <span>0 px</span>
            <div>
                <div style={{ width: '50%' }} />
                <span className="current-experience" style={{ left: '50%' }}>
                    300 px
                </span>
            </div>
            <span>600px</span>
        </header>
    )
}