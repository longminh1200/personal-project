import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6"
import { IoIosArrowRoundForward } from "react-icons/io"
import { FaPlus } from "react-icons/fa6"
import './aboutUs.css'

function About() {
  return (
    <div>

      <div className='main'>

        <div className='pageTitle'>
          <div className='titleContainer'>
            <div className='title'>
              <h2 style={{color:'black',margin:'-0.20em 0 -0.18em 0',lineHeight:'1.1',fontWeight:'600',fontSize:'48px'}}>About Us One</h2>
              <div className='arrowTxt'>
                <div style={{marginRight:'3px',paddingRight:'5px', display:'flex', alignItems:'center'}}>
                  <a href='#' style={{whiteSpace:'normal',wordBreak:'break-word',fontWeight:'400',fontSize:'20px',color:'#6E6E6E'}}>Home</a>
                  <FaArrowRightLong style={{marginLeft:'10px',fontSize:'20px',color:'#6E6E6E'}}/>  
                </div>
                <p style={{whiteSpace:'normal',wordBreak:'break-word', fontWeight:'400',fontSize:'20px',color:'#6E6E6E'}}>About Us One</p>
              </div>
            </div>
          </div>
        </div>

        <div className='about-Us'>
          <div className='aboutContainer'>
            <div className='aboutImg'>
              <div className='img1'>
                <img src='https://themeholy.com/wordpress/rasm/wp-content/uploads/2023/07/about_1.jpg'/>
              </div>
              <div className='img2'>
                <img src='https://themeholy.com/wordpress/rasm/wp-content/uploads/2023/07/about_2.jpg'/>
              </div>
            </div>
            <div className='moveX1'>
              <img src='https://themeholy.com/wordpress/rasm/wp-content/uploads/2023/07/flower_1_3-2.png' style={{maxWidth:'100%', height:'auto'}}/>
            </div>

            <div className='aboutWrap'>
              <div className='chooseUs1'>
                <span className='subTitle'>About Us</span>
                <img src='https://themeholy.com/wordpress/rasm/wp-content/uploads/2023/07/title_right.svg' style={{marginLeft:'10px'}}/>
                </div>
                <h2 style={{color:'black', fontSize:'48px',marginTop:'0',marginBottom:'15px'}}>Discover The Ultimate Spa Massage Experience</h2>
                <p style={{color:'black'}}>Discover a world of tranquility, luxury, and personalized care as you embark on a journey of self-care and renewal. Visit us today and let us transport you to a realm of beauty and serenity.</p>

                <div className='aboutWrapper'>
                  <div className='about-info'>
                    <h3 style={{color:'black'}}>
                      <img src='https://themeholy.com/wordpress/rasm/wp-content/uploads/2023/07/title_left.svg'/>
                      Personal Program
                    </h3>
                  </div>
                  <div className='about-info'>
                    <h3 style={{color:'black'}}>
                      <img src='https://themeholy.com/wordpress/rasm/wp-content/uploads/2023/07/title_left.svg'/>
                      Expert Nutritionist
                    </h3>
                  </div>
                </div>

                <p style={{color:'black'}}>We also offer private rooms for more intimate treatments and couples’ packages for a romantic escape.</p>
                <a href='#' className='discoverBtn'>DISCOVER MORE <IoIosArrowRoundForward style={{height:'30px',width:'30px'}}/></a>
              </div>

              
            </div>

          
        </div>

        <div>
          <div className='overflowContainer'>
            <div className='counter-sec'>
              <div className='counterGroup'>
                <div className='Inner'>
                  <img src='https://themeholy.com/wordpress/rasm/wp-content/uploads/2023/07/counter_1_1.svg'/>
                  <div>
                    <h3 style={{fontSize:'64px', margin:'0', color:'black'}}>25+</h3>
                    <p style={{color:'#6E6E6E', margin:'0'}}>Years of Experience</p>
                  </div>
                </div>

                <div className='Inner'>
                  <img src='https://themeholy.com/wordpress/rasm/wp-content/uploads/2023/07/counter_1_2.svg'/>
                  <div>
                    <h3 style={{fontSize:'64px', margin:'0', color:'black'}}>100%</h3>
                    <p style={{color:'#6E6E6E', margin:'0'}}>Natural Products</p>
                  </div>
                </div>

                <div className='Inner'>
                  <img src='https://themeholy.com/wordpress/rasm/wp-content/uploads/2023/07/counter_1_3.svg'/>
                  <div>
                    <h3 style={{fontSize:'64px', margin:'0', color:'black'}}>56K+</h3>
                    <p style={{color:'#6E6E6E', margin:'0'}}>Satisfied Clients</p>
                  </div>
                </div>

                <div className='Inner'>
                  <img src='https://themeholy.com/wordpress/rasm/wp-content/uploads/2023/07/counter_1_4.svg'/>
                  <div>
                    <h3 style={{fontSize:'64px', margin:'0', color:'black'}}>36+</h3>
                    <p style={{color:'#6E6E6E', margin:'0'}}>Specialists Team</p>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>

        <div className='section31'>
        <div style={{marginLeft:'134px', marginRight:'134px'}}>
          <div className='chooseUs1'>
          <span className='subTitle'>Why Choose Us</span>
          <img src='https://themeholy.com/wordpress/rasm/wp-content/uploads/2023/07/title_right.svg' style={{marginLeft:'10px'}}/>
          </div>
          <h1 style={{color:'black',width:'51%'}}>We Have 25 Years Of Experience With Nail Style.</h1>
          <p style={{color:'black',width:'39%'}}>We prioritize the cleanrliness and comfort of our clients, ensuring a hygienic and relaxing environment throughout your visit. Our salon adheres to strict sanitization protocols, and all our tools.</p>
          
          <div className='chooseWrap'>
            <div className='insideWrap'>

              <div className='wrap1'>
                <img src='https://themeholy.com/wordpress/rasm/wp-content/uploads/2023/07/choose_1.svg'/>
                <div className='chooseTxt'>
                <h3 style={{color:'black', marginBottom:' 8px'}}>Brand Nail Art Equipment</h3>
                <p style={{color:'black', margin:'0',width:'68%'}}>From classic manicures and pedicures to intricate nail art and personalized nail extensions</p>
                </div>
              </div>

              <div className='wrap2'>
                <img src='https://themeholy.com/wordpress/rasm/wp-content/uploads/2023/07/choose_2.svg'/>
                <div className='chooseTxt'>
                <h3 style={{color:'black', marginBottom:' 8px'}}>Best Place</h3>
                <p style={{color:'black', margin:'0',width:'60%'}}>That&apos;s why we only use premium quality nail polishes, gel, and other nail products from trusted brands.</p>
                </div>
              </div>

              <div className='wrap3'>
                <img src='https://themeholy.com/wordpress/rasm/wp-content/uploads/2023/07/choose_3.svg'/>
                <div className='chooseTxt'>
                <h3 style={{color:'black', marginBottom:' 8px'}}>Special Support</h3>
                <p style={{color:'black', margin:'0',width:'60%'}}>That&apos;s why we only use premium quality nail polishes, gel, and other nail products from trusted brands.</p>
                </div>
              </div>
              <div className='moveX'>
                <img src='https://themeholy.com/wordpress/rasm/wp-content/uploads/2023/07/flower_1_3-2.png' style={{maxWidth:'100%', height:'auto'}}/>
              </div>
            </div>

            <img style={{position:'relative', bottom:'45vh'}} src='https://themeholy.com/wordpress/rasm/wp-content/uploads/2023/07/choose_1.png'/>

          </div>  
        </div>
        </div>

        <div className='section51'>

          <div style={{display:'flex',marginLeft:'134px', marginRight:'134px'}}>
            <div>
              <div className='chooseUs1'>
                <span className='subTitle2'>Make An Appointment</span>
                <img src='https://themeholy.com/wordpress/rasm/wp-content/uploads/2023/07/title_right2.svg' style={{marginLeft:'10px'}}/>
              </div>
              <h2 style={{ marginTop:'10px',marginBottom:'60px', fontSize:'48px',lineHeight:'1.227'}}>Experience the Magic of Our Nail Styling Services</h2>
            </div>

            <div className='appointmentForm'>
                <div style={{display:'flex'}}>
                  <span >
                    <input type='text' placeholder='First Name' className='area1'/>
                  </span>
                  <span >
                    <input type='text' placeholder='Last Name' className='area1' style={{marginLeft:'30px'}}/>
                  </span>
                </div>
                
                <div> 
                  <span >
                    <input type='text' placeholder='Email Address' className='area2'/>
                  </span>
                  <span >
                    <input type='text' placeholder='Phone Number' className='area2' style={{marginLeft:'30px'}}/>
                  </span>
                </div>
                <div className='area3'>
                  <span>Spa & Massage</span>
                </div>

                <div className='area3'>
                  <span>Select Date</span>
                </div>

                <div className='area3'>
                  <span>Select Time</span>
                </div>
                <button className='formBtn'>MAKE AN APPOINTMENT</button>
            </div>
          </div>
          
          

          <div className='container2'>
            <div style={{width:'50%'}}>
              <div className='appointmentBox'>
                <h4 style={{fontSize:'30px', lineHeight:'1.333', margin:'0'}}>Working Hours:</h4>
                <p style={{width:'88%'}}>we are dedicated to delivering exceptional results and ensuring your nails make a bold and beautiful statement.</p>
                <div className='appointmentTxt'>
                  <p>Monday to Friday</p>
                  <span>09:00am – 20:00pm</span>
                </div>
                <hr className='hr0'/>
                <div className='appointmentTxt'>
                  <p>Saturday</p>
                  <span>10:00am – 18:00pm</span>
                </div>
                <hr className='hr0'/>
                <div className='appointmentTxt'>
                  <p>Sunday</p>
                  <span>Closed</span>
                </div>
                <hr className='hr0'/>
              </div>
            </div>
            

           
          </div>

          
            
        </div>

        <div className='secContainer'>
        <hr className='secLine0'/>
          <span className='secImg'>
            <img src='https://themeholy.com/wordpress/rasm/wp-content/uploads/2023/07/girl.svg' className='image1'/>
          </span>
        <hr className='secLine1'/>
        </div>

        <div className='section7'>
        
        <div className='aboutUs'>
          <span className='subTitle'>Expert Team</span>
          <img src='https://themeholy.com/wordpress/rasm/wp-content/uploads/2023/07/title_shape_1.svg' style={{marginTop:'10px'}}/>
          <h2 style={{color:'black',fontSize:'48px',lineHeight:'1.227', marginTop:'0',marginBottom:'70px'}}>Our Experience Specialists</h2>
        </div>

        <div className='cardContainer'>
          <div className='gridCard1'>
            <img src='https://themeholy.com/wordpress/rasm/wp-content/uploads/2023/07/team_1_1.jpg' style={{padding:'10px'}}/>
            <div className='gridTxt1'>
                <div style={{color:'black', display:'flex',justifyContent:'space-between', alignItems:'center'}}>
                  <div>
                    <h3 style={{margin:'0',fontSize:'30px',lineHeight:'40px'}}><a href='#' className='teamName'>Robert Fox</a></h3>
                    <p style={{color:'#C28565', margin:'0',fontSize:'14px',fontWeight:'400'}}>Beautician</p>
                  </div>  
                  <div className='plusBtn'>
                    <FaPlus/>
                  </div>
                </div>
            </div>
          </div>

          <div className='gridCard1'>
            <img src='https://themeholy.com/wordpress/rasm/wp-content/uploads/2023/07/team_1_2.jpg' style={{padding:'10px'}}/>
            <div className='gridTxt1'>
                <div style={{color:'black', display:'flex',justifyContent:'space-between', alignItems:'center'}}>
                  <div>
                    <h3 style={{margin:'0',fontSize:'30px',lineHeight:'40px'}}><a href='#' className='teamName'>Jenifer Lopez</a></h3>
                    <p style={{color:'#C28565', margin:'0',fontSize:'14px',fontWeight:'400'}}>Specialist</p>
                  </div>  
                  <div className='plusBtn'>
                    <FaPlus/>
                  </div>
                </div>
            </div>
          </div>

          <div className='gridCard1'>
            <img src='https://themeholy.com/wordpress/rasm/wp-content/uploads/2023/07/team_1_3.jpg' style={{padding:'10px'}}/>
            <div className='gridTxt1'>
                <div style={{color:'black', display:'flex',justifyContent:'space-between', alignItems:'center'}}>
                  <div>
                    <h3 style={{margin:'0',fontSize:'30px',lineHeight:'40px'}}><a href='#' className='teamName'>Arlene McCoy</a></h3>
                    <p style={{color:'#C28565', margin:'0',fontSize:'14px',fontWeight:'400'}}>Founder & CEO</p>
                  </div>  
                  <div className='plusBtn'>
                    <FaPlus/>
                  </div>
                </div>
            </div>
          </div>
        </div>
        </div>

        <div className='img71'>
          <img src='https://themeholy.com/wordpress/rasm/wp-content/uploads/2023/07/flower_1_1.png'/>
        </div>
        <div className='section101'>
        <div className='aboutUs'>
          <span className='subTitle'>Testimonials</span>
          <img src='https://themeholy.com/wordpress/rasm/wp-content/uploads/2023/07/title_shape_1.svg' style={{marginTop:'10px'}}/>
          <h2 style={{color:'black',fontSize:'48px',lineHeight:'1.227'}}>Our Customer Feedback</h2>
        </div>

        <div className='feedBackContainer'>

          <div style={{paddingLeft:'15px', paddingRight:'15px'}}>
            <div className='feedbackCard1'>
              <img src='https://themeholy.com/wordpress/rasm/wp-content/uploads/2023/07/testi_2_1.png' style={{width:'80px',height:'80px',borderRadius:'50%'}}/>
              <h3 style={{fontStyle:'italic',fontSize:'18px',lineHeight:'28px',color:'#0D0D0D'}}>Whether youre preparing for a special occasion or simply want to pamper yourself our talented stylists will work closely with you to create.</h3>          
              <div style={{color:'#0D0D0D'}}> 
                <h5>Angelina Margret</h5>
                <p style={{color:'#C28565'}}>Customer</p>
              </div>
            </div>
          </div>
          
          <div style={{paddingLeft:'15px', paddingRight:'15px'}}>
            <div className='feedbackCard1'>
              <img src='https://themeholy.com/wordpress/rasm/wp-content/uploads/2023/07/testi_2_1.png' style={{width:'80px',height:'80px',borderRadius:'50%'}}/>
              <h3 style={{fontStyle:'italic',fontSize:'18px',lineHeight:'28px',color:'#0D0D0D'}}>Whether youre preparing for a special occasion or simply want to pamper yourself our talented stylists will work closely with you to create.</h3>          
              <div style={{color:'#0D0D0D'}}> 
                <h5>Angelina Margret</h5>
                <p style={{color:'#C28565'}}>Customer</p>
              </div>
            </div>
          </div>

          <div style={{paddingLeft:'15px', paddingRight:'15px'}}>
            <div className='feedbackCard1'>
              <img src='https://themeholy.com/wordpress/rasm/wp-content/uploads/2023/07/testi_2_1.png' style={{width:'80px',height:'80px',borderRadius:'50%'}}/>
              <h3 style={{fontStyle:'italic',fontSize:'18px',lineHeight:'28px',color:'#0D0D0D'}}>Whether youre preparing for a special occasion or simply want to pamper yourself our talented stylists will work closely with you to create.</h3>          
              <div style={{color:'#0D0D0D'}}> 
                <h5>Angelina Margret</h5>
                <p style={{color:'#C28565'}}>Customer</p>
              </div>
            </div>
          </div>
        </div>
        </div>

      </div>

    </div>
  )
}

export default About
