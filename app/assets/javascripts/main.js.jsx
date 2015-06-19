$(document).ready(start);

function start(e) {

}

var App = Backbone.Router.extend({
    routes: {
        'edit': 'profile',
        'home': 'home',
        'map': 'map',
        'forums': 'forums',
    },
        profile: function() {
            React.render(<Profile/>, document.querySelector('#container'));
    },
        home: function() {
            React.render(<Edit/>, document.querySelector('#container'));
    },
        forums: function() {
            React.render(<Forums/>, document.querySelector('#container'));
    },
});

var app = new App();
Backbone.history.start();
app.navigate('edit');

React.render(<Search/>, document.getElementById('search'));
