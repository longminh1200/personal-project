import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6"
import { FaArrowRight } from "react-icons/fa"
import './price.css'

function price() {
  return (
    <div>
      <div className='pageTitle'>
          <div className='titleContainer'>
            <div className='title'>
              <h2 style={{color:'black',margin:'-0.20em 0 -0.18em 0',lineHeight:'1.1',fontWeight:'600',fontSize:'48px'}}>Team</h2>
              <div className='arrowTxt'>
                <div style={{marginRight:'3px',paddingRight:'5px', display:'flex', alignItems:'center'}}>
                  <a href='#' style={{whiteSpace:'normal',wordBreak:'break-word',fontWeight:'400',fontSize:'20px',color:'#6E6E6E'}}>Home</a>
                  <FaArrowRightLong style={{marginLeft:'10px',fontSize:'20px',color:'#6E6E6E'}}/>  
                </div>
                <p style={{whiteSpace:'normal',wordBreak:'break-word', fontWeight:'400',fontSize:'20px',color:'#6E6E6E'}}>Team</p>
              </div>
            </div>
          </div>
      </div>


      <div className='priceSection1'>

        <div className='aboutUs'>
          <span className='subTitle'>Pricing Package</span>
          <img src='https://themeholy.com/wordpress/rasm/wp-content/uploads/2023/07/title_shape_1.svg' style={{marginTop:'10px'}}/>
          <h1 style={{color:'black', marginTop:'15px', marginBottom:'15px'}}>Choose Your Perfect Package</h1>
        </div>

        <div className='price'>
            <div className='priceContainer'>
                <div className='priceWrap'>
                    <div className='priceCard'>
                        <div className='priceCardImg'>
                            <img src='https://themeholy.com/wordpress/rasm/wp-content/uploads/2023/07/price_1_1.jpg' className='priceImg'/>
                        </div>
                            <h4 className='priceCardPrice'>
                                <span className='currency'>$</span>
                                46
                                <span className='duration'>Per Day</span>
                            </h4>
                        <div className='priceCardContent'>
                            <h3 style={{fontSize:'25px',lineHeight:'40px',margin:'0',color:'black'}}>Basic Package</h3>
                            <hr className='style1'></hr>
                            <div className='aList'>
                                <p> <img src='https://themeholy.com/wordpress/rasm/wp-content/uploads/2023/07/title_left.svg' style={{width:'18px',marginRight:'10px'}}/> Body Treatments</p>
                                <p> <img src='https://themeholy.com/wordpress/rasm/wp-content/uploads/2023/07/title_left.svg' style={{width:'18px',marginRight:'10px'}}/> Sauna Relax</p>
                                <p> <img src='https://themeholy.com/wordpress/rasm/wp-content/uploads/2023/07/title_left.svg' style={{width:'18px',marginRight:'10px'}}/> Backbone Therapy</p>
                                <p> <img src='https://themeholy.com/wordpress/rasm/wp-content/uploads/2023/07/title_left.svg' style={{width:'18px',marginRight:'10px'}}/> Geothermal Spa</p>
                                <p style={{color:'#0D0D0D'}}> <img src='https://themeholy.com/wordpress/rasm/wp-content/uploads/2023/07/title_left.svg' style={{width:'18px',marginRight:'10px',opacity:'0.2'}}/> Body Relaxation</p>
                                <p style={{color:'#0D0D0D'}}> <img src='https://themeholy.com/wordpress/rasm/wp-content/uploads/2023/07/title_left.svg' style={{width:'18px',marginRight:'10px',opacity:'0.2'}}/> Aroma Therapy</p>
                                <div className='priceBtn'>
                                    <a href='#' className='bookNow'>BOOK NOW <FaArrowRight style={{marginLeft:'10px'}}/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='priceWrap'>
                    <div className='priceCard'>
                        <div className='priceCardImg'>
                            <img src='https://themeholy.com/wordpress/rasm/wp-content/uploads/2023/07/price_1_2.jpg' className='priceImg'/>
                        </div>
                            <h4 className='priceCardPrice'>
                                <span className='currency'>$</span>
                                96
                                <span className='duration'>Per Day</span>
                            </h4>
                        <div className='priceCardContent'>
                            <h3 style={{fontSize:'25px',lineHeight:'40px',margin:'0',color:'black'}}>Standard Package</h3>
                            <hr className='style1'></hr>
                            <div className='aList'>
                                <p> <img src='https://themeholy.com/wordpress/rasm/wp-content/uploads/2023/07/title_left.svg' style={{width:'18px',marginRight:'10px'}}/> Body Treatments</p>
                                <p> <img src='https://themeholy.com/wordpress/rasm/wp-content/uploads/2023/07/title_left.svg' style={{width:'18px',marginRight:'10px'}}/> Sauna Relax</p>
                                <p> <img src='https://themeholy.com/wordpress/rasm/wp-content/uploads/2023/07/title_left.svg' style={{width:'18px',marginRight:'10px'}}/> Backbone Therapy</p>
                                <p> <img src='https://themeholy.com/wordpress/rasm/wp-content/uploads/2023/07/title_left.svg' style={{width:'18px',marginRight:'10px'}}/> Geothermal Spa</p>
                                <p > <img src='https://themeholy.com/wordpress/rasm/wp-content/uploads/2023/07/title_left.svg' style={{width:'18px',marginRight:'10px'}}/> Body Relaxation</p>
                                <p > <img src='https://themeholy.com/wordpress/rasm/wp-content/uploads/2023/07/title_left.svg' style={{width:'18px',marginRight:'10px'}}/> Aroma Therapy</p>
                                <div className='priceBtn'>
                                    <a href='#' className='bookNow'>BOOK NOW <FaArrowRight style={{marginLeft:'10px'}}/></a>
                                </div>
                            </div>
                        </div>
                    </div>
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

    </div>
  )
}

export default price
