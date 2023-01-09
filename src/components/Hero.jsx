import React from 'react'
import styles from '../style'
import { discount , robot } from '../assets'
import GetStarted from './GetStarted'

const Hero = () => {
  return (

      // There are just two div here for Left and Right side 

      
    <section 
    id="home"
    className={`flex flex-col md:flex-row ${styles.paddingY}`}>

{/* ------------------------------ Left Site ---------------------------------- */}


        {/* Setting top on Mobile and both left and right on bigger screen */}
        <div className={`${styles.flexStart} sm:px-16 px-6 xl:px-0 flex flex-1 flex-col `}>

                {/* Discount Icon  */}
            <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
                <img className='w-[32px] h-[32px] cursor-pointer' src={discount} alt="discounticons" />
                <p className={`${styles.paragraph} ml-4`}>
                  <span className='text-white'>20%</span> Discount for <span className='text-white'>1 Month</span> Account
                </p>
            </div>
                

                {/* Start Hero Line Section*/}
            <div className='flex flex-row justify-between items-center w-full'>
                <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px]"> 
                    The Next  <br className='sm:block hidden'/> 
                    <span className='text-gradient'>Generation</span>    <br />
                    
                </h1>

                {/*  get Start */}
                <div className='ss:flex hidden md:mr-4'>
                  <GetStarted/>
                </div>
            </div>

                
                <h1 className=" font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] w-full"> 
                    Payment Method.
                </h1>

                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                Our team of experts uses a methodology to identify the credit cards
                most likely to fit your needs. We examine annual percentage rates,
                annual fees.
                </p>
        </div>

        {/* flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative */}
            {/* ----------------------------On the Right Side-------------------------------- */}
          <div className={`${styles.flexCenter} relative md:my-0 my-10 `}>
              {/* z-index - bringing the picture above the light */}
            <img className='w-[100%] h-[100%]  z-[5]' src={robot} alt="billing" />
            {/* gradient pic with self closing tag */}
            <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient'/>
            <div className='absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient'/>
            <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient'/>
            
          </div>

          <div className={`${styles.flexCenter} ss:hidden`}>
            <GetStarted/>
          </div>

    </section>


  )
}

export default Hero