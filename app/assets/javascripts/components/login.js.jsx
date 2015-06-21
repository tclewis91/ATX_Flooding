var Login = React.createClass({
	render: function () {
		return (
			<section className="main">
				<div className="login-tron">
					<div className="logo">
						<h1>Sign up below.</h1>
					</div>
				</div>
				<form>
					<h2>Log in...</h2>
					<input type = "text" className = "userBox" placeholder = "Username" /> <span className = "error userError">*Your username or password is incorrect</span>
					<input type = "password" className = "passBox" placeholder = "Password" />
					<button type = "submit" className = "logButton">Submit</button>
				</form>
				<form>
					<h2>Or sign up!</h2>
					<input type = "text" className = "firstName" placholder = "First Name" /> <span className = "error firstError">*you must ender a valid name</span>
					<input type = "text" className = "lastName" placholder = "Last Name" /> <span className = "error lastError">*you must ender a valid name</span>
					<input type = "text" className = "username" placholder = "Username" /> <span className = "error signUserError">*you must ender a valid username</span>
					<input type = "text" className = "email" placholder = "Email" /> <span className = "error emailError">*you must ender a valid email</span>
					<input type = "password" className = "password" placholder = "Password" /> <span className = "error passError">*you must ender a valid password</span>
					<button type = 'submit' className = "signButton">Submit</button>
				</form>
			</section>
		);
	}
});