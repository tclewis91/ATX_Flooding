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
        React.render(<Profile/>, document.querySelector('#container'));
    },
    home: function() {
        React.render(<Home/>, document.querySelector('#container'));
    },
    forums: function() {
        React.render(<Forum/>, document.querySelector('#container'));
    },
    login: function() {
        React.render(<Login/>, document.querySelector('#container'));
    }
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
    if ($name.val() === "") {
            $('#name-error').html("*Please insert a valid name");
            console.log('why');
        } else {
            $('#name-error').html("");
        }
        var atSym = false;
        var eDotCom = false;
        var e;
        if ('@' in $email.val().split()) {
            atSym = true;
        }
        if (atSym === false) {
            $('#email-error').html("*Please insert a valid email address");
        } else {
            $('#email-error').html("");
        }
        if ($email.val().substring($email.val().length-4) === ".com") {
            eDotCom = true;
        }
        if (eDotCom === false) {
            $('#email-error').html("*Please insert a valid email address");
        } else {
            $('#email-error').html("");
        }
        var httpPresent = false;
        var dotCom = false;

        if ($website.val().substring($website.val().length-4) === ".com") {
            dotCom = true;
        }
        if (dotCom === false && httpPresent === false) {
            $('#website-error').html("*Please insert a valid website");
        } else {
            $('#website-error').html("");
        }
        if ($website.val().substring(0, 7) === "http://") {
            httpPresent = true;
        }
        if ($('#website-error').html() === "" && $('#email-error').html() === "" && $('#name-error').html() === "") {
            console.log('??');
            $('.contact-box').hide();
            $('#success').show();
        }
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