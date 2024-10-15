import React, { useState, useRef } from 'react'
import emailjs from "@emailjs/browser"
function Contact() {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [isLoading, setisLoading] = useState(false)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setisLoading(true);
  
    try {
      await emailjs.send(
        import.meta.env.VITE_APP_EMAILJS_SEVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Ritam",
          from_email: form.email,
          to_email: "ritamdevs2004@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
      );
      
      // Success case: handle showing success message
      // Todo: Show success message
      console.log("Email sent successfully!");
      setForm({name:"",email:"",message:""})
  
    } catch (error) {
      // Error case: handle showing error message
      console.error("Failed to send email:", error);
      // Todo: Show error message to the user (e.g., with an alert or a message on the page)
      alert("Failed to send email. Please try again later.");
    } finally {
      setisLoading(false);
      // Todo: Hide alert
    }
  };
  
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: [e.target.value] })
  }
  const handleFocus = () => {

  }
  const handleBlur = () => {

  }
  return (
    <section className='relative flex lg:flex-row flex-col max-container'>
      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text'>Get in Touch</h1>
        <form className='w-full flex flex-col gap-7 mt-14'
          onSubmit={handleSubmit}
          ref={formRef}>
          <div className='flex flex-col gap-7 mt-14'>
            <label className='text-black-500 font-semibold'>
              Name
              <input
                type="text"
                name="name"
                className='input'
                placeholder='Ritam '
                required
                value={form.name}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </label>
            <label className='text-black-500 font-semibold'>
              Email
              <input
                type="email"
                name="email"
                className='input'
                placeholder='ritam@example.com'
                required
                value={form.email}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </label>
            <label className='text-black-500 font-semibold'>
              Message
              <textarea
                name="message"
                rows="4"
                className='textarea'
                placeholder='Let me know how I can help you!'
                required
                value={form.message}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              ></textarea>
            </label>
            <button
              type="submit"
              className='btn'
              disabled={isLoading}
              onFocus={handleFocus}
              onBlur={handleBlur}
            >
              {isLoading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
