import { useState } from 'react'
import { useEffect } from 'react'


function catComedia() {
    
    const [ filmes, setFilmes ] = useState([])

    useEffect(() => {
        const buscarFilmes = async () => {
            const response = await fetch('https://raw.githubusercontent.com/Caiottoob/API/main/comedia.json')
            const data = await response.json()
            setFilmes(data)
        }
        buscarFilmes()
    }, [])
    
    return (
        <table>
            <h1>Comédia</h1>
            <tbody>
            <tr >
            {
                    filmes.map( comedia => (
                        
                            <td key={comedia.id}>
                                <div>
                                    <nav><b>{comedia.filme}</b></nav>
                                    <nav><b>Duracao: </b>{comedia.duracao}</nav> 
                                    <nav><b>Diretor: </b>{comedia.diretor}</nav>
                                    <nav><b>Idade: </b>{comedia.classificacao_indicativa}</nav>
                                    <nav><b>Avaliação: </b>{comedia.avaliacao_critica}</nav>
                                    <nav><b>Lançamento: </b>{comedia.data_de_lancamento}</nav>
                                </div>
                                <div>
                                    <img src={comedia.capa} />
                                </div>
                            </td>
                           
                        
                    ))
                }
                </tr>
            </tbody>
        </table>
    )
}

export default catComedia