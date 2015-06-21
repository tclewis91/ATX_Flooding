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
    e.preventDefault();
    var username = $('.userBox').val();
    var password = $('.passBox').val();
    if(username === "" && password === "") {

    } else {
        var currentUser = {
            username: username,
            password: password
        }
        $.post(
            'https://atxflood.herokuapp.com/users/sign_in',
            currentUser
        )
    }
};

function logInPush (e) {
    e.preventDefault();
    var username = $('.userBox').val();
    var password = $('.passBox').val();
    if(event.keycode === 13) {

    }
};

function signIn (e) {
    e.preventDefault();
    console.log('??');
    var firstName = $('.firstName').val();
    var lastName = $('.lastName').val();
    var email = $('.email').val();
    var password = $('.password').val();
    var username = $('.username').val();
    console.log(username);
    var f = false;
    var l = false;
    var p = false;
    var u = false;
    if (firstName === "") {
        $('.firstError').show();
    } else {
        $('.firstError').hide();
        f = true;
    }
    if (lastName === "") {
        $('.lastError').show();
    } else {
        $('.lastError').hide();
        l = true;
    }
    if (password === "") {
        $('.passError').show();
    } else {
        $('.passError').hide();
        p = true;
    }
    if (username === "") {
        console.log('???');
        $('.signError').show();
        u = false;
    } else {
        $('.signError').hide();
        u = true;
    }
    var atSym = false;
    var eDotCom = false;
    var e;
    if ('@' in email.split()) {
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
    if(atSym && eDotCom && p && f && l) {
        newUser = new User({
            name: firstName + ' ' + lastName,
            password: password,
            username: username,
            email: email
        });
    $.post(
        'https://atxflood.herokuapp.com/users',
        newUser
    )
    $('.page').hide();
    $('#container').show();
    React.render(<Forum/>, document.querySelector('#container'));
    }
};

function signInPush (e) {
    e.preventDefault();
    var newUser = {};
    var firstName = $('.firstName').val();
    var lastName = $('.lastName').val();
    var email = $('.email').val();
    var password = $('.password').val();
    var username = $('.username').val();
    var f = false;
    var l = false;
    var p = false;
    var u = false; 
    if(event.keycode === 13) {
        if (firstName === "") {
            $('.firstError').show();
        } else {
            $('.firstError').hide();
            f = true;
        }
        if (lastName === "") {
            $('.lastError').show();
        } else {
            $('.lastError').hide();
            l = true;
        }
        if (password === "") {
            $('.passError').show();
        } else {
            $('.passError').hide();
            p = true;
        }
        if (username === "") {
            console.log('??');
            $('.signError').show();
            u = false;
        } else {
            $('.signError').hide();
            u = true;
        }
        var atSym = false;
        var eDotCom = false;
        var e;
        if ('@' in $('.email').split()) {
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
        if(atSym && eDotCom && p && f && l) {
            newUser = new User({
                name: firstName + ' ' + lastName,
                password: password,
                username: username,
                email: email
            });
        $.post(
            'https://atxflood.herokuapp.com/users',
            newUser
        );
        $('.page').hide();
        $('#container').show();
        React.render(<Forum/>, document.querySelector('#container'));
        }
    }
};
