
import React from 'react';
import { useState, useEffect } from 'react';

import Lo1 from './Images/35b93ef8b6ff936de6d8524ebe4bfce2.gif'


function Test() {

    const [data, setData] = useState([])
    const [load, setLoad] = useState([])
    const [tog, setTog] = useState(false)

    const Api = () => {


        fetch('https://ig-food-menus.herokuapp.com/best-foods')
            .then(response => response.json())
            .then(res => setData(res))
            setLoad(false)
    }
   console.log(data);

    useEffect(() => {
        setTimeout(() => {
            Api()
        }, 2000);
        

    }, []);

    const Toog = () =>{
        if(tog == true){
            setTog(false)
        }else{
            setTog(true)
        }
    }

    return (
        <>
        {load ? ( <img className='logif' src={Lo1} alt="" />) : (
            <div>
                <div className="btn1">
                    <button className='btnn1' onClick={Toog}>
                        <i class="bi bi-list"></i>
                    </button>
                </div>
                {tog && (
                    <div className="menu">
                    <a href="#">FooD</a><br /><br /><br />
                    <a href="#">FooD</a><br /><br /><br />
                    <a href="#">FooD</a><br /><br /><br />
                    <a href="#">FooD</a><br /><br /><br />
                    <a href="#">FooD</a><br /><br /><br />
                    <a href="#">FooD</a><br />
                </div>
                )}
                {data.map(db=>(
                <div className='cards'>
                    <img className='cards-img' src={db.img} alt="" /><br /><br />
                    <h1 className='cards-title'>{db.name}</h1><br /><br />
                    <p className='cards-dec'>{db.dsc}</p><br />
                    <p className='cards-dec'><i class="bi bi-geo-alt"></i>{db.country}</p><br />
                    <p className='cards-dec'><i class="bi bi-currency-dollar"></i>{db.price}</p><br />
                </div>
            ))}
            </div>
        )}
            
        </>
    );
};

export default Test;
