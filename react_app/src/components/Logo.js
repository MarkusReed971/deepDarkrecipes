import React from 'react'
import logoImg from '../images/logo.svg'
import styles from './Logo.module.css'

const Logo = () => {
    return(
        <div className={styles.logo}>
            <img src={logoImg} alt="logo" width={'50px'} height={'50px'}/>
            <span>DeepDarkRecipes</span>
        </div>
    )
}

export default Logo