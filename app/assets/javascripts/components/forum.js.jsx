var Forum = React.createClass({
    render: function () {
        return (
          <section>
            <h1> Forums </h1>
            <div>
            	<a href = "#1"><div class = 'con' ref = 'ch1'><nav class = 'chLabel'>Forum Board #1</nav></div></a>
				<a href = "#2"><div class = 'con' ref = 'ch2'><nav class = 'chLabel'>Forum Board #2</nav></div></a>
				<a href = "#3"><div class = 'con' ref = 'ch3'><nav class = 'chLabel'>Forum Board #3</nav></div></a>
				<a href = "#4"><div class = 'con' ref = 'ch4'><nav class = 'chLabel'>Forum Board #4</nav></div></a>

				<section id = "chatArea1" class = 'page'>
					<div class="box chatBox" ref = "1"></div>
				</section>
				<section id = "chatArea2" class = 'page'>
					<div class="box chatBox" ref = "2"></div>
				</section>
				<section id = "chatArea3" class = 'page'>
					<div class="box chatBox" ref = "3"></div>
				</section>
				<section id = "chatArea4" class = 'page'>
					<div class="box chatBox" ref = "4"></div>
				</section>

				<form>
					<input type = "text" ref = "commentBox" placeholder = "" />
					<button type = "submit" ref = "commentButton">Submit</button>
				</form>
            </div>
          </section>
        );
    }
});