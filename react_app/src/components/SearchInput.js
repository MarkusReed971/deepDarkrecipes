import React, {useState} from 'react'
import styles from './SearchInput.module.css'

const SearchInput = () => {
    const [text, setText] = useState('')

    return(
        <div className={styles.searchContainer}>
            <input
                className={styles.searchInput}
                type="text"
                placeholder={'Поиск'}
                value={text}
                onChange={event => setText(event.target.value)}
            />
        </div>
    )
}

export default SearchInput