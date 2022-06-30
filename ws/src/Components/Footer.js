// JavaScript source code

import { useEffect, useState } from "react"

// JavaScript source code
export default function Footer() {
    const [acessos, setAcessos] = useState([])

    useEffect(() => {

    }, [])

    return (
        <div>
            <div className='grid container_footer'>
                <div>
                    <p>WSTowers</p>
                    <p style={{marginLeft: 20}}><a href="skills">Skills</a></p>
                    <p style={{ marginLeft: 20 }}><a href="/">Parceiros</a></p>
                    <p style={{ marginLeft: 40 }}>Site: { }</p>
                    <p style={{ marginLeft: 40 }}>Area Reservada: { }</p>
                </div>

                <div>
                    <p>Redes Sociais</p>
                    <p style={{ marginLeft: 20 }}><a href='http://facebook.com'>Facebook</a></p>
                    <p style={{ marginLeft: 20 }}><a href='http://twitter.com'>Twitter</a></p>
                    <p style={{ marginLeft: 20 }}><a href='http://youtube.com'>Youtube</a></p>
                </div>
            </div>
        </div>
    )
}
