import { skills, experiences } from "../Constants/Index"
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

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
          {skills.map((skill, index) => (
            <div className="block-container w-20 h-20"
              key={index}>
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex items-center justify-center">
                <img src={skill.imageUrl} alt={skill.name} className="w-1/2 -1/2 object-contain" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="py-16">
        <h3 className="subhead-txt font-semibold">Project Experience</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>I worked with lots of projects , leveling up my skills and teaming with smart people throughout the my learning journey and left with hands-on experience on building real world applications.
          </p>
        </div>
        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
              key={experience.project_name}
              date={experience.date}
              icon={
                <div className=" flex items-center justify-center w-full h-full">
                  <img src={experience.icon} alt={experience.project_name} className="w-[60%] h-[60%] object-contain"/>
                </div>
              }
              iconStyle={{
                background:experience.iconBg
              }}
              contentStyle={{
                borderBottom:"8px",
                borderStyle:"solid",
                borderBottomColor:experience.iconBg,
                boxShadow:"none",
              }}
              >
                <div >
                  <h3 className="font-semibold font-poppins text-black text-xl">{experience.title}</h3>
               <p className="text-black-500 font-medium font-base" style={{margin:0}}>{experience.project_name}</p>
                </div>
                <ul className="my-5 list-disc ml-5 space-y-2">
                   {experience.points.map((point,index)=>(
                    <li key={`experience_point_${index}`} className="text-black-500/50 font-normal pl-1 text-sm">{point}</li>
                   ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
      <hr className="border-slate-200" />
    </section>
  )
}

export default About
