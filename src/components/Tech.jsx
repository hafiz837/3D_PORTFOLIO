import React from 'react'
import { SectionWrapper } from '../HOC/SectionWrapper'
import { BallCanvas } from './canvas'
import { technologies } from '../constants/constants'


const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
  {  technologies.map((teachnology)=>(
    <div className='w-28 h-28' key={teachnology.name}>
      <BallCanvas icon={teachnology.icon}/>
    </div>
  ))}

    </div>
  )
}

export default SectionWrapper(Tech,"")