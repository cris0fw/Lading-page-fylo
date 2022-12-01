import React from 'react'

const AccessToday = () => {
    return <section className='contenedor__today'>
        <div className='content__texts'>
            <h1 className='title__accessToday'>Get early access today</h1>
            <p className='paragraph__accessToday'>It only takes a minute to sign up and our free starter tier is extremely generous. 
            If you have any questions, our support team would be happy to help you.</p>
        </div>
        <form action="" className='form__two'>
            <input className='email' type="text" placeholder='email@example.com' />
            <button className='form__button'>Get Started For Free</button>
        </form>
    </section>
}

export default AccessToday