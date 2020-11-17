import React from 'react'
import footerStyles from '../styles/Footer.module.css'
import logo from '../assets/logo.png'

function Footer() {
    return (
        <div className={footerStyles.container}>
            <div className={footerStyles.footerContent}>
                <div className={footerStyles.logoContainer}>
                <img src={logo} alt="" className={footerStyles.logo}/>
                </div>
                <div className={footerStyles.footerLinks}>
                    <p className={footerStyles.footerAlignLinks}>Home</p>
                    <p className={footerStyles.footerAlignLinks}>Pages</p>
                    <p className={footerStyles.footerAlignLinks}>Blog</p>
                    <p className={footerStyles.footerAlignLinks}>Portfolio</p>
                    <p className={footerStyles.footerAlignLinks}>Contact</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
