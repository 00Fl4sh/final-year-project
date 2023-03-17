import React from 'react'

const Footer = () => {
  return (
    <div className='main-footer'>
        <div className='container'>
            <div className='row'>
            {/* column 1 */}
            <div className='col'>
                <h4 className='hh'>HAPPY HORMONES</h4>
                <ul className='list'>
                    <li>Happy Hormones will help you if you are struggling with mental problems or
                         simply want to be more aware of your mood and wellbeing, this accompanies 
                         you with daily questions. Happy Hormones help people overcome 
                         mental disorders, decreasing healthcare costs, offering anonymity, and 
                         providing constant support and greater engagement rates and accessible 24/7.


                    </li>
                    <li>Mumbai, India</li>
                    <li>+91 987654321</li>
                </ul>
            </div>
            {/* column 2 */}
            <div className='col'>
                <h4 className='fu'>FOLLOW US</h4>
                <ul className='list1'>
                    <li>
                        <a href='https://instagram.com/_.kimchii.___?igshid=YmMyMTA2M2Y=' target='_blank' rel="noreferrer">
                        <i class="fa-brands fa-instagram fa-2xs"></i>
                        </a>
                     </li>
                    <li>
                        <a href='https://twitter.com/__P_R_A_V_I_N__?t=9A90wE8-E0QwgQgKqw_wCg&s=09' target='_blank' rel="noreferrer">
                        <i class="fa-brands fa-twitter"></i>
                        </a>
                     </li>
                    <li><i class="fa-brands fa-linkedin"></i></li>
                </ul>
            </div>
            </div>
            <hr/>
                <div className='row'>
                    <p className='col-sm'>
                        &copy;{new Date().getFullYear()} HAPPY HORMONES | All rights reserved | Terms of Service | Privacy
                    </p>
                </div>
        </div>
    </div>
  )
}

export default Footer