import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import { MdArrowOutward } from "react-icons/md";
import { IoStar } from "react-icons/io5";

import './home.css';

function Home() {
  return (
    <div>
      <div className="mainHome">
        <div className='mainSlider'>
          <div className='infoContainer'>
            <span style={{color:'#C28565', display:'flex', fontSize:'20px'}} className='welcomeTxt'>
              <img src='https://themeholy.com/wordpress/rasm/wp-content/uploads/2023/07/title_left.svg' style={{marginRight:'10px'}}/>
              Welcome to Rasm Nail Stylist
            </span>
              <h1 style={{color:'black', margin:'0px', fontSize:'84px'}} className='nailTxt'>NAIL ARTISTRY</h1>
              <span style={{display:'flex', alignItems:'baseline'}}>
                <img src='https://themeholy.com/wordpress/rasm/wp-content/uploads/2023/08/nail.png' style={{borderBottom:'2px solid black'}} className='slideImg'/>
                <h1 style={{color:'black', fontSize:'84px', margin:'0px'}} className='slideTxt1'>THAT SHINES</h1>
              </span>
              <a href='#' className='discoverBtn'>DISCOVER MORE <IoIosArrowRoundForward className='arrowIcon'/></a>
          </div>

          <div className='heroShape'></div>
          <div className='heroShape2'></div>
          <div className='imgSliderContainer'>
            <img src='https://themeholy.com/wordpress/rasm/wp-content/uploads/2023/08/hero_bg_2_2.png' style={{height:'100%', width:'100%'}}/>
          </div>
          <div className='flowerImg'>
            <img src='https://themeholy.com/wordpress/rasm/wp-content/uploads/2023/08/flower_1_9.png' style={{width:'70%', height:'70%'}}/>
          </div>
          <div className='leafImg'>
            <img src='https://themeholy.com/wordpress/rasm/wp-content/uploads/2023/08/leaves_10.png' style={{width:'80%', height:'80%'}}/>
          </div>
        </div>
        <div className='slideImg2'>
            <img src='https://themeholy.com/wordpress/rasm/wp-content/uploads/2023/08/leaves_6-1.png'/>
        </div>
        <div className='slideImg1'>
            <img src='https://themeholy.com/wordpress/rasm/wp-content/uploads/2023/08/nail-polish.png'/>
        </div>
      </div>

      <div className='section1'>
        <div className='img11'>
          <img src='https://themeholy.com/wordpress/rasm/wp-content/uploads/2023/07/flower_1_5.png'/>
        </div>
        <div className='aboutUs'>
          <span className='subTitle'>About Us</span>
          <img src='https://themeholy.com/wordpress/rasm/wp-content/uploads/2023/07/title_shape_1.svg' style={{marginTop:'10px'}}/>
          <h1 style={{color:'black'}}>Step Into The World Nail Styling Perfection</h1>
          <p style={{color:'#6E6E6E', display:'block', width:'810px',textAlign:'center'}}>At our Nail Style Salon, we understand that each client is unique, and their nail preferences vary. That's why we offer customized nail services tailored to your specific needs. Whether you're looking for a classic French manicure, a chic and sophisticated look for a special event.</p>
        </div>

        <div className='btnContainer'>
        <a href='#' className='btn1'>MORE ABOUT US <IoIosArrowRoundForward className='arrowIcon'/></a>
        <a href='#' className='btn2'>MAKE A CALL <IoIosArrowRoundForward className='arrowIcon'/></a>
        </div>

        <div className='imgContainer'>
          <div className='vidImg'>
            <img src='https://themeholy.com/wordpress/rasm/wp-content/uploads/2023/07/video_1.jpg'/>
          </div>

          <div className='gridContainer'>
            <div className='gird1'>
              <div className='icon'>
                <img src='https://themeholy.com/wordpress/rasm/wp-content/uploads/2023/07/counter_2_1.svg'/>
              </div>
              <div className='content'>
                <h1 style={{margin:'0'}}>26+</h1>
                <p>Years of Experience</p>
              </div>
            </div>
            <div className='gird2'>
              <div className='icon'>
                <img src='https://themeholy.com/wordpress/rasm/wp-content/uploads/2023/07/counter_2_2.svg'/>
              </div>
              <div className='content'>
                <h1 style={{margin:'0'}}>100%</h1>
                <p>Natural Products</p>
              </div>
            </div>
            <div className='gird3'>
              <div className='icon'>
                <img src='https://themeholy.com/wordpress/rasm/wp-content/uploads/2023/07/counter_2_3.svg'/>
              </div>
              <div className='content'>
                <h1 style={{margin:'0'}}>56k+</h1>
                <p>Satisfied Clients</p>
              </div>
            </div>
            <div className='gird4'>
            <div className='icon'>
                <img src='https://themeholy.com/wordpress/rasm/wp-content/uploads/2023/07/counter_2_4.svg'/>
              </div>
              <div className='content'>
                <h1 style={{margin:'0'}}>36+</h1>
                <p>Specialists Team</p>
              </div>
            </div>
          </div>

          <div className='img12'>
            <img src='https://themeholy.com/wordpress/rasm/wp-content/uploads/2023/07/leaves_2-2.png'/>
          </div>

        </div>
      </div>

      <div className='section2'>
        <div className='img11'>
          <img src='https://themeholy.com/wordpress/rasm/wp-content/uploads/2023/07/leaves_8.png'/>
        </div>
        <div className='aboutUs'>
          <span className='subTitle'>Our Services</span>
          <img src='https://themeholy.com/wordpress/rasm/wp-content/uploads/2023/07/title_shape_1.svg' style={{marginTop:'10px'}}/>
          <h1 style={{color:'black'}}>Professional Spa and Beauty Service</h1>
        </div>

        <div className='serviceImg'>
          <div className='serviceContainer'>
            <div className='Item1'>
              <img src='https://themeholy.com/wordpress/rasm/wp-content/uploads/2023/07/service_1_1.jpg' style={{marginBottom:'10px'}}/>
              <div className='serviceTxt'>
              <h3 style={{color:'black'}}>Nail Manicure</h3>
              <div className='arrowIcon1'>
                <MdArrowOutward className='arrow1'/>
              </div>
              </div>
            </div>
            <div className='Item1'>
              <img src='https://themeholy.com/wordpress/rasm/wp-content/uploads/2023/07/service_1_2.jpg' style={{marginBottom:'10px'}}/>
              <div className='serviceTxt'>
              <h3 style={{color:'black'}}>Nail Art</h3>
              <div className='arrowIcon1'>
                <MdArrowOutward className='arrow1'/>
              </div>
              </div>
            </div>
          </div>


          <div>
          <img src='https://themeholy.com/wordpress/rasm/wp-content/uploads/2023/07/service-img.png'/>
          </div>
          <div>
          <div className='Item1'>
              <img src='https://themeholy.com/wordpress/rasm/wp-content/uploads/2023/07/service_1_3.jpg' style={{marginBottom:'10px'}}/>
              <div className='serviceTxt'>
              <h3 style={{color:'black'}}>Nail Pedicure</h3>
              <div className='arrowIcon1'>
                <MdArrowOutward className='arrow1'/>
              </div>
              </div>
            </div>
            <div className='Item1'>
              <img src='https://themeholy.com/wordpress/rasm/wp-content/uploads/2023/07/service_1_4.jpg' style={{marginBottom:'10px'}}/>
              <div className='serviceTxt'>
              <h3 style={{color:'black'}}>Nail Paraffin Hands</h3>
              <div className='arrowIcon1'>
                <MdArrowOutward className='arrow1'/>
              </div>
              </div>
            </div>
          </div>
        </div>

        <div className='img13'>
          <img src='https://themeholy.com/wordpress/rasm/wp-content/uploads/2023/07/leaves_7.png'/>
        </div>

      </div>
      
      <div className='section3'>
        <div style={{marginLeft:'134px', marginRight:'134px'}}>
          <div className='chooseUs1'>
          <span className='subTitle'>Why Choose Us</span>
          <img src='https://themeholy.com/wordpress/rasm/wp-content/uploads/2023/07/title_right.svg' style={{marginLeft:'10px'}}/>
          </div>
          <h1 style={{color:'black',width:'51%'}}>We Have 25 Years Of Experience With Nail Style.</h1>
          <p style={{color:'black',width:'39%'}}>We prioritize the clear lines and comfort of our clients, ensuring a hygienic and relaxing environment throughout your visit. Our salon adheres to strict sanitization protocols, and all our tools.</p>
          
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
            </div>

            <img style={{position:'relative', bottom:'45vh'}} src='https://themeholy.com/wordpress/rasm/wp-content/uploads/2023/07/choose_1.png'/>
            <div className='moveX'>
              <img src='https://themeholy.com/wordpress/rasm/wp-content/uploads/2023/07/flower_1_3-2.png' style={{maxWidth:'100%', height:'auto'}}/>
            </div>

          </div>  
        </div>
      </div>

      <div className='section4'>
        <div className='container1'>
          <div className='blank'>
          </div>

          <div>
            <div className='aboutUs'>
              <span className='subTitle'>Nail & Hand Care</span>
              <img src='https://themeholy.com/wordpress/rasm/wp-content/uploads/2023/07/title_shape_1.svg' style={{marginTop:'10px'}}/>
              <h2 style={{color:'black',fontSize:'48px',lineHeight:'1.227'}}>Our Nails Treatments & Prices</h2>
            </div>

            <div className='priceBox'>
              <div className='boxContent'>
                <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                  <h4 style={{margin:'0', fontSize:'20px'}}><a href='#' className='boxTitle'>Manicure</a></h4>
                  <span style={{color:'black',fontSize:'24px'}}>28$</span>
                </div>
                <div style={{display:'flex', alignItems:'center'}}>
                  <p style={{color:'black', margin:'0'}}>Elemental tempus getas</p>
                  <hr/>
                </div>
              </div>
              <div className='boxContent'>
                <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                  <h4 style={{margin:'0', fontSize:'20px'}}><a href='#' className='boxTitle'>Nail Clippers</a></h4>
                  <span style={{color:'black',fontSize:'24px'}}>26$</span>
                </div>
                <div style={{display:'flex', alignItems:'center'}}>
                  <p style={{color:'black', margin:'0'}}>Quality products, customized services</p>
                  <hr className='hr1'/>
                </div>
              </div>
              <div className='boxContent'>
                <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                  <h4 style={{margin:'0', fontSize:'20px'}}><a href='#' className='boxTitle'>Manicure & Pedicure</a></h4>
                  <span style={{color:'black',fontSize:'24px'}}>15$</span>
                </div>
                <div style={{display:'flex', alignItems:'center'}}>
                  <p style={{color:'black', margin:'0'}}>Premium quality nail polishes</p>
                  <hr className='hr2'/>
                </div>
              </div>
              <div className='boxContent'>
                <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                  <h4 style={{margin:'0', fontSize:'20px'}}><a href='#' className='boxTitle'>Hand/nail Moisturizer</a></h4>
                  <span style={{color:'black',fontSize:'24px'}}>19$</span>
                </div>
                <div style={{display:'flex', alignItems:'center'}}>
                  <p style={{color:'black', margin:'0'}}>Rejuvenating hand or foot massage</p>
                  <hr className='hr3'/>
                </div>
              </div>

              <div className='boxContent'>
                <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                  <h4 style={{margin:'0', fontSize:'20px'}}><a href='#' className='boxTitle'>Nail Art</a></h4>
                  <span style={{color:'black',fontSize:'24px'}}>19$</span>
                </div>
                <div style={{display:'flex', alignItems:'center'}}>
                  <p style={{color:'black', margin:'0'}}>Vibrant colors, finishes</p>
                  <hr className='hr4'/>
                </div>
              </div>
            </div>
          </div>

          
        </div>
      </div>
      
      <div className='section5'>

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

      <div className='section6'>
        <div className='secContainer'>
          <hr className='secLine0'/>
            <span className='secImg'>
              <img src='https://themeholy.com/wordpress/rasm/wp-content/uploads/2023/07/girl.svg' className='image1'/>
            </span>
          <hr className='secLine1'/>
        </div>
      </div>

      <div className='section7'>

        <div className='img14'>
          <img src='https://themeholy.com/wordpress/rasm/wp-content/uploads/2023/07/leaves_3.png'/>
        </div>
        <div className='img15'>
          <img src='https://themeholy.com/wordpress/rasm/wp-content/uploads/2023/08/flower_1_6.png'/>
        </div>

        <div className='aboutUs'>
          <span className='subTitle'>Our Products</span>
          <img src='https://themeholy.com/wordpress/rasm/wp-content/uploads/2023/07/title_shape_1.svg' style={{marginTop:'10px'}}/>
          <h2 style={{color:'black',fontSize:'48px',lineHeight:'1.227'}}>Our Latest Nail Products</h2>
        </div>

        <div className='cardContainer'>
          <div className='gridCard'>
            <img src='https://themeholy.com/wordpress/rasm/wp-content/uploads/2023/08/image-7-387x353.jpg'/>
            <div className='gridTxt'>
                <div style={{color:'black', display:'flex',justifyContent:'space-between'}}>
                  <h3 style={{margin:'0'}}>Argan Olive oil</h3>
                  <h3 style={{margin:'0', color:'#C28565'}}>$47.00 <s style={{marginLeft:'10px', color:'black'}}>$57.00</s></h3>
                </div>
                <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                  <p style={{color:'black', margin:'0'}}>Cosmetic</p>
                  <div className='rating'>
                    <span><IoStar/></span>
                    <span><IoStar/></span>
                    <span><IoStar/></span>
                    <span><IoStar/></span>
                    <span><IoStar/></span>
                  </div>
                </div>
              </div>
          </div>

          <div className='gridCard'>
            <img src='https://themeholy.com/wordpress/rasm/wp-content/uploads/2023/08/image-6-387x353.jpg'/>
            <div className='gridTxt'>
                <div style={{color:'black', display:'flex',justifyContent:'space-between'}}>
                  <h3 style={{margin:'0'}}>Amouage Perfume</h3>
                  <h3 style={{margin:'0', color:'#C28565'}}>$87.00</h3>
                </div>
                <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                  <p style={{color:'black', margin:'0'}}>Brand</p>
                  <div className='rating'>
                    <span><IoStar/></span>
                    <span><IoStar/></span>
                    <span><IoStar/></span>
                    <span><IoStar/></span>
                    <span><IoStar/></span>
                  </div>
                </div>
              </div>
          </div>

          <div className='gridCard'>
            <img src='https://themeholy.com/wordpress/rasm/wp-content/uploads/2023/08/image-10-387x353.jpg'/>
            <div className='gridTxt'>
                <div style={{color:'black', display:'flex',justifyContent:'space-between'}}>
                  <h3 style={{margin:'0'}}>Minetan Hair Cream</h3>
                  <h3 style={{margin:'0', color:'#C28565'}}>$44.00</h3>
                </div>
                <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                  <p style={{color:'black', margin:'0'}}>Popular</p>
                  <div className='rating'>
                    <span><IoStar/></span>
                    <span><IoStar/></span>
                    <span><IoStar/></span>
                    <span><IoStar/></span>
                    <span><IoStar/></span>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>

      <div className='section8'>
        <div className='brandSlider'>
          <div className='brandContainer'>
            <div className='brandArea'>
              <div className='brandBox'>
                <a>
                  <img src='https://themeholy.com/wordpress/rasm/wp-content/uploads/2023/07/brand_1_3.png'/>
                </a>
              </div>
            </div>
            
            <div className='brandArea'>
              <div className='brandBox'>
                <a>
                  <img src='https://themeholy.com/wordpress/rasm/wp-content/uploads/2023/07/brand_1_4.png'/>
                </a>
              </div>
            </div>

            <div className='brandArea'>
              <div className='brandBox'>
                <a>
                  <img src='https://themeholy.com/wordpress/rasm/wp-content/uploads/2023/07/brand_1_5.png'/>
                </a>
              </div>
            </div>

            <div className='brandArea'>
              <div className='brandBox'>
                <a>
                  <img src='https://themeholy.com/wordpress/rasm/wp-content/uploads/2023/07/brand_1_6.png'/>
                </a>
              </div>
            </div>

            <div className='brandArea'>
              <div className='brandBox'>
                <a>
                  <img src='https://themeholy.com/wordpress/rasm/wp-content/uploads/2023/07/brand_1_7.png'/>
                </a>
              </div>
            </div>

            <div className='brandArea'>
              <div className='brandBox'>
                <a>
                  <img src='https://themeholy.com/wordpress/rasm/wp-content/uploads/2023/07/brand_1_8.png'/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='section9'>
        <div className='signUp'>
          <div className='aboutUs'>
            <span className='subTitle2'>Subscribes Newsletter</span>
            <img src='https://themeholy.com/wordpress/rasm/wp-content/uploads/2023/07/title_shape_2.svg' style={{marginTop:'10px'}}/>
            <h2 style={{color:'white',fontSize:'48px',lineHeight:'1.227', marginTop:'10px'}}>Sign Up To Get Updates & News About Us</h2>
          </div>
          
        </div>
        <form className='signUpForm'>
          <input type='text' placeholder='Email Address' className='inputArea'/>
          <button className='inputBtn'>SUBSCRIBE</button>
        </form>
        
      </div>

      <div className='section10'>
        <div className='aboutUs'>
          <span className='subTitle'>Testimonials</span>
          <img src='https://themeholy.com/wordpress/rasm/wp-content/uploads/2023/07/title_shape_1.svg' style={{marginTop:'10px'}}/>
          <h2 style={{color:'black',fontSize:'48px',lineHeight:'1.227'}}>Our Customer Feedback</h2>
        </div>

        <div className='feedBackContainer'>

          <div style={{paddingLeft:'15px', paddingRight:'15px'}}>
            <div className='feedbackCard'>
              <img src='https://themeholy.com/wordpress/rasm/wp-content/uploads/2023/07/testi_2_1.png' style={{width:'80px',height:'80px',borderRadius:'50%'}}/>
              <h3 style={{fontStyle:'italic',fontSize:'18px',lineHeight:'28px',color:'#0D0D0D'}}>Whether youre preparing for a special occasion or simply want to pamper yourself our talented stylists will work closely with you to create.</h3>          
              <div style={{color:'#0D0D0D'}}> 
                <h5>Angelina Margret</h5>
                <p style={{color:'#C28565'}}>Customer</p>
              </div>
            </div>
          </div>
          
          <div style={{paddingLeft:'15px', paddingRight:'15px'}}>
            <div className='feedbackCard'>
              <img src='https://themeholy.com/wordpress/rasm/wp-content/uploads/2023/07/testi_2_1.png' style={{width:'80px',height:'80px',borderRadius:'50%'}}/>
              <h3 style={{fontStyle:'italic',fontSize:'18px',lineHeight:'28px',color:'#0D0D0D'}}>Whether youre preparing for a special occasion or simply want to pamper yourself our talented stylists will work closely with you to create.</h3>          
              <div style={{color:'#0D0D0D'}}> 
                <h5>Angelina Margret</h5>
                <p style={{color:'#C28565'}}>Customer</p>
              </div>
            </div>
          </div>

          <div style={{paddingLeft:'15px', paddingRight:'15px'}}>
            <div className='feedbackCard'>
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

      <div className='secContainer'>
        <hr className='secLine0'/>
          <span className='secImg'>
            <img src='https://themeholy.com/wordpress/rasm/wp-content/uploads/2023/07/girl.svg' className='image1'/>
          </span>
        <hr className='secLine1'/>
      </div>

      <div className='section11'>
        <div className='img14'>
          <img src='https://themeholy.com/wordpress/rasm/wp-content/uploads/2023/07/leaves_3.png'/>
        </div>
        <div className='aboutUs'>
            <span className='subTitle'>Our Blog</span>
            <img src='https://themeholy.com/wordpress/rasm/wp-content/uploads/2023/07/title_shape_1.svg' style={{marginTop:'10px'}}/>
            <h2 style={{color:'black',fontSize:'48px',lineHeight:'1.227', marginBottom:'0', marginTop:'0'}}>Our Latest News & Blog</h2>
        </div>

        <div className='newsContainer'>
          
          <div className='blogBox'>
            <div className='blogImg'>
              <div className='blogWrapper'>
                <span className='date'>18</span>
                <span className='month'>Jun, 2023</span>
              </div>
              <img src='https://themeholy.com/wordpress/rasm/wp-content/uploads/2023/07/Untitled-1-387x280.jpg'/>
            </div>

            <div className='boxContent1'>
              <div className='blogContent'>
                <div className='boxMeta'>
                <a href='#' className='metaTxt'>Post By <span className='subMetaTxt'>Rasm</span></a>
                <a href='#' className='metaTxt1'>Comment (0)</a>
                </div>
                <h3 style={{fontSize:'30px', lineHeight:'40px',marginBottom:'10px',marginTop:'10px'}}>
                  <a href='#' className='blogTxt'>We’ll get your car back on the road in</a>
                </h3>
                <a href='#' className='readMoreTxt'>READ MORE</a>
                <hr className='customHR'/>  
              </div>
            </div>
          </div>

          <div className='blogBox'>
            <div className='blogImg'>
              <div className='blogWrapper'>
                <span className='date'>17</span>
                <span className='month'>Jun, 2023</span>
              </div>
              <img src='https://themeholy.com/wordpress/rasm/wp-content/uploads/2023/07/blog-s-1-1-387x280.jpg'/>
            </div>

            <div className='boxContent1'>
              <div className='blogContent'>
                <div className='boxMeta'>
                <a href='#' className='metaTxt'>Post By <span className='subMetaTxt'>Rasm</span></a>
                <a href='#' className='metaTxt1'>Comment (0)</a>
                </div>
                <h3 style={{fontSize:'30px', lineHeight:'40px',marginBottom:'10px',marginTop:'10px'}}>
                  <a href='#' className='blogTxt'>Quality repairs for your car at affordable prices</a>
                </h3>
                <a href='#' className='readMoreTxt'>READ MORE</a>
                <hr className='customHR'/>  
              </div>
            </div>
          </div>

          <div className='blogBox'>
            <div className='blogImg'>
              <div className='blogWrapper'>
                <span className='date'>16</span>
                <span className='month'>Jun, 2023</span>
              </div>
              <img src='https://themeholy.com/wordpress/rasm/wp-content/uploads/2023/07/blog-s-1-4-387x280.jpg'/>
            </div>

            <div className='boxContent1'>
              <div className='blogContent'>
                <div className='boxMeta'>
                <a href='#' className='metaTxt'>Post By <span className='subMetaTxt'>Rasm</span></a>
                <a href='#' className='metaTxt1'>Comment (0)</a>
                </div>
                <h3 style={{fontSize:'30px', lineHeight:'40px',marginBottom:'10px',marginTop:'10px'}}>
                  <a href='#' className='blogTxt'>Maintaining Health and Beauty Through Spas</a>
                </h3>
                <a href='#' className='readMoreTxt'>READ MORE</a>
                <hr className='customHR'/>  
              </div>
            </div>
          </div>
          

        </div>
      </div>

      {/* <div className='section13'>
        <div className='formContainer'>
          <div className='getInTouch'>
            <div className='getInTouchForm'>
              <h2 style={{textAlign:'center',color:'black',fontSize:'48px',lineHeight:'1.227', marginBottom:'15px'}}>Get In Touch</h2>
            </div>
          </div>
        </div>
      </div> */}

      <div className='section12'>
        <div className='carousel'>
            <div className='carouselContainer'>
              <img src='https://themeholy.com/wordpress/rasm/wp-content/uploads/2023/08/gallery_1_1.jpg' className='carouselImg'/>
              <img src='https://themeholy.com/wordpress/rasm/wp-content/uploads/2023/08/gallery_1_2.jpg' className='carouselImg'/>
              <img src='https://themeholy.com/wordpress/rasm/wp-content/uploads/2023/08/gallery_1_3.jpg' className='carouselImg'/>
              <img src='https://themeholy.com/wordpress/rasm/wp-content/uploads/2023/08/gallery_1_4.jpg' className='carouselImg'/>
              <img src='https://themeholy.com/wordpress/rasm/wp-content/uploads/2023/08/gallery_1_5.jpg' className='carouselImg'/>
              <img src='https://themeholy.com/wordpress/rasm/wp-content/uploads/2023/08/gallery_1_6.jpg' className='carouselImg'/>
            </div>
        </div>
      </div>

    </div>
  )
}

export default Home

