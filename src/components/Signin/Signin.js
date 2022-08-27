import React from "react";

class Signin extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: ""	
		}
	}

	onEmailChange = (event) => {
		this.setState({ email: event.target.value });
	}

	onPasswordChange = (event) => {
		this.setState({ password: event.target.value });
	}

	onSubmitSignIn = () => {

		fetch("https://fast-reaches-67667.herokuapp.com/signin", {
			method: "post",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(this.state)		
		})
		.then(response => response.json())
		.then(user => {
			if ( user.name && user.email ) {
				this.props.onRouteChange('home');
				this.props.loadUser(user);
			}
		})

	}

	render() {

		return (

			<div>
				<article className="br3 ba dark-gray b--black-10 mv4 w-80 w-60-m w-30-l mw6 shadow-5 center">
					<main className="pv4 ph4-l black-80 w-90">
					  <div className="measure">
					    <fieldset id="sign_in" className="ba b--transparent ph0 mh0">
					      <legend className="f1 fw6 ph0 mh0 white">Sign In</legend>
					      <div className="mt3">
					        <label className="db fw6 lh-copy f6 tl color-violet" htmlFor="email-address-sign-in">Email</label>
					        <input 
					        	onChange = {this.onEmailChange}
					        	className="input-reset ba b--black-20 pa2 mb2 db w-100 color-violet br2" 
					        	type="email" 
					        	name="email-address-sign-in"  
					        	id="email-address-sign-in"
					        	placeholder="Enter your email" 
					        />
					      </div>
					      <div className="mv3">
					        <label className="db fw6 lh-copy f6 tl color-violet" htmlFor="password">Password</label>
					        <input 
					        	onChange = { this.onPasswordChange }
					        	className="input-reset ba b--black-20 pa2 mb2 db w-100 color-violet br2" 
					        	type="password" name="password"  id="password" 
					        	placeholder="Enter your password" 
					        />
					      </div>
					    </fieldset>
					    <div className="">
					      <input 
					      	onClick={() => this.onSubmitSignIn() }
					      	className="b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6 dib tl white br2" 
					      	type="submit" 
					      	value="Sign in" 
					      />
					    </div>
					    <div className="lh-copy mt3">
					      <p
					      	onClick={() => this.props.onRouteChange('register') }
					      	className="f6 link dim tc color-violet db pointer"
					      >
					      	Register
					      </p>
					    </div>
					  </div>
					</main>
				</article>
			</div>

		)
	}
}

export default Signin;
