//トークン取得

//トラック取得
var request = new XMLHttpRequest();
request.open('GET', 'https://api.spotify.com/v1/me/top/tracks', true);

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
//ここにキー入れる
request.responseType = 'json';

request.onload = function () {
  var data = this.response;
  console.log(data);
};

request.send();