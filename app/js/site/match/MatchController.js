Botinder.MatchesMatchController = Ember.Controller.extend(Ember.Evented, {
  needs: ['application'],
  match: null,
  message: '',

  modelObs: function() {
    var self = this;
    setTimeout(function() {
      self.trigger('scroll');
    }, 50);
  }.observes('model'),
  
  actions: {
    submit: function() {
      var match = this.get('model');
      
      chrome.runtime.sendMessage({
        type: 'message_post',
        id: match.id,
        message: this.get('message')
      });

      this.set('message', '');

      _gaq && _gaq.push(['_trackEvent', 'matches', 'post']);
    }
  }
});