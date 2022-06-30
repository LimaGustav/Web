// JavaScript source code
import { useState } from "react"
import login from "../DataFiles/Login.png"
import NavBar, { NavBarLogado } from "./NavBar"

export default function Login() {
    const [email, setEmail] =useState('')
    const [senha, setSenha] =useState('')

    function Logar() {
        var data = {
            email: email,
            senhaAcesso: senha
        }

        fetch("http://localhost:53418/api/login", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {"Content-type" : "application/json; charset=UTF-8"}
        }).then(x => {
            if (x.status == 200) return x.json();
            else {
                console.log(x)
                window.alert("Dados Invalidos")
            }
        }).then(x => {
            localStorage.setItem('user', x.idAcesso)
            window.location.href = "/"
        })
    }

    return (
        <div>
            <div className='grid container_login'>
                <img className='img_login' src={login}></img>

                <div className='container_form'>
                    <input placeholder='email' onChange={c => setEmail(c.target.value)} type='text'/ >
                    <input placeholder='senha' onChange={c => setSenha(c.target.value)} type='password' />
                    <button onClick={Logar}>Login</button>
                </div>
            </div>
        </div>
        )
}