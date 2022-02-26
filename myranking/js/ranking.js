//トークン取得
//多分取得するトークン違う
fetch('https://accounts.spotify.com/api/token', {
  mode: 'cors',
  method: 'POST',
  headers: {
    'Authorization': 'Basic ',
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  body: 'grant_type=client_credentials'})
  .then((res) => {
    res.json().then(tokens => {
      getRanking(tokens.access_token);
    })
  });

function getRanking(accessToken){
  console.log(accessToken);
  fetch('https://api.spotify.com/v1/me/top/tracks?limit=2', {
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
    })
  });
}