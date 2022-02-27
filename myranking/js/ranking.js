//トークン取得
//urlencoded処理
var data;
var details = {grant_type: "refresh_token", refresh_token: "認証トークン"};
var formBody = [];
for (var property in details) {
  var encodedKey = encodeURIComponent(property);
  var encodedValue = encodeURIComponent(details[property]);
  formBody.push(encodedKey + "=" + encodedValue);
}
formBody = formBody.join("&");

//ランキング取得
fetch('https://accounts.spotify.com/api/token', {
  mode: 'cors',
  method: 'POST',
  headers: {
    'Authorization': 'Basic base64したやつ',
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  body: formBody})
  .then((res) => {
    res.json().then(tokens => {
      getRanking(tokens.access_token);
      console.log(tokens.access_token);
    })
  });

  function getRanking(accessToken){
  fetch('https://api.spotify.com/v1/me/top/tracks?limit=30', {
  mode: 'cors',
  method: 'GET',
  headers: {
    'Authorization': 'Bearer ' + accessToken,
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }})
  .then((res) => {
    res.json().then(res => {
      console.log(res);
      //レンダリング
      Rendering(res);
    })
  });
}

function Rendering(res){
  var rankingOb = document.getElementById('ranking');
  for (var item of res.items){

    var newElemPTitle = document.createElement("p");
    var textTitle = document.createTextNode(item.name);
    newElemPTitle.appendChild(textTitle);

    var newElemPArtist = document.createElement("p");
    var textArtist = document.createTextNode(item.artists[0].name);
    newElemPArtist.appendChild(textArtist);

    var newElemDiv = document.createElement("div");
    newElemDiv.appendChild(newElemPTitle);
    newElemDiv.appendChild(newElemPArtist);

    var newElemA = document.createElement("a");
    newElemA.href = item.external_urls.spotify;
    newElemA.appendChild(newElemDiv);

    var newElemLi = document.createElement("li");
    newElemLi.appendChild(newElemA);
    rankingOb.appendChild(newElemLi);
  }
}