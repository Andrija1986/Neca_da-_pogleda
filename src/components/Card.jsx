const Card = ({item}) => {
  return (
    <div className='card'>
      <img
        src={item.image}
        alt="candy1"
      />
      <h3>Lorem, ipsum</h3>
      <p>
        Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Voluptatum, consectetur!
      </p>
      <span>Price:{item.price}</span><br/>
      <button>Add to chart</button>
    </div>
  )
}

export default Card;
