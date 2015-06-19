$(document).ready(start);

function start(e) {
    
}

/* global Backbone React */
var App = Backbone.Router.extend({
    routes: {
        '': 'profile',
        'home': 'home',
        'map': 'map'
    },
    profile: function() {
      React.render(<Profile/>, document.querySelector('#container'));
    },
    home: function() {
      React.render(<Edit/>, document.querySelector('#container'));
    }
});

var app = new App();
Backbone.history.start();
app.navigate('edit');

React.render(<Search/>, document.getElementById('search'));
