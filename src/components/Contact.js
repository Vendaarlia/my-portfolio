import React from 'react'

function Contact() {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");

    function encode(data) {
        return Object.keys(data)
        .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])) .join("&");
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", name, email, message }),
        })
        .then(() => alert("Message sent!"))
        .catch((error) => alert(error));
    }

  return (
    <section id='contact' className='relative'>
        <div className='container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap'>
            <div className='lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative'>
                <iframe width="100%" height="100%" title="map" className='absolute inset-0' frameBorder={0} marginHeight={0} marginWidth="0" style={{ filter: "opacity(0.7)" }}
                src='https://www.google.com/maps/embed/v1/place?q=Perak+Utara,+Surabaya,+Jawa+Timur,+Indonesia&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8' />
                <div className='bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md'>
                    <div className='lg:w-1/2 px-6'>
                        <h2 className='title-font font-semibold text-white tracking-widest text-xs'>
                            ADDDRESS
                        </h2>
                        <p className='mt-1 text-white'>
                            93 Demak Timur. <br />
                            Surabaya, Indonesia
                        </p>
                    </div>
                    <div className='lg:w-1/2 px-6 mt-4 lg:mt-0'>
                        <h2 className='title-font font-semibold text-white tracking-widest text-xs'>
                            EMAIL
                        </h2>
                        <a className='text-green-400 leading-relaxed'>
                            vendaarlia9@gmail.com
                        </a>
                        <h2 className='title-font font-semibold text-white tracking-widest text-xs'>
                            PHONE
                        </h2>
                        <p className='leading-relaxed text-white'>123-456-789</p>
                    </div>
                </div>
            </div>
            <form netlify name='contact' onSubmit={handleSubmit} className='lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0'>
                <h2 className='text-black sm:text-4xl text-3xl mb-1 font-medium title-font'>
                    Connect With Us
                </h2>
                <p className="leading-relaxed mb-5">
                Ready to take your marketing and branding efforts to the next level with stunning photography? Contact SnapVision today to discuss your project requirements and receive a personalized quote.
                </p>
                <div className="relative mb-4">
                    <label htmlFor="name" className='leading-7 text-sm text-black'>
                        Name
                    </label>
                    <input type="text" name="name" id="name" onChange={(e) => setName(e.target.value)} className='w-full bg-gray-100 rounded border border-gray-700 focus:border-green-400 focuse:ring-2 focus:ring-green-400 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' />
                </div>
                <div className="relative">
                    <label htmlFor="name" className='leading-7 text-sm text-black'>
                        Email
                    </label>
                    <input type="text" name="name" id="name" onChange={(e) => setEmail(e.target.value)} className='w-full bg-gray-100 rounded border border-gray-700 focus:border-green-400 focuse:ring-2 focus:ring-green-400 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' />
                </div>
                <div className="relative">
                    <label htmlFor="name" className='leading-7 text-sm text-black'>
                        Message
                    </label>
                    <input type="text" name="name" id="name" onChange={(e) => setMessage(e.target.value)} className='w-full bg-gray-100 rounded border border-gray-700 focus:border-green-400 focuse:ring-2 focus:ring-green-400 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' />
                </div>
                <button type="submit" className='text-white bg-green-400 border-0 py-2 px-6 focus:outline-none hover:bg-green-400 rounded texxt-lg mt-4'>
                    Submit
                </button>
            </form>
        </div>
    </section>
  )
}

export default Contact