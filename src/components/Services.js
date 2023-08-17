import React from 'react';
import {motion} from 'framer-motion';
import { fadeIn } from '../variants';
import { Link } from 'react-scroll';

// const services = [{

//   name: "UI/UX Design",
//   description: `Lorem ipsum dolor sit amet consectetur adipisicing elit
//   Reiciendis commodi consequuntur`,
//  link: 'Learn More',
//  percentage: "95%"
// },{

//   name: "Development",
//   description: `Lorem ipsum dolor sit amet consectetur adipisicing elit
//   Reiciendis commodi consequuntur`,
//  link: 'Learn More',
//  percentage: "90%"
// },
// {

//   name: "Digital Marketing",
//   description: `Lorem ipsum dolor sit amet consectetur adipisicing elit
//   Reiciendis commodi consequuntur repellat`,
//  link: 'Learn More',
//  percentage: "80%"
// },
// {

//   name: "Product Branding",
//   description: `Lorem ipsum dolor sit amet consectetur adipisicing elit
//   Reiciendis commodi consequuntur repellat `,
//  link: 'Learn More',
//  percentage: "70%"
// },]

const Services = () => {
  return (
  <section className='section' id='services'>
    <div className="container mx-auto">
      <div className='flex flex-col lg:flex-row'>
        <motion.div variants={fadeIn('right',0.3)}
        initial='hidden'
        whileInView={"show"}
        viewport={{once: false , amount: 0.3}} 
         className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-9 lg:mb-0 h-[600px]'>
          <h2 className='h2 text-accent mb-2 mt-12'>My Skills.</h2>
          <h3 className='h3 max-w-[455px] mb-5'>Passionate MERN Stack Developer  Dedicated to continuous learning and innovation.</h3>
          <Link to='work'><button className='btn btn-sm'>See my Work</button></Link>
        </motion.div>
        <motion.div  
        variants={fadeIn('left',0.5)}
        initial='hidden'
        whileInView={"show"}
        viewport={{once: false , amount: 0.3}} className='flex-1'>
          <div>
            {/* {services.map((services,index)=>{
              const {name, description,link,percentage} = services; */}
            
                  <div className='max-w-[470px] skill-box'> 
                    <h4 className='text-[18px] tracking-wider 
                    font-primary font-semibold mb-3'>HTML</h4>
                     <div className="skill-bar lg:w-[110%]">
                    <span className="skill-per html">
                        <span className="tooltip">95%</span>
                    </span>
                </div>
                    {/* <p className='font-secondary leading-tight'>{description}</p> */}
                   
                  </div>
                  {/* <div className='flex flex-col flex-1 items-end'>
                    <a href='/' className='btn w-9 h-9 mb-[36px] flex justify-center items-center'><BsArrowUpRight/></a>
                    <a href='/' className='text-gradient text-sm'>{link}</a>
                  </div> */}
                

                <div className='max-w-[470px] skill-box'> 
                    <h4 className='text-[18px] tracking-wider 
                    font-primary font-semibold mb-3'>CSS</h4>
                     <div className="skill-bar lg:w-[110%]">
                    <span className="skill-per css">
                        <span className="tooltip">85%</span>
                    </span>
                </div>
                   
                   
                  </div>
                  

                <div className='max-w-[470px] skill-box'> 
                    <h4 className='text-[18px] tracking-wider 
                    font-primary font-semibold mb-3'>Javascript</h4>
                     <div className="skill-bar lg:w-[110%]">
                    <span className="skill-per javascript">
                        <span className="tooltip">70%</span>
                    </span>
                </div>
                  
                   
                  </div>
                 


                <div className='max-w-[470px] skill-box'> 
                    <h4 className='text-[18px] tracking-wider 
                    font-primary font-semibold mb-3'>React JS</h4>
                     <div className="skill-bar lg:w-[110%]">
                    <span className="skill-per reactjs">
                        <span className="tooltip">80%</span>
                    </span>
                </div>
                  
                   
                  </div>
                

           <div className='max-w-[470px] skill-box'> 
                    <h4 className='text-[18px] tracking-wider 
                    font-primary font-semibold mb-3'>Node JS</h4>
                     <div className="skill-bar lg:w-[110%]">
                    <span className="skill-per nodejs">
                        <span className="tooltip">75%</span>
                    </span>
                     </div>
                   
                  </div>

                  <div className='max-w-[470px] skill-box'> 
                    <h4 className='text-[18px] tracking-wider 
                    font-primary font-semibold mb-3'>Express JS</h4>
                     <div className="skill-bar lg:w-[110%]">
                    <span className="skill-per expressjs">
                        <span className="tooltip">70%</span>
                    </span>
                     </div>
                   
                  </div>

                  <div className='max-w-[470px] skill-box'> 
                    <h4 className='text-[18px] tracking-wider 
                    font-primary font-semibold mb-3'>MongoDB</h4>
                     <div className="skill-bar lg:w-[110%]">
                    <span className="skill-per mongodb">
                        <span className="tooltip">80%</span>
                    </span>
                     </div>
                   
                  </div>
                


                  
{/* 
            })} */}
          </div>
        </motion.div>
      </div>
    </div>
   </section>);
};

export default Services;
