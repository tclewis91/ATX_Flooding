var Login = React.createClass({
	render: function () {
		return (
			<section>
				<form>
					<h2>Log in...</h2>
					<input type = "text" className = "userBox" placeholder = "Username" /> <span className = "error userError">*Your username or password is incorrect</span>
					<input type = "password" className = "passBox" placeholder = "Password" />
					<button type = "submit" className = "logButton">Submit</button>
				</form>
				<form>
					<h2>Or sign up!</h2>
					<input type = "text" className = "firstName" placeholder = "First Name" /> <span className = "error firstError">*you must ender a valid name</span>
					<input type = "text" className = "lastName" placeholder = "Last Name" /> <span className = "error lastError">*you must ender a valid name</span>
					<input type = "text" className = "username" placeholder = "Username" /> <span className = "error signError">*you must ender a valid username</span>
					<input type = "text" className = "email" placeholder = "Email" /> <span className = "error emailError">*you must ender a valid email</span>
					<input type = "password" className = "password" placeholder = "Password" /> <span className = "error passError">*you must ender a valid password</span>
					<button className = "signButton">Submit</button>
				</form>
			</section>
		);
	}
});