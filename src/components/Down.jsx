
import Card from './Card'
import data from '../data/data'

const Down = () => {
  return (
    <div className="down">
        <Card key={data.id} src={data.img} />
    </div>
    
  )
}

export default Down