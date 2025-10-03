import { useState } from "react";

export const Comunicacion = () => {


    const [practica, setPractica] = useState({
        principio: "Comunicacion",
        definicion: "la comunicacion es el dialogo entre personas",
        fecha: "",
        entorno: { personal: "", laboral: "", familiar: "" },
        situacion: "",
        reflexion: { aprendizaje: "", emocion: "", desafio: "", cambio: "", },
        impacto: { efecto: "", influencia: "", cambios: "" },
        compromiso: "",
        fase: "",
    })
    return (
        <>
            <div className="continer">

                <p>{practica.definicion}</p>
                <form >
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email"  aria-describedby="emailHelp"></input>


                </form>

            </div>




        </>
    )
}

export default Comunicacion;