import Item from "./Item";


const ItemList = ( {cuadros, titulo} ) => {

  return (
    <div className="container">
        <h2 className="main-title">{titulo}</h2>

        <div className="cuadros">
            { cuadros.map((prod) => <Item cuadro={prod} key={prod.id} />) }
        </div>
    </div>
  )
}

export default ItemList