$(document).ready(start);

function start(e) {

}

var App = Backbone.Router.extend({
    routes: {
        'edit': 'home',
        'home': 'home',
        'map': 'map',
        'forums': 'forums',
    },
        profile: function() {
            React.render(<Profile/>, document.querySelector('#container'));
    },
        home: function() {
            React.render(<Home/>, document.querySelector('#container'));
    },
        forums: function() {
            React.render(<Forums/>, document.querySelector('#container'));
    },
});

var app = new App();
Backbone.history.start();
app.navigate('edit');

React.render(<Search/>, document.getElementById('search'));

$('.logButton').click(logIn);
$('.userBox').keyup(logInPush);
$('.passBox').keyup(logInPush);
$('.signButton').click(signIn);
$('.firstName').keyup(signInPush);
$('.lastName').keyup(signInPush);
$('.email').keyup(signInPush);
$('.password').keyup(signInPush);
$('.username').keyup(signInPush);

function logIn (e) {
    var username = $('.userBox').val();
    var password = $('.passBox').val();
    if(username === "" && password === "") {

    }
};

function logInPush (e) {
    if(event.keycode === 13) {

    }
};

function signIn (e) {

};

function signInPush (e) {

};