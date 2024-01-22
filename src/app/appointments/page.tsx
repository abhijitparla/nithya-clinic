import React from 'react'
import { TabsDemo } from './TabsNav'

const Appointments = () => {
  return (
    <div className='m-10'>
        <h1 className='font-bold text-3xl max-w-screen-lg'>Appointments</h1>
        <h2 className='mt-4 text-lg'>Easily book a new appointment or revisit your already booked appointments. We offer both online and in-person consultation. Online consultation takes place on a phone call with the patient after a confirmed booking.</h2>
        <div className="p-3 flex justify-center mt-5">
            <TabsDemo/>
        </div>
        
    </div>
  )
}

export default Appointments