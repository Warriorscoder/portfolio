"use client"

import React, { useState } from 'react'
import { BackgroundGradientAnimation } from './ui/background-gradient-animation'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify';
import { Flip } from 'react-toastify';
import { InfinitySpin } from 'react-loader-spinner'

function Contact() {
    
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handlechange = (e: { target: { name: string; value: string } })=>{
        
        if(e.target.name === "name")
            setName(e.target.value)
        
        if(e.target.name === "email")
            setEmail(e.target.value)

        if(e.target.name === "message")
            setMessage(e.target.value)

        // console.log(name, email, message)
    }
    
    
    const handlesubmit = async(e: { preventDefault: () => void })=>{
        e.preventDefault()
        setIsSubmitting(true)
        const response = await axios.post('/api/send-email',{name, message})

        if(response.data.success)
        {
            toast.success(response.data.message, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Flip,
                });
            
            setName("")
            setEmail("")
            setMessage("")
        }

        else
        {
            toast.success(response.data.message, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Flip,
                });
                
        }

        setIsSubmitting(false)
    }

    return (
        <div className="" id='contact'>
            <BackgroundGradientAnimation>
            <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Flip}
             />        
            
            <div className="absolute z-40 inset-0  flex min-h-screen items-center justify-start">
                <div className="mx-auto w-5/6 sm:w-full max-w-lg">
                    <h1 className="text-4xl font-medium">Contact us</h1>
                    <p className="mt-3">Email at <span className='text-[#FF00FF]'>aniketfreelance20@gmail.com</span> or message us here:</p>

                    <form className="mt-10">

                        <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
                        <div className="grid gap-6 sm:grid-cols-2">
                            <div className="relative z-0">
                                <input onChange={handlechange} value={name} type="text" name="name" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-white focus:border-blue-600 focus:outline-none focus:ring-0 " placeholder=" " />
                                <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-white duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Your name</label>
                            </div>
                            <div className="relative z-0">
                                <input onChange={handlechange} value={email} type="text" name="email" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-white focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " />
                                <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-white duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Your email</label>
                            </div>
                            <div className="relative z-0 col-span-2">
                                <textarea onChange={handlechange} value={message} name="message" rows={5} className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-white focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" "></textarea>
                                <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-white duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Your message</label>
                            </div>
                        </div>
                        <button type="submit" onClick={handlesubmit} className={`mt-5 rounded-md bg-black ${!isSubmitting &&"px-10 py-2"} text-white`}>{!isSubmitting && `Send Message`} {isSubmitting && <InfinitySpin width="100" color="#DA70D6"/>
                        }</button>
                    </form>
                </div>
            </div>
            </BackgroundGradientAnimation>
        </div>
    )
}

export default Contact

