

import data from '../data/data';


const MiddleSection = () => {
  

const card = data.map(item => <img key={item.id} src={item.image} alt= '' />)
console.log(data);

  
  //const card = arr.map((item) => <img key={item.id} src={require(`${item.image}`)} alt= '' />)


  //const card = data.map((item)=> <Card key={item.id} item={item}/>)
//create object {id:0, img="{Patrick}", alt: "candy1", span: "Price:50$", button: "Add to chart"}, then map it, and destructuring it from every div

  return (
    <section>
      <div className='rows'>
        {card}
      </div>
    </section>
  )
}

export default MiddleSection













/* 
import Patrick from '../pictures/patrick.jpg'
import Karsten from '../pictures/karsten.jpg'
import Glen from '../pictures/glen.jpg'
import Deidre from '../pictures/deidre.jpg'
import Dan from '../pictures/dan.jpg'
import Christopher from '../pictures/christopher.jpg'
*/


/* 
      <div className="rows">
        <img
          src={Patrick}
          alt="candy1"
        />
        <h3>Lorem, ipsum</h3>
        <p>
          Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Voluptatum, consectetur!
        </p>
        <span>Price:50$</span><br/>
        <button>Add to chart</button>
      </div>
      
      <div className="rows">
        <img
          src={Karsten}
          alt="candy2"
        />
        <h3>Lorem, ipsum</h3>
        <p>
          Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Voluptatum, consectetur!
        </p>
        <span>Price:50$</span><br/>
        <button>Add to chart</button>
      </div>
      
      <div className="rows">
        <img
          src={Glen}
          alt="candy3"
        />
        <h3>Lorem, ipsum</h3>
        <p>
          Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Voluptatum, consectetur!
        </p>
        <span>Price:50$</span><br/>
        <button>Add to chart</button>
      </div>
    
      <div className="rows">
        <img
          src={Deidre}
          alt="candy4"
        />
        <h3>Lorem, ipsum</h3>
        <p>
          Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Voluptatum, consectetur!
        </p>
        <span>Price:50$</span><br/>
        <button>Add to chart</button>
      </div>
      
      <div className="rows">
        <img
          src={Dan}
          alt="candy5"
        />
        <h3>Lorem, ipsum</h3>
        <p>
          Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Voluptatum, consectetur!
        </p>
        <span>Price:50$</span><br/>
        <button>Add to chart</button>
      </div>
      
      <div className="rows">
        <img
          src={Christopher}
          alt="candy6"
        />
        <h3>Lorem, ipsum</h3>
        <p>
          Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Voluptatum, consectetur!
        </p>
        <span>Price:50$</span><br/>
        <button>Add to chart</button>
      </div>
*/