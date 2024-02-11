import React from 'react'

function Contact() {
  return (
    <section id='contact' className='relative'>
        <div className='container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap'>
            <div className='lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative'>
                <iframe width="100%" height="100%" title="map" className='absolute inset-0' frameBorder={0} marginHeight={0} marginWidth="0" style={{ filter: "opacity(0.7)" }}
                src='https://www.google.com/maps/embed/v1/place?q=97+warren+st+new+york+city&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8' />
                <div className='bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md'>
                    <div className='lg:w-1/2 px-6'>
                        <h2 className='title-font font-semibold text-white tracking-widest text-xs'>
                            ADDDRESS
                        </h2>
                        <p className='mt-1'>
                            93 Demak Timur. <br />
                            Surabaya, Indonesia
                        </p>
                    </div>
                    <div className='lg:w-1/2 px-6 mt-4 lg:mt-0'>
                        <h2 className='title-font font-semibold text-white tracking-widest text-xs'>
                            EMAIL
                        </h2>
                        <a className='text-indigo-400 leading-relaxed'>
                            vendaarlia9@gmail.com
                        </a>
                        <h2 className='title-font font-semibold text-white tracking-widest text-xs'>
                            PHONE
                        </h2>
                        <p className='leading-relaxed'>123-456-789</p>
                    </div>
                </div>
            </div>
            <form netlify name='contact' className='lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0'>
                <h2></h2>
            </form>
        </div>
    </section>
  )
}

export default Contact