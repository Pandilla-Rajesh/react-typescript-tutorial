import React from 'react'
import { Link } from "react-router-dom"

export const LandingPage = () => {

    return (
        <section className='landing-page'>
            <article className=' container'>
                <div className="landing-page-content">
                    <div className='landing-main-content'>
                        <h1 className="landing-title">
                            <span className="react">React</span>
                            <span className="ts">Typescript</span>
                            <span className="topic">Topics</span>
                            <span className="learn">Learn</span>
                        </h1>
                        <img src={require('../../assets/images/ts-coverimage.png')} className='landing-image'
                            alt="typescript-image" loading='lazy' />
                        <div className='main-menu'>
                            <div>
                                <Link to='/'>
                                    <img src={require('../../assets/images/ts-brand.png')} loading='lazy'
                                        alt="ts-brand" /></Link>
                            </div>
                            <div className=''>
                                <ul className='right-nav'>
                                    <li className='nav-item'>
                                        <Link className='nav-link' to="/login">Login</Link>
                                    </li>
                                    <li className='nav-item'>
                                        <Link to="/" className='nav-link'>Sign Up</Link>
                                    </li>
                                    <li className='nav-item'>
                                        <Link to="/" className='nav-link'>Register</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    )
}
export default LandingPage