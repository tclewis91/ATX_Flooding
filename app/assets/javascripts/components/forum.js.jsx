var Forum = React.createClass({
    render: function () {
        return (
          <section>
            <h1> Forums </h1>
            <div>
            	<a href = "#1"><div className = 'con' ref = 'ch1'><nav className = 'chLabel'>Forum Board #1</nav></div></a>
				<a href = "#2"><div className = 'con' ref = 'ch2'><nav className = 'chLabel'>Forum Board #2</nav></div></a>
				<a href = "#3"><div className = 'con' ref = 'ch3'><nav className = 'chLabel'>Forum Board #3</nav></div></a>
				<a href = "#4"><div className = 'con' ref = 'ch4'><nav className = 'chLabel'>Forum Board #4</nav></div></a>

				<section id = "chatArea1" className = 'page'>
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

				<form>
					<input type = "text" className = "commentBox" placeholder = "" />
					<button className = "commentButton">Submit</button>
				</form>
            </div>
          </section>
        );
    }
});