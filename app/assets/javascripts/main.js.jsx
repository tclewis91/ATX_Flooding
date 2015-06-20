$(document).ready(start);

function start(e) {

}

var App = Backbone.Router.extend({
    routes: {
        'edit': 'home',
        'home': 'home',
        'map': 'map',
        'forums': 'forums',
        'login': 'login',
    },
    profile: function() {
         $('.page').hide();
         $('#container').show();
        React.render(<Profile/>, document.querySelector('#container'));
    },
    home: function() {
        $('.page').hide();
        $('#container').show();
        React.render(<Home/>, document.querySelector('#container'));
    },
    forums: function() {
        $('.page').hide();
        $('#container').show();
        React.render(<Forum/>, document.querySelector('#container'));
    },
    login: function() {
        $('.page').hide();
        $('#container').show();
        React.render(<Login/>, document.querySelector('#container'));
    },
    map: function() {
        $('#container').hide();
        $('.page').show();
    }
});

var app = new App();
Backbone.history.start();
app.navigate('edit');

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
    var username = $('.userBox').val();
    var password = $('.passBox').val();
    if(event.keycode === 13) {

    }
};

function signIn (e) {
    var firstName = $('.firstName').val();
    var lastName = $('.lastName').val();
    var email = $('.email').val();
    var password = $('.password').val();
    var username = $('.username').val();
    if (firstName === "") {
            $('.firstError').show();
        } else {
            $('.firstError').hide();
        }
        if (lastName === "") {
            $('.lastError').show();
        } else {
            $('.lastError').hide();
        }
        if (password === "") {
            $('.passError').show();
        } else {
            $('.passError').hide();
        }
        var atSym = false;
        var eDotCom = false;
        var e;
        if ('@' in $email.split()) {
            atSym = true;
        }
        if (atSym === false) {
            $('.emailError').show();
        } else {
            $('.emailError').hide();
        }
        if (email.substring(email.length-4) === ".com") {
            eDotCom = true;
        }
        if (eDotCom === false) {
            $('.emailError').show();
        } else {
            $('.emailError').hide();
        }
        var httpPresent = false;
        var dotCom = false;
};

function signInPush (e) {
    var firstName = $('.firstName').val();
    var lastName = $('.lastName').val();
    var email = $('.email').val();
    var password = $('.password').val();
    var username = $('.username').val();
    if(event.keycode === 13) {
        if (firstName === "") {
            $('.firstError').show();
        } else {
            $('.firstError').hide();
        }
        if (lastName === "") {
            $('.lastError').show();
        } else {
            $('.lastError').hide();
        }
        if (password === "") {
            $('.passError').show();
        } else {
            $('.passError').hide();
        }
        var atSym = false;
        var eDotCom = false;
        var e;
        if ('@' in $email.split()) {
            atSym = true;
        }
        if (atSym === false) {
            $('.emailError').show();
        } else {
            $('.emailError').hide();
        }
        if (email.substring(email.length-4) === ".com") {
            eDotCom = true;
        }
        if (eDotCom === false) {
            $('.emailError').show();
        } else {
            $('.emailError').hide();
        }
        var httpPresent = false;
        var dotCom = false;
    }
};
