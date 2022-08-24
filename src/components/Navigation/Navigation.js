import React from "react";

const Navigation = ({ onRouteChange, isSignIn }) => {

	if (isSignIn) {

		return (
			<nav style={{"display": "flex", "justifyContent": "flex-end"}}>
				<p
					onClick={ () => onRouteChange('signin') } 
					className='f3 link dim black underline p3 pointer ph4'
				>
					Sign Out
				</p>
			</nav>
		)

	} else {
		return (
			<nav style={{"display": "flex", "justifyContent": "flex-end"}}>

				<p
					onClick={ () => onRouteChange('register') } 
					className='f3 link dim black underline p3 pointer ph4'
				>
					Register
				</p>

				<p
					onClick={ () => onRouteChange('signin') } 
					className='f3 link dim black underline p3 pointer ph4'
				>
					Sign In
				</p>

			</nav>
		)
	}
}

export default Navigation;