import { PhotographIcon } from '@heroicons/react/solid';
import React from 'react';
import { projects } from '../data';

function Projects() {
  return (
    <section id='project' className='text-black body-font'>
        <div className='container px-5 py-10 mx-auto text-center lg:px-40'>
            <div className='flex flex-col w-full mb-20'>
                <PhotographIcon className='mx-auto inline-block w-10 mb-4' />
                <h1 className='sm:text-4xl text-3xl font-medium title-font mb-4'>
                    Projects Collection
                </h1>
                <p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
                Explore our diverse portfolio of successful projects where we've helped numerous clients effectively communicate their brand message through captivating photography.
                </p>
            </div>
            <div className='flex flex-wrap -m-4'>
                {projects.map((project) => (
                    <a href={project.link} key={project.image} className='sm:w-1/2 w-100 p-4'>
                        <div className='flex relative h-64'>
                            <img src={project.image} alt='gallry' className='absolute inset-0 w-full h-full object-cover object-center' />
                            <div className='px-8 py-10 relative z-10 w-full bg-green-400 opacity-0 hover:opacity-100'>
                                <h2 className='tracking-widest text-sm title-font font-black text-white mb-1'>
                                    {project.subtitle}
                                </h2>
                                <p className='leading-relaxed text-white'>{project.description}</p>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Projects