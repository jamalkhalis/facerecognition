import React from "react";

class Register extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			name: "",
			email: "",
			password: ""
		}
	}

	onNameChange = (event) => {
		this.setState({ name: event.target.value })
	}

	onEmailChange = (event) => {
		this.setState({ email: event.target.value })
	}

	onPasswordChange = (event) => {
		this.setState({ password: event.target.value })
	}

	onSubmitRegister = () => {
		fetch("https://fast-reaches-67667.herokuapp.com/register", {
			method: "post",
			headers: { "Content-Type": "application/json"},
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
					    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
					      <legend className="f1 fw6 ph0 mh0 white">Register</legend>

					      <div className="mt3">
					        <label className="db fw6 lh-copy f6 tl color-violet" htmlFor="name">Full Name</label>
					        <input 
					        	onChange = { this.onNameChange }
					        	className="input-reset ba b--black-20 pa2 mb2 db w-100 color-violet br2" 
					        	type="text" name="name"  id="name" 
					        	placeholder="Enter your name"
					        />
					      </div>

					      <div className="mt3">
					        <label className="db fw6 lh-copy f6 tl color-violet" htmlFor="email-address">Email</label>
					        <input
					        	onChange = { this.onEmailChange } 
					        	className="input-reset ba b--black-20 pa2 mb2 db w-100 color-violet br2" 
					        	type="email" name="email-address"  id="email-address" 
					        	placeholder="Enter your email"
					        />
					      </div>
					      <div className="mv3">
					        <label className="db fw6 lh-copy f6 tl color-violet" htmlFor="password">Password</label>
					        <input 
					        	onChange = { this.onPasswordChange}
					        	className="input-reset ba b--black-20 pa2 mb2 db w-100 color-violet br2" 
					        	placeholder="Enter your password"
					        	type="password" name="password"  id="password" 
					        />
					      </div>
					    </fieldset>
					    <div className="">
					      <input 
					      	onClick = { () => this.onSubmitRegister()}
					      	className="b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6 dib tl white br2" 
					      	type="submit" 
					      	value="Register" 
					      />
					    </div>
					    <div className="lh-copy mt3">
					      <p 
					      	onClick={() => this.props.onRouteChange('signin') }
					      	className="f6 link dim tc color-violet db pointer"
					      >
					      	Sign In
					      </p>
					    </div>
					  </div>
					</main>
				</article>
			</div>
		)

	}
}

export default Register;
