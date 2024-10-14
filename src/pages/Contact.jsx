import React, { useState, useRef } from 'react'
import emailjs from "@emailjs/browser"
function Contact() {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [isLoading, setisLoading] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault();
    setisLoading(true);
    emailjs.sendForm(
      "service_4h2rm8p",
      "template_zlxh5fc"
    )
  }
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: [e.target.value] })
    console.log(form)
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
