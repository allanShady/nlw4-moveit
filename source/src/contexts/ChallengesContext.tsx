import { createContext, ReactNode, useState } from "react"

interface ChallengesContextData {
    level: number;
    currentExperience: number;
    completedChallenges: number;
    startNewChallenge: () => void;
    levelUp: () => void
}

interface ChallengesProviderProps {
    children: ReactNode
}

export const ChallengesContext = createContext({} as ChallengesContextData)

export function ChallengesContextProvider({ children }: ChallengesProviderProps) {
    const [level, setLevel] = useState(1)
    const [currentExperience, setCurrentExperience] = useState(0)
    const [completedChallenges, setCompletedChallenges] = useState(0)

    const levelUp = () => setLevel(level + 1)
    const startNewChallenge = () => console.log('New challenge');

    return (
        <ChallengesContext.Provider value={
            {
                level,
                currentExperience,
                completedChallenges,
                startNewChallenge,
                levelUp
            }
        }>
            {children}
        </ChallengesContext.Provider>
    )
}