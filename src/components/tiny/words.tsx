import React from 'react';
import './index.css';
export const World = (props:any) =>{
    return (
        <>

            <div className="part">
                <h2 className="text-white">{props.title}</h2>

                <div>
                    <p className='text-white'>{props.description}</p>
                </div>

            </div>

        </>
    )
}