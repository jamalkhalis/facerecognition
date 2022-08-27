import React from "react";
import Logo from "../Logo/Logo";


const Navigation = ({ onRouteChange, isSignIn }) => {

	if (isSignIn) {

		return (
			<div style={{"display": "flex", "justifyContent": "space-between"}} className="pt4 mb4">
				<Logo />

				<div>
				<nav style={{"display": "flex", "justifyContent": "flex-end"}}>
					<p
						onClick={ () => onRouteChange('signin') } 
						className='f3 link dim br3 ba pv3 ma0 dib white pointer ph4 mr4 signin-button'
					>
						Sign Out
					</p>
				</nav>
				</div>

			</div>
		)

	} else {
		return (
			<div style={{"display": "flex", "justifyContent": "space-between"}} className="pt4 mb4">

				<Logo />

				<div>
					<nav style={{"display": "flex", "justifyContent": "flex-end"}}>

						<p
							onClick={ () => onRouteChange('register') } 
							className='f3 link dim br3 pv3 ma0 dib black bg-white pointer ph4 mr4 register-button'
						>
							Register
						</p>

						<p
							onClick={ () => onRouteChange('signin') } 
							className='f3 link dim br3 ba pv3 ma0 dib white pointer ph4 mr4 signin-button'
						>
							Sign In
						</p>

					</nav>
				</div>

			</div>
		)
	}
}

export default Navigation;

// f3 link dim underline p3 pointer ph4