angular.module('video-player')
  .component('videoListEntry', {
    bindings: {
      video: '<'
    },
    controller: function() {
      console.log(this);
    },
    templateUrl: 'src/templates/videoListEntry.html'
  });
