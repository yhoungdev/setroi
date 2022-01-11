import React from 'react';
import './ads.css';
import Dark from '../../assets/images/images/dark.svg'


export const More = (props:any) => {

    return (
        <>
        
        <div className="break-down my-2">
                    <span className="dark ">
                        <img src={Dark} alt="" className="my-4" />
                    </span>
                    <h2>{props.heading}</h2>
                    <p>
                        {props.description}
                    </p>

        </div>
        </>
    )

}