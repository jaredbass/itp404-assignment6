import Ember from 'ember';

export default Ember.Route.extend({

	model: function() {

		return $.ajax({
			// var url = ;
			url: 'http://itp-api.herokuapp.com/songs'
		}).then(function(api){
			return api.songs;
		});
	}
});
