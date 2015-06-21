var Forum = React.createClass({
    render: function () {
        return (
          <section className="forums">
          	<div className="forum-tron">
	          	<div className="logo">
	            	<h1> Forums </h1>
	            </div>
            </div>
            <div className="forum-select">
            	<ul className="forum-button">
	            	<li className="button left"><a href = "#1">Road Closures</a></li>
					<li className="button"><a href = "#2">Volunteer Work</a></li>
					<li className="button"><a href = "#3">Shelter Information</a></li>
					<li className="button right"><a href = "#4">General Board</a></li>
				</ul>
			</div>
			<div className="forumBox">
				<section id = "chatArea1" className = 'chats page'>
					<div className="box chatBox" ref = "1"></div>
				</section>
				<section id = "chatArea2" className = 'page'>
					<div className="box chatBox" ref = "2"></div>
				</section>
				<section id = "chatArea3" className = 'page'>
					<div className="box chatBox" ref = "3"></div>
				</section>
				<section id = "chatArea4" className = 'page'>
					<div className="box chatBox" ref = "4"></div>
				</section>
			</div>
			<div className="forum-input">
				<form>
					<input type = "text" className = "commentBox" placeholder = "" />
					<button className = "commentButton">Submit</button>
				</form>
            </div>
          </section>
        );
    }
});