
import Card from './Card'
import data from '../data/data';

const Up = () => {
  return (
    <main>
      <div>
        <Card key={data.id} src={data.img} />
      </div>
    </main>
  )
}

export default Up;