import { BadgeCheckIcon, ChipIcon } from '@heroicons/react/solid';
import React from 'react';
import { skills } from '..data';

function Skills() {
  return (
    <section id='skills'>
        <div className='container px-5 py-10 mx-auto'>
            <div className='text-center mb-20'>
                <ChipIcon className='w-10 inline-block mb-4' />
                <h1 className='sm:text-4xl text-3xl font-medium title-font text-white mb-4'>
                    Skills &amp; Games
                </h1>
            </div>
        </div>
    </section>
  )
}

export default Skills