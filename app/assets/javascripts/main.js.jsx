// $(document).ready(start);
$(document).ready(ready)
$(window).on('page:load', ready)

function ready(e) {
    //might need this for something

    //
    //initializes and starts router
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
    //
    // Event Listeners
    $('.logButton').click(logIn);
    $('.userBox').keyup(logInPush);
    $('.passBox').keyup(logInPush);
    $('.signButton').click(signIn);
    $('.firstName').keyup(signInPush);
    $('.lastName').keyup(signInPush);
    $('.email').keyup(signInPush);
    $('.password').keyup(signInPush);
    $('.username').keyup(signInPush);
    $('#closed').click(showClosed);
    $('#all').click(showAll);
    $('.commentButton').on('click', addComment)
    //
    //Log in and sign in functions
    $('.signUpSuccess').hide();
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
            $.GET(
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
            if(username === "" && password === "") {

            } else {
                var currentUser = {
                    username: username,
                    password: password
                }
                $.POST(
                    'https://atxflood.herokuapp.com/users/sign_in',
                    currentUser
                )
            }
        }
    };

    function signIn (e) {
        e.preventDefault();
        var firstName = $('.firstName').val();
        var lastName = $('.lastName').val();
        var email = $('.email').val();
        var password = $('.password').val();
        var username = $('.username').val();
        //Data validations
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
        if ('@' in email.split('')) {
            atSym = true;
        }
        if (atSym === false) {
            $('.emailError').show();
        } else {
            $('.emailError').hide();
            atSym = true;
        }
        if (email.substring(email.length-4) === ".com") {
            eDotCom = true;
        }
        if (eDotCom === false) {
            $('.emailError').show();
        } else {
            $('.emailError').hide();
        }
        atSym = true;
        if(atSym && eDotCom && p && f && l) {
            newUser = new User({
                name: firstName + ' ' + lastName,
                password: password,
                username: username,
                email: email
            });
            $.get(
                'https://atxflood.herokuapp.com/users/sign_up',
                newUser
            )
            $('.page').hide();
            $('#container').show();
            $('.signUpSuccess').show();
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
                $('.signError').show();
                u = false;
            } else {
                $('.signError').hide();
                u = true;
            }
            var atSym = false;
            var eDotCom = false;
            if ('@' in email.split('')) {
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
            console.log(atSym);
            console.log(eDotCom);
            console.log(p);
            console.log(f);
            console.log(l);
            console.log(u);
            if(atSym && eDotCom && p && f && l && u) {
                newUser = new User({
                    name: firstName + ' ' + lastName,
                    password: password,
                    username: username,
                    email: email
                });
                console.log('wut');
                $.get(
                    'https://atxflood.herokuapp.com/users/sign_up',
                    newUser
                );
                $('.page').hide();
                $('#container').show();
                $('.signUpSuccess').show();;
            }
        }
    };
    //
    //comments
    var commentList = new CommentCollection();
    showComments();
    function addComment (e) {
        e.preventDefault();
        var comment = $('.commentBox').val();

        var commentToAdd = new Comment({
            text: comment,
            badge: window.location.hash
        });

        commentList.add(commentToAdd);
        commentToAdd.save();
        showComments();
    }
    function showComments () {

    }
    //
    //map related functions
    var austin = new google.maps.LatLng(30.30, -97.70); //sets austin's coordinates in a variable
    //creates custom closed road icon
    var image = {
        url: 'http://www.bedrace.co.uk/resources/images/template/map/icon_road-closed.png',
        scaledSize: new google.maps.Size(25, 25)
    }
    //creares custom open road icon
    var image2 = {
        url: 'http://www.clker.com/cliparts/g/a/9/b/4/6/map-pin-green.svg',
        scaledSize: new google.maps.Size(25, 25)
    }
    //inital map load, no icons
    function initialize() {
        var customIcons = {
            on: {
                icon: ''
            },
            off: {
                icon: ''
            }
        }

        var mapOptions = {
            zoom: 10,
            center: austin
        };
        var map = new google.maps.Map(document.getElementById('mapCanvas'),
            mapOptions);
    }
          //loads map
    google.maps.event.addDomListener(window, 'load', initialize);


    function showClosed (e) {
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDc2XC-pGKkj3gdmmDDkXWzC1uBuVbM1_A"
        function setupAC() {
           // still not sure what this function does, but needs to be defined for ajax call to work
        }

        var mapOptions = { //centers map on Austin
          zoom: 10,
          center: austin
        };
        //loads map
        var map = new google.maps.Map(document.getElementById('mapCanvas'),
            mapOptions);

        var customIcons = {
            on: {
                icon: ''
            },
            off: {
                icon: ''
            }
        }
        //ajax call for xml data that contains info on low water crossings
        $.ajax({
            type: "GET",
            url: "assets/phpsqlajax_genxml.xml", //had to download data, will need to contact ATX Floods directly if we want to get around the No Allow Access Control Origin error and get a live feed of data
            dataType: "xml",
            xhrFields: {
                withCredentials: false
            },
            success: parseXml,
            complete: setupAC,
            failure: function(data) {
                alert("XML File could not be found");
            }

         });
         function parseXml(xml) {
            //loads markers and iterates through each marker to place it on the map
            var markers = xml.documentElement.getElementsByTagName("marker");
                for (var i = 0; i < markers.length; i++) {
                    var name = markers[i].getAttribute("name");
                    var address = markers[i].getAttribute("address");
                    var type = markers[i].getAttribute("type");
                    if (type === 'off') { //only loads makers with the type value set to 'off', which indicates that the road is closed
                        var point = new google.maps.LatLng(
                            parseFloat(markers[i].getAttribute("lat")),
                            parseFloat(markers[i].getAttribute("lng")));
                        var html = "<b>" + name + "</b> <br/>" + address;
                        var icon = customIcons[type] || {};
                        //loads the marker onto the map
                        var marker = new google.maps.Marker({
                          map: map,
                          position: point,
                          icon: image,
                          scaledSize: google.maps.Size(71, 71)
                        });
                        //loads pop-up info for the marker
                        bindInfoWindow(marker, map, infoWindow, html);
                    }
                }
            }
            var infoWindow = new google.maps.InfoWindow;
            function bindInfoWindow(marker, map, infoWindow, html) {
              google.maps.event.addListener(marker, 'click', function() {
                infoWindow.setContent(html);
                infoWindow.open(map, marker);
              });
            };
            google.maps.event.addDomListener(window, 'load', initialize);
        };

    function showAll (e) {
        //shows all low water crossings, applies special icon to closed crossings
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDc2XC-pGKkj3gdmmDDkXWzC1uBuVbM1_A"
        function setupAC() {
           //uncertain of what this function is for, my ajax call has never called it
        }

        var mapOptions = {
            zoom: 10, //centers map on Austin
            center: austin
        };
        var map = new google.maps.Map(document.getElementById('mapCanvas'),
            mapOptions);

        var customIcons = {
            on: {
                icon: ''
            },
            off: {
                icon: ''
            }
        }
        $.ajax({
            type: "GET",
            url: "assets/phpsqlajax_genxml.xml",
            dataType: "xml",
            xhrFields: {
                withCredentials: false
            },
            success: parseXml,
            complete: setupAC,
            failure: function(data) {
                alert("XML File could not be found");
            }

         });
     function parseXml(xml) {
        console.log(xml);
        var markers = xml.documentElement.getElementsByTagName("marker");
            for (var i = 0; i < markers.length; i++) {
                var name = markers[i].getAttribute("name");
                var address = markers[i].getAttribute("address");
                var type = markers[i].getAttribute("type");
                if (type === 'off') {
                    var point = new google.maps.LatLng(
                        parseFloat(markers[i].getAttribute("lat")),
                        parseFloat(markers[i].getAttribute("lng")));
                    var html = "<b>" + name + "</b> <br/>" + address;
                    var icon = customIcons[type] || {};
                    var marker = new google.maps.Marker({
                      map: map,
                      position: point,
                      icon: image,
                      scaledSize: google.maps.Size(71, 71)
                    });
                    bindInfoWindow(marker, map, infoWindow, html);
                } else {
                    var point = new google.maps.LatLng(
                        parseFloat(markers[i].getAttribute("lat")),
                        parseFloat(markers[i].getAttribute("lng")));
                    var html = "<b>" + name + "</b> <br/>" + address;
                    var icon = customIcons[type] || {};
                    var marker = new google.maps.Marker({
                      map: map,
                      position: point,
                      icon: image2,
                      scaledSize: google.maps.Size(71, 71)
                    });
                    bindInfoWindow(marker, map, infoWindow, html);
                }
            }
        }
        var infoWindow = new google.maps.InfoWindow;
        function bindInfoWindow(marker, map, infoWindow, html) {
          google.maps.event.addListener(marker, 'click', function() {
            infoWindow.setContent(html);
            infoWindow.open(map, marker);
          });
        };
        google.maps.event.addDomListener(window, 'load', initialize);
    };
}
