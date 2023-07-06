import React, { useEffect } from 'react'

const Nosotros = () => {

  useEffect(() => {

    const clickear = () => {
      console.log("Click");
    }

    window.addEventListener("click", clickear)

    return () => {
      window.removeEventListener("click", clickear)
    }

  }, [])

  return (
    <div className="container">
        <h1 className="main-title">Nosotros</h1>
        <p>"En Shop-Arte, te ofrecemos una amplia selección de cuadros excepcionales para embellecer tus espacios. Trabajamos con talentosos artistas para brindarte obras únicas y de alta calidad. Nuestro objetivo es proporcionarte una experiencia excepcional, con atención al cliente personalizada y envío seguro. Descubre nuestra colección en Shop-Arte y transforma tus paredes en verdaderas obras maestras. ¡Bienvenido a nuestro mundo de belleza y creatividad!"</p>
    </div>
  )
}

export default Nosotros