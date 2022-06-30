import { useEffect, useState } from "react"
import NavBar, { NavBarLogado } from "./NavBar"

// JavaScript source code
export default function Modalidades() {
    const [modalidades, setModalidades] = useState([])

    function requisicoes() {
        fetch("http://localhost:53418/api/modalidades")
            .then(x => x.json()).then(x => setModalidades(x))
    }

    useEffect(() => {
        requisicoes()
    },[])

    return (
        <div>
            {localStorage.getItem("user") ? <NavBarLogado></NavBarLogado> : <NavBar></NavBar>}
            <div className='grid container_mod'>
                <table>
                    <thead>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Local</th>
                        <th>Data</th>
                    </thead>

                    <tbody>
                        {modalidades.map(x => {
                            return (
                                <tr>
                                    <td>{x.idModalidade}</td>
                                    <td>{x.nomeModalidade}</td>
                                    <td>{x.localCompeticao}</td>
                                    <td>{x.iniCompeticao}</td>
                                </tr>
                                )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
        )
}
