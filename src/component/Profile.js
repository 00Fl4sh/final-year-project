

import React, { useState } from 'react'


function Profile() {
  const [user] = useState({});

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const { name, email, password } = event.target.elements;
  //   setUser({
  //     name: name.value,
  //     email: email.value,
  //     password: password.value,
  //   });

  return (
    <div className="container d-flex justify-content-center mt-5">

	<div className="card">
		
		<div className="top-container">
			
			<img src="https://i.imgur.com/G1pXs7D.jpg" className="img-fluid profile-image" alt='' width="70"/>
			
			<div className="ml-3">
				<h5 className="name">{user.name}</h5>
				<p className="mail">{user.email}</p> 
			</div>
		</div>


		<div className="middle-container d-flex justify-content-between align-items-center mt-3 p-2">
				<div className="dollar-div px-3">
					
					<div className="round-div"><i className="fa fa-dollar dollar"></i></div>

				</div>
				<div className="d-flex flex-column text-right mr-2">
					<span className="current-balance">Current Balance</span>
					<span className="amount"><span className="dollar-sign">$</span>1476</span>
				</div>

		</div>

		{/* <div className="recent-border mt-4">
			<span className="recent-orders">Recent orders</span>
		</div>
		<div className="wishlist-border pt-2">
			<span className="wishlist">Wishlist</span>
		</div>
		<div className="fashion-studio-border pt-2" style={{marginBottom:"20px", margin:"20px"}} >
			<span className="fashion-studio">Fashion studio</span>
		</div> */}
		
	</div>
	
</div>
  )
}
export default Profile;