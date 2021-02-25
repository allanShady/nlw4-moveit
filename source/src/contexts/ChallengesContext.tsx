import { createContext, ReactNode, useState } from "react"
import challenges from '../api/challenges.json'

interface Challenge {
    type: string;
    description: string;
    amount: number
}

interface ChallengesContextData {
    level: number;
    currentExperience: number;
    completedChallenges: number;
    experienceToNextLevel: number;
    activeChallenge: Challenge;
    startNewChallenge: () => void;
    levelUp: () => void;
    resetChallenge: () => void
}

interface ChallengesProviderProps {
    children: ReactNode
}

export const ChallengesContext = createContext({} as ChallengesContextData)

export function ChallengesContextProvider({ children }: ChallengesProviderProps) {
    const [level, setLevel] = useState(1)
    const [currentExperience, setCurrentExperience] = useState(0)
    const [completedChallenges, setCompletedChallenges] = useState(0)
    
    const [activeChallenge, SetActiveChallenge] = useState(null)
 
    const levelDifficult = 4
    const powToElevate = 2
    const experienceToNextLevel = Math.pow((level + 1) * levelDifficult,powToElevate)
    const levelUp = () => setLevel(level + 1)
    
    const resetChallenge = () => SetActiveChallenge(null)
    const startNewChallenge = () => {
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
        const challenge = challenges[randomChallengeIndex]

        SetActiveChallenge(challenge)
    }

    return (
        <ChallengesContext.Provider value={
            {
                level,
                currentExperience,
                completedChallenges,
                startNewChallenge,
                levelUp,
                activeChallenge,
                resetChallenge,
                experienceToNextLevel
            }
        }>
            {children}
        </ChallengesContext.Provider>
    )
}