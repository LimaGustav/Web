// JavaScript source code

import { useEffect, useState } from "react"
import img1 from "../DataFiles/CarroseImagens/img1.png"
import img2 from "../DataFiles/CarroseImagens/img2.png"
import img3 from "../DataFiles/CarroseImagens/img3.png"

import back1 from "../DataFiles/CarroseImagens/background1.jpg"
import back2 from "../DataFiles/CarroseImagens/background2.jpg"
import back3 from "../DataFiles/CarroseImagens/background3.jpg"
// JavaScript source code
export default function Banner() {

    const [img, setImg] = useState(img1)
    const [back, setBack] = useState(back1)

    function changeBanner() {
        if (img == img1) {
            setImg(img2)
            setBack(back2)
        }
        else if (img == img2) {
            setImg(img3)
            setBack(back3)
        }
        else {
            setImg(img1)
            setBack(back1)
        }
    }

    useEffect(() => {
        setTimeout(() => {
            changeBanner()
        },3000)
    }, [img])


    return (
        <div>
            <div>
                <section className='banner' style={{ backgroundImage: `url(${back})`}}>
                    <img src={img}></img>
                </section>
            </div>
        </div>
    )
}
