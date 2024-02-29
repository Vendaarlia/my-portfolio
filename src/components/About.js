import React from 'react'

function About() {
  return (
    <section id="about">
        <div className='bg-heroimg bg-cover bg-center backdrop-brightness-90 flex md:flex-row flex-col items-center'>
            <div className='w-screen h-screen p-12 pb-5 flex flex-col justify-end bg-black bg-opacity-50'>
                <div className='justify-center items-center'>
                    <h1 className=' text-4xl text text-white'>
                    SnapVision
                    </h1>
                    <p className='text-1xl text-white'>
                    Capturing Moments, Creating Brands
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About