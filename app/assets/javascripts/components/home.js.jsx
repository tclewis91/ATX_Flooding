var Home = React.createClass({
	render: function () {
		return (
			<section className="main">
				<div className="jumbotron">
					<div className="logo">
						<h1>Texas Floods</h1>
					</div>
					<div className="tag-line">
						<p>A look into the forgotten flood zones</p>
					</div>
				</div>
				<div className="container">
					<article>
						<div className="content top">
							<h2>What is going on in Austin?</h2>
							<div>
							<img src="assets/boat.jpg"/>
							</div>
							<p>High Life YOLO umami, pork belly Thundercats cray disrupt taxidermy art party tilde flannel food truck Brooklyn locavore. Ethical Shoreditch bitters artisan. Ennui organic four loko, Schlitz vinyl food truck butcher scenester before they sold out Pitchfork Brooklyn lofi. Kitsch yr banh mi cornhole. VHS fanny pack retro authentic bicycle rights. Echo Park mustache Austin brunch. Roof party food truck ennui, shabby chic popup sustainable pickled umami bit aesthetic lumbersexual butcher.</p>
							<br/>
							<p>Asymmetrical kitsch biodiesel, lofi disrupt viral DIY Carles blog bicycle rights sriracha next level tousled coldpressed food truck. Crucifix raw denim drinking vinegar, twee Pitchfork pickled cliche sriracha ennui Brooklyn churchkey. Next level skateboard fingerstache, Banksy Austin quinoa health goth deep v. Keytar Pinterest Shoreditch, bespoke actually semiotics fingerstache iPhone health goth gentrify High Life tilde. Beard four dollar toast tattooed Thundercats. Fingerstache kogi pourover, polaroid ennui chambray iPhone mixtape selfies photo booth wayfarers mumblecore cronut fap hella. Pinterest dreamcatcher fixie beard, heirloom tote bag polaroid.</p>
						</div>
					</article>
					<aside>
						<div className=" box closures">
							<h3>Road Closures</h3>
							<ul>
								<li className="one"><a href="">9th &amp; Lamar</a></li>
								<li className="two"><a href="">Manchaca near Jones</a></li>
								<li className="three"><a href="">Springdale &amp; East 7th</a></li>
								<li className="four"><a href="">Pleasant Valley &amp; William Cannon</a></li>
								<li className="five"><a href="">MLK &amp; Webberville</a></li>
								<li className="six"><a href="">Parmer &amp; Dessau</a></li>
							</ul>
						</div>
						<div className="box shelters">
							<h3>Shelters &amp; Soup Kitchens</h3>
							<div className="shelter-circles">
								<ul>
									<li className="one"><a href="">ARCH</a></li>
									<li className="two"><a href="">YMCA</a></li>
									<li className="three"><a href="">Austin Convention Center</a></li>
									<li className="four"><a href="">Erwin<br/>Center</a></li>
								</ul>
							</div>
						</div>
					</aside>
				</div>
			</section>
		);
	}
});