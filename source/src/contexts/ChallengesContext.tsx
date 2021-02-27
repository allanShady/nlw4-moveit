import { createContext, ReactNode, useEffect, useState } from "react"
import challenges from '../api/challenges.json'
import Cookies from 'js-cookie'
import { LevelUpModal } from "../components/LevelUpModal"

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
    resetChallenge: () => void;
    completedChallenge: () => void;
    closeLevelUpModal: () => void;
}

interface ChallengesProviderProps {
    children: ReactNode,
    level: number
    currentExperience: number 
    completedChallenges: number
}

export const ChallengesContext = createContext({} as ChallengesContextData)

export function ChallengesContextProvider({ children, ...rest }: ChallengesProviderProps) {
    
    const [level, setLevel] = useState( rest.level ?? 1)
    const [currentExperience, setCurrentExperience] = useState(rest.currentExperience ?? 0)
    const [completedChallenges, setCompletedChallenges] = useState(rest.completedChallenges ?? 0)
    
    const [activeChallenge, SetActiveChallenge] = useState(null)
    const [isLevelUpModelOpens, setIsLevelUpModelOpens] = useState(false)
 
    const levelDifficult = 4
    const powToElevate = 2
    const experienceToNextLevel = Math.pow((level + 1) * levelDifficult,powToElevate)
    
    function levelUp() {
        setLevel(level + 1)
        setIsLevelUpModelOpens(true)
    }

    const closeLevelUpModal = () => setIsLevelUpModelOpens(false) 

    useEffect(() => {
        Cookies.set('level', String(level))
        Cookies.set('currentExperience', String(currentExperience))
        Cookies.set('completedChallenges', String(completedChallenges))
    }, [level, currentExperience, completedChallenges])
    
    const resetChallenge = () => SetActiveChallenge(null)

    const startNewChallenge = () => {
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
        const challenge = challenges[randomChallengeIndex]

        SetActiveChallenge(challenge)
    }

    function completedChallenge() {
        if(!activeChallenge) return;

        let finalExperience = currentExperience + activeChallenge.amount;

        if(finalExperience >= experienceToNextLevel) {
            finalExperience -= experienceToNextLevel
            levelUp()
        }

        setCurrentExperience(finalExperience)
        SetActiveChallenge(null)
        setCompletedChallenges(completedChallenges + 1)
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
                experienceToNextLevel,
                completedChallenge,
                closeLevelUpModal
            }
        }>
            {children}

            { isLevelUpModelOpens && <LevelUpModal /> }
        </ChallengesContext.Provider>
    )
}