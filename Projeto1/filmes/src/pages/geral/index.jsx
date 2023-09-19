import { useState } from 'react'
import { useEffect } from 'react'
import styles from './Card.module.css'


function catPagp() {
    
    const [ filmes, setFilmes ] = useState([])

    useEffect(() => {
        const buscarFilmes = async () => {
            const response = await fetch('https://raw.githubusercontent.com/Caiottoob/API/main/ola.json')
            const data = await response.json()
            setFilmes(data)
        }
        buscarFilmes()
    }, [])
    
    return (
        <table >
            <h1>Todos os gêneros</h1>
            <tbody>
            <tr >
            {
                    filmes.map( pagp => (
                        
                            <td key={pagp.id}>
                                <div>
                                    <nav><b>{pagp.filme}</b></nav>
                                    <nav><b>Duracao: </b>{pagp.duracao}</nav> 
                                    <nav><b>Diretor: </b>{pagp.diretor}</nav>
                                    <nav><b>Idade: </b>{pagp.classificacao_indicativa}</nav>
                                    <nav><b>Avaliação: </b>{pagp.avaliacao_critica}</nav>
                                    <nav><b>Lançamento: </b>{pagp.data_de_lancamento}</nav>
                                </div>
                                <div>
                                    <img src={pagp.capa} />
                                </div>
                            </td>
                           
                        
                    ))
                }
                </tr>
            </tbody>
        </table>
    )
}

export default catPagp