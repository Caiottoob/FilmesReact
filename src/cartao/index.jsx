import { useEffect, useState } from 'react'
import styles from './Card.module.css'

function Card(nome, duracao, avaliacao, diretor) {

    return (

        <>
           <section className={styles.card}>

                <h3>{nome}</h3>
                <p>{duracao}</p>
                <div className={styles.card_footer}/>
                    <div className={styles.card_icones}/>
                       <p>{avaliacao}</p>
                       <p>{diretor}</p>

            </section>
        </>

    )
    
}

export default Card