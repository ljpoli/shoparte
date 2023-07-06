import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config";

const ItemListContainer = () => {

    const [cuadros, setProductos] = useState([]);

    const [titulo, setTitulo] = useState ("cuadros");
    console.log(setTitulo)

    const categoria = useParams().categoria;

    useEffect(() => {
      
      const productosRef = collection(db, "cuadros");
      const q = categoria ? query(productosRef, where("categoria", "==", categoria)) : productosRef;
      
      getDocs(q)
        .then((resp) => {
          setProductos( resp.docs.map((doc) => {
            return { ...doc.data(), id: doc.id}
          }))
        })

      
    }, [categoria])
    
    
  return (
    <div>
        <ItemList cuadros={cuadros} titulo={titulo} />
    </div>
  )
}

export default ItemListContainer