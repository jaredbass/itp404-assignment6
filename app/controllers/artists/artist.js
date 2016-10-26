import Ember from 'ember';

export default Ember.Controller.extend({

	actions: {
		createNewSong: function(e) {
			var name = this.get('songName');
			var price = this.get('price');
			var created = this.get('createdBy');

		var promise = $.ajax({
			type: 'post',
			url: 'http://itp-api.herokuapp.com/api/songs',
			data: {
				name: name,
				artist: this.get('model.id'),
				genre: 1,
				price: price,
				createdBy: createdBy
			}
		});

		promise.then((getResponse) =>{
			this.set('songName', null);
			this.set('price', null);
			this.set('createdBy', null);
			var songs = this.get('model.songs');

			var newSong = songs.concat(getResponse.song);
			this.set('model.songs', newSongs);
		}, function(){
			alert('error');
		});
		}
	}
});
