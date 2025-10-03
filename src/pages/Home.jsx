import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div>
      {/* PORTADA */}
      <div className="jumbotron text-center bg-primary text-white py-5">
        <h1 className="display-4">Proyecto Ético</h1>
        <h3>Tu Nombre Completo</h3>
        <p className="lead">"La vida es un reflejo de tus pensamientos y acciones."</p>
      </div>

      {/* INTRODUCCIÓN */}
      <section className="my-5">
        <h2>Introducción</h2>
        <p>
          Este proyecto ético nace del deseo de vivir con valores, principios y un propósito claro.
          A través de la práctica diaria, el estudio y la reflexión, busco construir una vida coherente
          con mis ideales, en armonía conmigo mismo y con los demás.
        </p>
        <Link to="/introduccion" className="btn btn-outline-primary">Leer más</Link>
      </section>

      {/* PRINCIPIOS PARA UNA VIDA PLENA */}
      <section className="my-5">
        <h2>Principios para una Vida Plena</h2>
        <div className="row">
          <div className="col-md-3 mb-3">
            <Link to="/principios/comunicacion" className="btn btn-info">Comunicación</Link>
          </div>
          <div className="col-md-3 mb-3">
            <Link to="/principios/comprender" className="btn btn-info">Comprender a las personas</Link>
          </div>
          <div className="col-md-3 mb-3">
            <Link to="/principios/motivar" className="btn btn-info">Motivar a las personas</Link>
          </div>
          <div className="col-md-3 mb-3">
            <Link to="/principios/justicia" className="btn btn-info">Justicia</Link>
          </div>
          <div className="col-md-3 mb-3">
            <Link to="/principios/critica" className="btn btn-info">Crítica</Link>
          </div>
          <div className="col-md-3 mb-3">
            <Link to="/principios/perdon" className="btn btn-info">Perdón</Link>
          </div>
          <div className="col-md-3 mb-3">
            <Link to="/principios/confiardios" className="btn btn-info">Confiar en Dios</Link>
          </div>
          <div className="col-md-3 mb-3">
            <Link to="/principios/integridad" className="btn btn-info">Integridad</Link>
          </div>
        </div>
      </section>

      {/* LOS 7 VOTOS DEL ÉXITO */}
      <section className="my-5">
        <h2>Los 7 Votos del Éxito</h2>
        <div className="row">
          <div className="col-md-3 mb-3">
            <Link to="/votos/honestidad" className="btn btn-success">Honestidad</Link>
          </div>
          <div className="col-md-3 mb-3">
            <Link to="/votos/generosidad" className="btn btn-success">Generosidad</Link>
          </div>
          <div className="col-md-3 mb-3">
            <Link to="/votos/trabajoduro" className="btn btn-success">Trabajo duro</Link>
          </div>
          <div className="col-md-3 mb-3">
            <Link to="/votos/humildad" className="btn btn-success">Humildad</Link>
          </div>
          <div className="col-md-3 mb-3">
            <Link to="/votos/planificacion" className="btn btn-success">Planificación efectiva</Link>
          </div>
          <div className="col-md-3 mb-3">
            <Link to="/votos/sentidocomun" className="btn btn-success">Sentido común</Link>
          </div>
          <div className="col-md-3 mb-3">
            <Link to="/votos/dominopropio" className="btn btn-success">Dominio propio</Link>
          </div>
        </div>
      </section>

      {/* REFLEXIONES */}
      <section className="my-5">
        <h2>Reflexiones: La vida no es lo que te imaginas</h2>
        <div className="list-group">
          <Link to="/reflexiones/capitulo1" className="list-group-item list-group-item-action">Capítulo 1: La cosmovisión</Link>
          <Link to="/reflexiones/capitulo2" className="list-group-item list-group-item-action">Capítulo 2: La sabiduría</Link>
          <Link to="/reflexiones/capitulo3" className="list-group-item list-group-item-action">Capítulo 3: La madurez</Link>
          <Link to="/reflexiones/capitulo4" className="list-group-item list-group-item-action">Capítulo 4: Los pensamientos equivocados</Link>
          <Link to="/reflexiones/capitulo5" className="list-group-item list-group-item-action">Capítulo 5: Conceptos erróneos</Link>
          <Link to="/reflexiones/capitulo6" className="list-group-item list-group-item-action">Capítulo 6: La actitud</Link>
          <Link to="/reflexiones/capitulo7" className="list-group-item list-group-item-action">Capítulo 7: Las relaciones</Link>
          <Link to="/reflexiones/capitulo8" className="list-group-item list-group-item-action">Capítulo 8: La familia</Link>
        </div>
      </section>

      {/* DISCURSO FINAL */}
      <section className="my-5">
        <h2>Discurso Final</h2>
        <p>Reflexión final sobre tu crecimiento personal y profesional.</p>
        <Link to="/discurso-final" className="btn btn-warning">Leer Discurso Final</Link>
      </section>
    </div>
  )
}
