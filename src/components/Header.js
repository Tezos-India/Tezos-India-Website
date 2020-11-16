import React from 'react'
import logo from '../assets/logo.png'
import Button from '@material-ui/core/Button'
import heroStyles from '../styles/Hero.module.css'

function Header() {
    return (
        <div className={heroStyles.header}>
            <img src={logo} alt="" className={heroStyles.headerImg}/>
            <div className={heroStyles.headerLinks}>
            <p>Documentation</p>
            <p className={heroStyles.githubLink}>Github</p>
            <Button className={heroStyles.headerButton}>Get in Touch</Button>
            </div>
        </div>
    )
}

export default Header
