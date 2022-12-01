import React from 'react'
import ilustracion1 from '../images/illustration-1.svg'

const Main = () => {
    return <main className='contenedor__main'>
        <section className='your__files your__files-mod'>
            <div className='texts'>
                    <h1 className='title title__mod'>All your files in one secure location, accessible anywhere.</h1>
                    <p className='paragraph paragraph__one'>
                    Fylo stores your most important files in one secure location. 
                    Access them wherever you need, share and collaborate with friends, 
                    family, and co-workers.</p>

                    <form className='form'>
                        <input className='text' type="text" placeholder='Enter yout email' />
                        <button className="form__button">Get Started</button>
                    </form>
                </div>

                <figure className='figure__texts'>
                    <img className='img__texts' src={ilustracion1} alt="ilustracion 2" />
                </figure>
        </section>
    
        <div className="wave"></div>
    </main>
}

export default Main