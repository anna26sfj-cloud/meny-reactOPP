import Dish from './Dish'

function Menu({ retter }) {
  return (
    <div className="meny-grid">
      {retter.map((rett) => (
        <Dish key={rett.id} rett={rett} />
      ))}
    </div>
  )
}

export default Menu