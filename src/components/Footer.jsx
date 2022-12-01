import React from 'react'
import iconoEmail from '../images/icon-email.svg'
import iconoPhone from '../images/icon-phone.svg'
import {CiFacebook} from 'react-icons/ci'
import {AiOutlineTwitter} from "react-icons/ai"
import {AiFillInstagram} from 'react-icons/ai'

const Footer = () => {
    return <footer className='footer'>
        <div className='content__logoTexts'>
           <section className='logoTexts__content'>
                 <figure className='header__figure'>
                    <img className='header__img' src={require("../images/logo-blanco.png")} alt="logo" />
                </figure>
                <div className='contenedor__icon'>
                    <img className='icon' src={iconoPhone} alt="icono de telefono" />
                    <p className='icon__paragraph'>Phone: +1-543-123-4567</p>
                </div>
                <div className='contenedor__icon'>
                    <img className='icon' src={iconoEmail} alt="icono de telefono" />
                    <p className='icon__paragraph'>example@fylo.com</p>
                </div>
           </section>
        </div>
        <div className='content__textsIcon'>
            <section className='textsIcon__content'>
                <div className='texts'>
                    <p className='texts__paragraph'>About Us</p>
                    <p className='texts__paragraph'>Jobs</p>
                    <p className='texts__paragraph'>Press</p>
                    <p className='texts__paragraph'>Blog</p>
                </div>
                <div className='texts'>
                    <p className='texts__paragraph'>Contact Us</p>
                    <p className='texts__paragraph'>Terms</p>
                    <p className='texts__paragraph'>Privacy</p>
                </div>
                <div className='redes__icons'>
                    <CiFacebook color='white' fontSize="25px" />
                    <AiOutlineTwitter color='white' fontSize="22px" style={{border: "1px solid white", borderRadius: "50%", margin: "0 10px"}} />
                    <AiFillInstagram color='white' fontSize="22px" style={{border: "1px solid white", borderRadius: "50%"}} />
                </div>
            </section>
        </div>
    </footer>
}

export default Footer