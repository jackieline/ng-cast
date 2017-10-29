angular.module('video-player')
  .service('youTube', function($http) {
    this.search = (query, callback) => {
      $http({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search',
        params: {
          key: window.YOUTUBE_API_KEY,
          maxResults: 5,
          q: query,
          part: 'snippet',
          type: 'video',
          videoEmbeddable: 'true'
        }
      }).then(function success(data) {
        callback(data.data.items);
        
      }, function fail(data) {
        console.log(data);
        console.error(data);
      });
    };
  });
