var Forum = React.createClass({
    render: function () {
        return (
          <section>
            <h1> Forums </h1>
            <div>
            	<a href = "#1"><div class = 'con' id = 'ch1'><nav class = 'chLabel'>Forum Board #1</nav></div></a>
				<a href = "#2"><div class = 'con' id = 'ch2'><nav class = 'chLabel'>Forum Board #2</nav></div></a>
				<a href = "#3"><div class = 'con' id = 'ch3'><nav class = 'chLabel'>Forum Board #3</nav></div></a>
				<a href = "#4"><div class = 'con' id = 'ch4'><nav class = 'chLabel'>Forum Board #4</nav></div></a>

				<section id = "chatArea1" class = 'page'>
					<div class="box chatBox" id = "1"></div>
				</section>
				<section id = "chatArea2" class = 'page'>
					<div class="box chatBox" id = "2"></div>
				</section>
				<section id = "chatArea3" class = 'page'>
					<div class="box chatBox" id = "3"></div>
				</section>
				<section id = "chatArea4" class = 'page'>
					<div class="box chatBox" id = "4"></div>
				</section>
            </div>
          </section>
        );
    }
});