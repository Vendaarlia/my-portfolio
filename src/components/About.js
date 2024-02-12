import React from 'react'

function About() {
  return (
    <section id="about">
        <div className='bg-heroimg bg-cover backdrop-brightness-90 flex md:flex-row flex-col items-center'>
            <div className='w-screen h-96 p-7 flex flex-col justify-end bg-black bg-opacity-50'>
                <h1 className=' text-7xl text text-white'>
                    SnapVision
                </h1>
                <p className='text-2xl text-white'>
                    Capturing Moments, Creating Brands
                </p>
            </div>
        </div>
    </section>
  )
}

export default About