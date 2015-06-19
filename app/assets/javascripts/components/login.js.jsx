var Login = React.createClass({
	render: function () {
		return (
			<section>
				<form>
					<h2>Log in...</h2>
					<input type = "text" ref = "userBox" placeholder = "Username" /> <span class = "error" ref = "userError">*Your username or password is incorrect</span>
					<button type = "submit" ref = "logButton">Submit</button>
				</form>
				<form>
					<h2>Or sign up!</h2>
					<input type = "text" ref = "firstName" placholder = "First Name" /> <span class = "error" ref = "userError">*you must ender a valid name</span>
					<input type = "text" ref = "lastName" placholder = "Last Name" /> <span class = "error" ref = "userError">*you must ender a valid name</span>
					<input type = "text" ref = "username" placholder = "Username" /> <span class = "error" ref = "userError">*you must ender a valid username</span>
					<input type = "text" ref = "email" placholder = "Email" /> <span class = "error" ref = "userError">*you must ender a valid email</span>
					<input type = "password" ref = "password" placholder = "Password" /> <span class = "error" ref = "userError">*you must ender a valid password</span>
				</form>
			</section>
		);
	}
});