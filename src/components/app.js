angular.module('video-player')

  .component('app', {
  
    controller: function(youTube) {
  
      this.videos = window.exampleVideoData;
      this.videoplay = this.videos[0];

      this.selectVideo = (video) => {
        this.videoplay = video;
      };
      
      this.searched = (text) => {
        youTube.search(text, (data) => {
          this.videos = data;
          this.videoplay = data[0];
        });
      }; 
      this.$onInit = () => {
        youTube.search('puppies', (data) => {
          this.videos = data;
          this.videoplay = data[0];
        });
      }; 
    },
    templateUrl: 'src/templates/app.html',
    
    
  });
