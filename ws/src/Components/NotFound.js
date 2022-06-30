import { useEffect, useState } from "react"

// JavaScript source code
export default function NotFound() {
    const [cont, setCont] = useState(5)

    useEffect(() => {
        setTimeout(() => {
            if (cont > 1) {
                setCont(cont - 1)
            }
            else {
                window.location.href = "/"
            }
        },1000)
    },[cont])
    

    return (
        <div>
            <div className='notFound'>
                <h2>404 Not Found</h2>
                <p>Redirecionando em {cont}</p>
            </div>
        </div>
        )
}