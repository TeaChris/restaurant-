'use client'

import { FC } from 'react'
import Countdown from 'react-countdown'

interface CountDownProps {}

const endingDate = new Date('2023-08-31')

const CountDown: FC<CountDownProps> = ({}) => {
  return (
    <Countdown
      date={endingDate}
      className="font-bold text-5xl text-yellow-300"
    />
  )
}

export default CountDown
