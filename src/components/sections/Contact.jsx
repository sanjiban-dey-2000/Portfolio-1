import React,{useState} from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
    const [formData,setFormData]=useState({
        name:"",
        email:"",
        message:"",
    });

    const handleSubmit=(e)=>{
        e.preventDefault();

        emailjs.sendForm(import.meta.env.VITE_SERVICE_ID,import.meta.env.VITE_TEMPLATE_ID,e.target,import.meta.env.VITE_PUBLIC_KEY).then((result)=>{
            alert("Message Sent");
            setFormData({name:"",email:"",message:""});
        }).catch(()=>{
            alert("Ooopss!! something went wrong. Please try again");
        });
    }

  return (
    <section id='contact' className='min-h-screen flex items-center justify-center py-20'>
        <div className='px-4 w-150'>
            <h2 className='text-3xl text-center font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent'>Get In Touch</h2>
            <form className='space-y-6' onSubmit={handleSubmit}>
                <div className='relative'>
                    <input type="text" id='name' name='name' value={formData.name} required className='w-full bg-white/5 border border-white/20 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5' placeholder='Your Name....' 
                    onChange={(e)=>setFormData({...formData,name:e.target.value})}/>
                </div>
                <div className='relative'>
                    <input type="email" id='email' name='email' value={formData.email} required className='w-full bg-white/5 border border-white/20 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5' placeholder='email@yahoo.com' onChange={(e)=>setFormData({...formData,email:e.target.value})}/>
                </div>
                <div className='relative'>
                    <textarea id='message' name='message' rows={6} value={formData.message} required className='w-full bg-white/5 border border-white/20 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5' placeholder='Your Message.....'
                    onChange={(e)=>setFormData({...formData,message:e.target.value})} />
                </div>
                <button type='submit' className='w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(53,130,246,0.4)]'>
                    Send Message
                </button>
            </form>
        </div>
    </section>
  )
}

export default Contact