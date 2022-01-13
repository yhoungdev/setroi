import React from 'react';
import '././index.css';
import './ads.css';
import Phone from '../../assets/images/images/phone.svg';
import Dark from '../../assets/images/images/dark.svg';
import Apple from '../../assets/images/images/apple.svg';
import Appledark from '../../assets/images/images/apple-dark.svg'
import Android from '../../assets/images/images/android.svg';
const Ads  = () => {

    return (

        <>
        
         <div className="container ">
       

            <div className="advert flex sm:flex-col-reverse">


            <div className="left">
                    <h2 className="head">
                        Download our app to get going.
                    </h2>

                    <p>
                    Complete management from the same App 
                    to appear in digital newspapers.
                    </p>

                    <div className="app-img flex">
                        <img src={Android} alt="" />
                        <img src={Apple} alt="" className="ml-4" />
                    </div>
            </div>

       

            <div className="right ">
                <img src={Phone} alt="" className='phone-ads' />
            </div>

            </div>

        </div>
       
          
        </>
    )

}

export default Ads;