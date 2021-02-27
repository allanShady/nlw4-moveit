import Head from 'next/head'
import { GetServerSideProps } from 'next'

import { ChallengeBox } from '../components/ChallengeBox'
import { CompletedChallenges } from '../components/CompletedChallenges'
import { CountDown } from '../components/CountDown'
import { ExperienceBar } from '../components/ExperienceBar'
import { Profile } from '../components/Profile'
import { CountDownProvider } from '../contexts/CountDownContext'
import styles from '../styles/pages/Home.module.css'
import { ChallengesContextProvider } from '../contexts/ChallengesContext'

interface HomeProps {
  level: number
  currentExperience: number 
  completedChallenges: number
}

export default function Home(props: HomeProps) {
  return (
    <ChallengesContextProvider 
      level={props.level}
      currentExperience={props.currentExperience}
      completedChallenges={props.completedChallenges}
      > 
    <div className={styles.container}>
      <Head>
        <title>Start move.it</title>
      </Head>

      <ExperienceBar />

      <CountDownProvider>
        <section>
          <div>
            <Profile />
            <CompletedChallenges />
            <CountDown />
          </div>

          <div>
            <ChallengeBox />
          </div>
        </section>
      </CountDownProvider>
    </div>
    </ChallengesContextProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) =>  {

  const { level, currentExperience, completedChallenges } = ctx.req.cookies

  return { 
    props: {
      level: Number(level), 
      currentExperience: Number(currentExperience), 
      completedChallenges: Number(completedChallenges)
    } }
}