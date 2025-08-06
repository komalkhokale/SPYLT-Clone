import React from 'react'
import FlavorTitle from '../constants/FlavorTitle'
import FlavorSlider from '../constants/FlavorSlider'

const FlavorSection = () => {
  return (
    <div className='flavor-section'>
      <div className="h-full flex lg:flex-row flex-col items-center relative">
        <div className="lg:w-[57%] flex-none h-80 lg:h-full md:mt-20 xl:mt-0">
          <FlavorTitle />
        </div>
        <div className="h-full">
          <FlavorSlider />
        </div>
      </div>
    </div>
  )
}

export default FlavorSection