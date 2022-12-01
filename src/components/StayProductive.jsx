/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import row from '../images/icon-arrow.svg'
import ilustracion2 from '../images/illustration-2.svg'
import quotes from '../images/icon-quotes.svg'

const StayProductive = () => {
    return <section className='contenedor__productive'>
        <section className='your__files'>
            <div className='texts'>
                <h1 className='title title-mod'>Stay productive, wherever you are</h1>
                <p className='paragraph paragraph__two'>Never let location be an issue when accessing your files. Fylo has you 
                covered for all of your file storage needs.</p>
                <p className='paragraph paragraph__two'>
                Securely share files and folders with friends, family and colleagues for 
                live collaboration. No email attachments required!</p>

                <a href='#' className='texts__etiqueta'>See how Fylo works <img className='flecha__img' src={row} alt="flecha arriba" /></a>
            
                <div className='card'>
                    <img className='img__cuotes' src={quotes} alt="icono quotes" />
                
                    <p className='paragraph__quotes'>Fylo has improved our team productivity by an order of magnitude. Since making 
                    the switch our team has become a well-oiled collaboration machine.</p>
               
                    <div className='profile'>
                        <img className='profile__img' src={require("../images/avatar-testimonial.jpg")} alt="profile" />
                    
                        <div className='profile__texts'>
                            <h1 className='title__profile'>Kyle Burton</h1>
                            <p className='profile__paragraph'>Founder & CEO, Huddle</p>
                        </div>
                    </div>
                </div>
            </div>

            <figure className='figure__texts'>
                <img className='img__texts' src={ilustracion2} alt="ilustracion 2" />
            </figure>
        </section>
    </section>
}

export default StayProductive