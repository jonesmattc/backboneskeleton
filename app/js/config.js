define([], function() {
  _.templateSettings = {
    interpolate: /\{\{(.+?)\}\}/g
  };

  var config = {};
  config.apiKey = 'AIzaSyDYEmFJ4HTcg8u439otardBXb51OlOeYdw';
  config.scopes = 'https://www.googleapis.com/auth/tasks https://www.googleapis.com/auth/userinfo.profile';
  config.clientId = '777160082800.apps.googleusercontent.com';
  return config;
});