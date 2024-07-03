import React from 'react'
import { BsTelephone } from "react-icons/bs"
import { CiMail } from "react-icons/ci"
import { CiLocationOn } from "react-icons/ci"
import { BsClock } from "react-icons/bs"
import { ImFacebook } from "react-icons/im";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { BsGrid3X3Gap } from "react-icons/bs";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoSearchCircle } from "react-icons/io5";
import { Dropdown } from "antd";
import { NavLink as Link } from "react-router-dom"
import './style.css'

function Navbar() {
  return (
    <div>
        <div className='upperNav'>
            <div className='upNavContain'>
                <div className='phoneContain'>
                    <BsTelephone className='phoneIcon' />
                    <a href='#' className='phoneNum'>(+468) 254 762 443</a>
                </div>
                <div className='mailContain'>
                    <CiMail className='mailIcon' />
                    <a href='#' className='mailText'>info@rasm.com</a>
                </div>
                <div className='locationContain'>
                    <CiLocationOn className='locationIcon' />
                    <i className='locationText'>25 Street, 145 City Town, USA</i>
                </div>
                <div className='timeContain'>
                    <BsClock className='timeIcon' />
                    <i className='timeText'>Mon - Sat: 8am - 15pm Sunday Off</i>
                </div>
            </div>
            <div className='socialContainer'>
                <p style={{fontSize:'12px',color:'black'}}>Follow Us On: </p>
                <a href='#' className='socialIcon'><ImFacebook /></a>
                <a href='#' className='socialIcon'><FaTwitter /></a>
                <a href='#' className='socialIcon'><FaLinkedinIn /></a>
                <a href='#' className='socialIcon'><FaInstagram /></a>
                <a href='#' className='socialIcon'><FaYoutube /></a>
            </div>
        </div>

        <div className='underNav'>
            <div className='underNavWrapper'>
             <a href='#' className='logoImg'>
             <img src='https://themeholy.com/wordpress/rasm/wp-content/uploads/2023/08/logo-black.svg' />
             </a>
            </div>
            <div className='underNavContainer'>
                <div className='menuContainer'>
                    <div className='menuTxt'>
                        <button className='homeBtn'>HOME <FaPlus style={{paddingTop:'2px', paddingLeft:'5px'}}/></button>
                        
                    </div>
                    <div className='menuTxt'>
                        <button className='homeBtn'>ABOUT US <FaPlus style={{paddingTop:'2px', paddingLeft:'5px'}}/></button>
                    </div>
                    <div className='menuTxt'>
                        <button className='homeBtn'>SERVICES <FaPlus style={{paddingTop:'2px', paddingLeft:'5px'}}/></button>
                    </div>
                    <div className='menuTxt'>
                        <button className='homeBtn'>PAGES <FaPlus style={{paddingTop:'2px', paddingLeft:'5px'}}/></button>
                    </div>
                    <div className='menuTxt'>
                        <button className='homeBtn'>SHOP <FaPlus style={{paddingTop:'2px', paddingLeft:'5px'}}/></button>
                    </div>
                    <div className='menuTxt'>
                        <button className='homeBtn'>BLOG <FaPlus style={{paddingTop:'2px', paddingLeft:'5px'}}/></button>
                    </div>
                    <div className='menuTxt'>
                        <button className='homeBtn'>CONTACT US</button>
                    </div>
                </div>
            </div>
            <div className='menuIconContainer'>
                <button className='searchIcon'><IoSearchOutline/></button>
                <a href='#' className='cartIcon'><MdOutlineShoppingCart/></a>
                <a href='#' className='gridIcon'><BsGrid3X3Gap/></a>
                <div className='registerBtn'>
                <a href='#' className='registerTxt'>REGISTER NOW <IoIosArrowRoundForward style={{height:'30px',width:'30px'}}/></a>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Navbar
