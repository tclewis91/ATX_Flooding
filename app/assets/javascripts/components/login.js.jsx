var Login = React.createClass({
	render: function () {
		return (
			<section>
				<form>
					<h2>Log in...</h2>
					<input type = "text" class = "userBox" placeholder = "Username" /> <span class = "error" ref = "userError">*Your username or password is incorrect</span>
					<input type = "password" class = "passBox" placeholder = "Password" />
					<button type = "submit" class = "logButton">Submit</button>
				</form>
				<form>
					<h2>Or sign up!</h2>
					<input type = "text" class = "firstName" placholder = "First Name" /> <span class = "error" ref = "userError">*you must ender a valid name</span>
					<input type = "text" class = "lastName" placholder = "Last Name" /> <span class = "error" ref = "userError">*you must ender a valid name</span>
					<input type = "text" class = "username" placholder = "Username" /> <span class = "error" ref = "userError">*you must ender a valid username</span>
					<input type = "text" class = "email" placholder = "Email" /> <span class = "error" ref = "userError">*you must ender a valid email</span>
					<input type = "password" class = "password" placholder = "Password" /> <span class = "error" ref = "userError">*you must ender a valid password</span>
					<button type = submit class = "signButton">Submit</buton>
				</form>
			</section>
		);
	}
});