import React from 'react';
import './index.css';
import Round from '../../assets/images/images/round.svg';

export const World = (props:any) =>{
    return (
        <>

            <div className="part">
                <div className="div">
                    <img src={Round} alt="" className='my-4'/>
                </div>
                <h2 className="text-white">{props.title}</h2>

                <div>
                    <p className='text-white'>{props.description}</p>
                </div>

            </div>

        </>
    )
}