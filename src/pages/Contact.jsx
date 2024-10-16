import React, { useState, useRef } from 'react'
import emailjs from "@emailjs/browser"
import { Suspense } from "react"
import Loader from '../components/Loader';
import { Canvas } from '@react-three/fiber';
import Fox from "../models/Fox"
import useAlert from '../hooks/useAlert';
import Alert from '../components/Alert';
// import Fox from ""
function Contact() {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [isLoading, setisLoading] = useState(false)
  const [currentAnimation, setCurrentAnimation] = useState("idle")
  const { alert, showAlert, hideAlert } = useAlert();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setisLoading(true);
    setCurrentAnimation("hit")
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
      showAlert({ show: true, text: "Message sent sucessfully!!", type: "success" })
      console.log("Email sent successfully!");
      setTimeout(() => {
        setCurrentAnimation("idle")
        hideAlert();
        setForm({ name: "", email: "", message: "" })
      }, [2000])

    } catch (error) {
      // Error case: handle showing error message
      console.error("Failed to send email:", error);
      showAlert({ show: true, text: "Message not sent!!", type: "danger" })
      setCurrentAnimation("idle")
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
  const handleFocus = () => setCurrentAnimation("walk")
  const handleBlur = () => setCurrentAnimation("idle")
  return (
    <section className='relative flex lg:flex-row flex-col max-container'>
      {alert.show && <Alert {...alert} />}
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
      <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000,
          }}>
          <directionalLight intensity={2.5} position={[0, 0, 1]} />
          <ambientLight intensity={0.5} />
          <Suspense fallback={<Loader />}>
            <Fox
              currentAnimation={currentAnimation}
              position={[0.5, 0.35, 0]}
              rotation={[12.6, -0.6, 0]}
              scale={[1, 0.5, 0.5]}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  )
}

export default Contact
