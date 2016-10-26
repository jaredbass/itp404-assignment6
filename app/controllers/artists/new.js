import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    newArtists: function(e) {
      e.preventDefault();
      var id = this.get('model.id');
      var name = this.get('artistName');
      this.transitionToRoute('artists');

      var promise = $.ajax({
        type: 'post',
        url: 'http://itp-api.herokuapp.com/api/artists',
        data: {  
          name: name,
        }
      });

      
      promise.then((response) => {
       
        this.set('name', null);

        var artists = this.get('model.artists');
      
        var newArtists = artists.concat(response.artist);
        this.set('model.artists', newArtists);
      }, function() {
        alert('error');
      });
    }
  }
});

