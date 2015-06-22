var Login = React.createClass({
	render: function () {
		return (
			<section className="main">
				<div className="login-tron page">
					<div className="logo">
						<h1>Welcome.</h1>
					</div>
				</div>
				<div className="login-input page">
					<form>
						<h2>Log in...</h2>
						<input type = "text" className = "userBox" placeholder = "Username" /> <span className = "error userError">*Your username or password is incorrect</span>
						<input type = "password" className = "passBox" placeholder = "Password" />
						<button type = "submit" className = "logButton">Submit</button>
					</form>
				</div>
				<div className="login-signup page">
					<form>
						<h2>Or Sign Up!</h2>
						<input type = "text" className = "firstName" placeholder = "First Name" /> <span className = "error firstError">*you must ender a valid name</span>
						<input type = "text" className = "lastName" placeholder = "Last Name" /> <span className = "error lastError">*you must ender a valid name</span>
						<input type = "text" className = "username" placeholder = "Username" /> <span className = "error signError">*you must ender a valid username</span>
						<input type = "text" className = "email" placeholder = "Email" /> <span className = "error emailError">*you must ender a valid email</span>
						<input type = "password" className = "password" placeholder = "Password" /> <span className = "error passError">*you must ender a valid password</span>
						<button className = "signButton">Submit</button>
					</form>
				</div>
				<section className = 'signUpSuccess'>
					You have succesfully signed up! Click <a href = '#login'>here</a> to log in!
				</section>
				
			</section>
		);
	}
});