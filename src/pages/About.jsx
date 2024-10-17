import { skills } from "../Constants/Index"

function About() {
  return (
    <section className='max-container'>
      <h1 className='head-text'>Hello
        , I'm <span className='blue-gradient_text font-semibold drop-shadow'>Ritam</span>
      </h1>
      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>Software Enginner based in India, specializing in technical
          education through hands-on learning and building real world applications.
        </p>
      </div>
      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>
        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className="block-container w-20 h-20">
              <div className="btn-back rounded-xl"/>
              <div className="btn-front rounded-xl flex items-center justify-center">
                <img src={skill.imageUrl} alt={skill.name} className="w-1/2 -1/2 object-contain" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
