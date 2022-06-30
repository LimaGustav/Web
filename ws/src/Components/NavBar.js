

// JavaScript source code
import logo from "../DataFiles/Guia de Estilo/Logos/WSTowers.png"
import perfil from "../DataFiles/icones/perfil.png"

export default function NavBar() {


    function logout() {
        localStorage.removeItem("user");
        window.location.href = "/"
    }

    return (
        <div>
            <div className='grid'>
                <div className='navContainer'>
                    <a href='/'><img className="logo" src={logo}></img></a>

                    <a href='skills'>Skills</a>

                    <div>
                        <input type="checkbox" id='dark' />
                        <label htmlFor='dark'>Dark</label>
                    </div>

                    <button className='btn'><a href='login'>Login</a></button>
                </div>
            </div>
        </div>
    )
}

export function NavBarLogado() {

    function logout() {
        localStorage.removeItem("user");
        window.location.href = "/"
    }

    return (
        <div>
            <div className='grid'>
                <div className='navContainer'>
                    <a href='/'><img className="logo" src={logo}></img></a>
                    <img className='perfilImg' src={perfil}></img>

                    <a href='modalidades'>Modalidades</a>
                    <a href='resultados'>Resultados</a>

                    <div>
                        <input type="checkbox" id='dark' />
                        <label htmlFor='dark'>Dark</label>
                    </div>

                    <button onClick={logout} className='btn'>Logout</button>
                </div>
            </div>
        </div>
    )
}