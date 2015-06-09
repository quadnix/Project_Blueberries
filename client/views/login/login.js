Template.login.rendered = function() {
	if (Meteor.userId() != null) {
		// we're logged in
		Rotuer.go('home');
	}
}