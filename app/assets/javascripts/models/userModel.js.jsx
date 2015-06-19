var User = Backbone.Model.extend({
	defaults: {
		name: null,
		password: null,
		email: null,
		username: null,
		picture: 'http://1.bp.blogspot.com/-yp-vHWcrbA0/T89li5emINI/AAAAAAAAAIs/5HDGan4bMKI/s1600/cloud.jpg',
		comments: []
	},
	validate: function(attr) {
		
	}
});