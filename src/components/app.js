angular.module('video-player')

  .component('app', {
    controller: function() {
  
      this.videos = window.exampleVideoData;
      
    },
    templateUrl: 'src/templates/app.html',
    selectVideo: () => {
      
    }
    
  });
