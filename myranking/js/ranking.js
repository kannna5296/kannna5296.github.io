//トークン取得
//urlencoded処理

//毎回認証トークンを取るのアホすぎるのでどうにかしたい
//認証に用いる値を隠したい
var details = {grant_type: "refresh_token", refresh_token: "リフレッシュトークン"};
var formBody = [];
for (var property in details) {
  var encodedKey = encodeURIComponent(property);
  var encodedValue = encodeURIComponent(details[property]);
  formBody.push(encodedKey + "=" + encodedValue);
}
formBody = formBody.join("&");
fetch('https://accounts.spotify.com/api/token', {
  mode: 'cors',
  method: 'POST',
  headers: {
    'Authorization': 'Basic Basic64',
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
  fetch('https://api.spotify.com/v1/me/top/tracks?limit=50', {
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
      Rendering(res);
    })
  });
}
//ゴリ押しレンダリング フレームワーク化したい
function Rendering(res){
  var rankingOb = document.getElementById('ranking');
  for (var item of res.items){

    var newElemPTitle = document.createElement("p");
    var textTitle = document.createTextNode(item.name);
    newElemPTitle.classList.add('font-weight-bold');
    newElemPTitle.appendChild(textTitle);

    var newElemPArtist = document.createElement("p");
    var textArtist = document.createTextNode(item.artists[0].name);
    newElemPArtist.appendChild(textArtist);

    var newElemDivInfo = document.createElement("div");
    newElemDivInfo.appendChild(newElemPTitle);
    newElemDivInfo.appendChild(newElemPArtist);

    var newElemImg = document.createElement("img");
    newElemImg.src=item.album.images[2].url;

    var newElemDivImg = document.createElement("div");
    newElemDivImg.classList.add("pr-1");
    newElemDivImg.appendChild(newElemImg);

    var newElemDivFlex = document.createElement("div");
    newElemDivFlex.classList.add("d-flex");
    newElemDivFlex.classList.add("flex-row");
    newElemDivFlex.appendChild(newElemDivImg);
    newElemDivFlex.appendChild(newElemDivInfo);

    var newElemA = document.createElement("a");
    newElemA.href = item.external_urls.spotify;
    newElemA.target = '_blank';
    newElemA.rel = 'noopener noreferer';
    newElemA.classList.add("flex");
    newElemA.classList.add("flex-row");
    newElemA.classList.add("float3");
    newElemA.appendChild(newElemDivFlex);

    var newElemLi = document.createElement("li");
    newElemLi.appendChild(newElemA);

    rankingOb.appendChild(newElemLi);
  }
}
