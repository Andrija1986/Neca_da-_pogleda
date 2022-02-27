
import data from '../data/data';



const Card = ({item}) => {
    
  return (
    <div className='rows'>
        {data}
    </div>
  )
}

export default Card

//<img src={require(`${data.img}`)} alt='' />