import React from 'react'
import '../Cssparts/Fewdata.css'
import { useDispatch, useSelector } from 'react-redux';
import { addtocart,removetocart } from '../Slice/Slicecart';

export default function Fewdata(props) {
    const data = props.abhay;
    const {cart} = useSelector((state) => state);
    const anmol = useDispatch();

    const addtocartfun = ()=>{
        anmol(addtocart(data));
    }
    const removetocartfun = ()=>{
        anmol(removetocart(data));
    }
  return (
    <div>
      <div className="mn">
        <div className="container-fluid">
            <div className="row ">
                <div className="col-lg-3 ">

                   <img src={data.image} alt="" />
                    <p>
                          {data.name}
                    </p>
                    <p>
                          <span className="new_price">
                            ${data.new_price}
                          </span>
                          <span className="old_price">
                            ${data.old_price}
                          </span>
                    </p>
                   {
                    cart.some((item)=> item.id === data.id) ? (
                      <button onClick={removetocartfun}>
                        <p>remove the item</p>
                      </button>
                    ):(
                      <button onClick={addtocartfun}>
                        <p>add to cart</p>
                      </button>
                    )
                   }
                </div>
            </div>
        </div>
      </div>

    </div>
  )
}
