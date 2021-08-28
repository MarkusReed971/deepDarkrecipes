import React from 'react'
import Logo from "./Logo";
import styles from './Header.module.css'
import SearchInput from "./SearchInput";
import PersonalBar from "./PersonalBar";

const Header = () => {
    return(
        <header className={styles.header}>
            <Logo/>
            <SearchInput/>
            <PersonalBar/>
            <nav>
                <label htmlFor="main">Главная</label>
                <input type="radio" name={"navLink"} id={'main'}/>
                <label htmlFor="recipes">Рецепты</label>
                <input type="radio" name={"navLink"} id={'recipes'}/>
                <label htmlFor="addRecipe">Добавить рецепт</label>
                <input type="radio" name={"navLink"} id={'addRecipe'}/>
            </nav>
        </header>
    )
}

export default Header