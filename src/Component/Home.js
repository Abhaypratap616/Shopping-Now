import React from 'react'
import hero from '../data/hero_image.png'
import hand from '../data/hand_icon.png'
import arrow from '../data/arrow.png'
import '../Cssparts/Home.css'
import data_product from '../data/data'
// import new_colelection from '../data/new_collections';
import Fewdata from './Fewdata';

 function Home() {
  return (
    <div>
     <div>
        <div className="upperpart">
        <div className="container">
            <div className="row ">
                <div className="col-lg-6 A-1 ">
                    <h6 className='hand'>New Arrivals Only <img src={hand} alt="" /></h6>
                    <h1 className='hand'>
                        New
                    </h1>
                    <h1 className='hand'>
                        Collections
                    </h1>
                    <h1 className='hand'>
                        For Everyone
                    </h1>
                    <button className='hand' >
                        Latest collection <img className='arrow' src={arrow} alt="" />
                    </button>
                </div>
                <div className="col-6 hero">
                    <img src={hero} alt="" />
                </div>
            </div>
        </div>
     </div>
        </div>
       
{/* ------------------------------------------------------------------------------------------------------ */}

{
    
    data_product.map((item)=>{
        return <Fewdata key ={item.id} abhay={item} />
    })

}



</div>
  )
}

export default Home;