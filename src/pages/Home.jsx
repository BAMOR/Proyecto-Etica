import { useEffect, useState } from "react";

export const Home = () => {


    const [titulo, setTitulo] = useState("Proyecto Etico");
    const [mensaje, setMensaje] = useState("");

    useEffect( () =>{
        setMensaje("Bienvenidos a mi blog ético");
    }, [] )

    useEffect( () => {
        document.title = titulo;

    }, [titulo])
    return(
        <>
            <div className="container">
            <h1>{titulo}</h1>
            <p>{mensaje}</p>
            </div>
        </>
    )
}

export default Home;