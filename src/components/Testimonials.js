
import React from 'react';
import { ChatIcon, UsersIcon } from '@heroicons/react/solid';
import { testimonials } from '../data';

function Testimonials() {
  return (
    <section id='testimonials'>
        <div className='container px-5 py-10 mx-auto text-center'>
            <UsersIcon className='w-10 inline-block mb-4' />
            <h1 className='sm:text-4xl text-3xl font-medium title-font mb-12'>
                Testimonials
            </h1>
            <div className='flex flex-wrap m-4'>
                {testimonials.map((testimonial) => (
                    <div className='p-4 md:w-1/2 w-full'>
                        <div className='h-full bg-gray-800 p-8 rounded'>
                            <ChatIcon className='block text-white w-8 textgray-500 mb-4' />
                            <p className='leading-relaxed text-white mb-6'>{testimonial.quote}</p>
                            <div className='inline-flex items-center'>
                                <img src={testimonial.image} alt='testimonila' className='w-12 rounded-full flex-shrink-0 object-cover object-center' />
                                <span className='flex-grow flex flex-col pl-4'>
                                    <span className='title-font font-medium text-white'>
                                        {testimonial.name}
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Testimonials