import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaBehance } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import './style.css'

function Footer() {
  return (
    <div>

        <div className='galleryContainer'>
            <div className='footerContainer'>
                    <div style={{width:'20%'}}>
                        <a href='#'>
                            <img src='https://themeholy.com/wordpress/rasm/wp-content/uploads/2023/07/logo-white-1.svg'></img>
                        </a>
                        <p style={{width:'90%'}}>Centric applications productive front end portals visualize front end.</p>
                        <div className='phoneContainer'>
                            <FaPhoneAlt className='phoneIcon1'/>
                            <a href='#' className='pText'>+256 214 203 215</a>
                        </div>
                        <div className='mailContainer'>
                            <IoMail className='mailIcon1'/>
                            <a href='#' className='mText'>info@rasm.com</a>
                        </div>
                        <div className='socialIconContainer'>
                            <a href='#' className='socialIcon1'><FaFacebookF /></a>
                            <a href='#' className='socialIcon1'><FaTwitter /></a>
                            <a href='#' className='socialIcon1'><FaLinkedinIn /></a>
                            <a href='#' className='socialIcon1'><FaBehance /></a>
                        </div>
                    </div>

                    <div>
                        <h3 style={{marginBottom:'35px'}}>Quick Link</h3>
                            <div style={{display:'flex',flexDirection:'column'}}>
                                <a href='#' style={{marginBottom:'16px'}} className='linkTxt'>About Us</a>
                                <a href='#' style={{marginBottom:'16px'}} className='linkTxt'>Our Services</a>
                                <a href='#' style={{marginBottom:'16px'}} className='linkTxt'>Blog</a>
                                <a href='#' style={{marginBottom:'16px'}} className='linkTxt'>Our Shop</a>
                                <a href='#' style={{marginBottom:'16px'}} className='linkTxt'>Contact Us</a>
                                <a href='#' className='linkTxt'>Privacy Policy</a>
                            </div>
                    </div>

                    <div>
                        <h3 style={{marginBottom:'35px'}}>Our Services</h3>
                            <div style={{display:'flex',flexDirection:'column'}}>
                                <a href='#' style={{marginBottom:'16px'}} className='linkTxt'>Hands & Feet</a>
                                <a href='#' style={{marginBottom:'16px'}} className='linkTxt'>Facials Waxing</a>
                                <a href='#' style={{marginBottom:'16px'}} className='linkTxt'>Body Waxing</a>
                                <a href='#' style={{marginBottom:'16px'}} className='linkTxt'>Brows & Lashes</a>
                                <a href='#' style={{marginBottom:'16px'}} className='linkTxt'>Body Massage</a>
                                <a href='#' className='linkTxt'>Nail Art</a>
                            </div>
                    </div>

                    <div style={{width:'26%'}}>
                        <h3 style={{marginBottom:'35px'}}>Recent Posts</h3>
                        <div style={{display:'inline-flex', alignItems:'center', marginBottom:'35px'}}>

                            <a href='#'>
                                <img src='https://themeholy.com/wordpress/rasm/wp-content/uploads/2023/07/blog-s-1-1-85x85.jpg'/>
                            </a>
                            
                            <div style={{display:'flex', flexDirection:'column', marginLeft:'10px'}}>
                                <a href='#' className='linkTxt'><FaCalendarAlt/> 18 Jul 2023</a>
                                <a href='#' style={{width:'90%'}} className='linkTxt1'>Quality repairs for your car</a>
                            </div>
                        </div>

                        <div style={{display:'inline-flex', alignItems:'center'}}>
                        
                            <a href='#' className='postImg'>
                                <img src='https://themeholy.com/wordpress/rasm/wp-content/uploads/2023/07/blog-s-1-2-85x85.jpg'/>
                            </a>
                            
                            <div style={{display:'flex', flexDirection:'column', marginLeft:'10px'}}>
                                <a href='#' className='linkTxt'><FaCalendarAlt/> 17 Jul 2023</a>
                                <a href='#' className='linkTxt1'>Maintaining Health and Beauty Through</a>
                            </div>
                        </div>
                    </div>
            </div>
        </div>

        <div className='underFooter'>
            <div className='underFooterContainer'>
                <div>
                    <p>2023 <a href='#' className='rasmTxt'>Rasm.</a> All Rights Reserved By</p>
                </div>

                <div>
                    <div>
                        <a href='#' style={{paddingRight:"10px"}} className='termTxt'>Terms & Conditions</a>
                        <a href='#' style={{paddingLeft:"10px"}} className='termTxt'>Terms & Conditions</a>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Footer;
