import { useEffect, useState } from "react";
import Banner from "./Banner";
import Footer from "./Footer";
import NavBar, { NavBarLogado } from "./NavBar";

// JavaScript source code
export default function Home() {
    const [noticias, setNoticias] = useState([])
    const [parceiros, setParceiros] = useState([])


    const [classNoticias, setClassNoticias] = useState("container_cards")
    const [classCards, setClassCards] = useState("nCards")

    function requisicoes() {
        fetch("http://localhost:53418/api/noticias/five")
            .then(x => x.json()).then(x => setNoticias(x))

        fetch("http://localhost:53418/api/parceiros")
            .then(x => x.json()).then(x => setParceiros(x))
    }

    function column() {
        setClassNoticias("container_cards column")
        setClassCards("nCards widthfull")

        fetch("http://localhost:53418/api/noticias")
            .then(x => x.json()).then(x => setNoticias(x))
    }

    useEffect(() => {
        requisicoes()
    },[])

    return (
        <div>
            {localStorage.getItem("user") ? <NavBarLogado></NavBarLogado> : <NavBar></NavBar>}

            <Banner />

            <section className="grid section_noticias">
                <div>
                    <button onClick={column}>Veja todas...</button>

                    <div className={classNoticias}>

                        {noticias.map((x) => {
                            return (
                                <div className={classCards}>
                                    <p>{x.titulo}</p>
                                    <p>{x.data}</p>
                                </div>
                                )
                        })}
                    </div>
                </div>
            </section>
            
            <section className='grid'>
                <div>
                    {parceiros.map((x) => {
                        return (
                            <img src={`data:image/png; base64${x.logo}`}></img>
                            )
                    })}
                    
                </div>
            </section>

            <Footer></Footer>
        </div>
        )
}