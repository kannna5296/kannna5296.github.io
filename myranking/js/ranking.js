//トークン取得
var tokenAAA = 'token';

async function getAccessToken() {

const res =  await fetch('https://accounts.spotify.com/api/token', {
  mode: 'cors',
  method: 'POST',
  headers: {
    'Authorization': 'Basic YzZmNjg0NjdjYWUwNDY2M2E1YWNiZmE2YmY4MDRjOWU6YmE0NDUwOGU0YTQzNDhiNzg3YjM2ZmFlODY4ZjE3Y2Q=',
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  body: 'grant_type=client_credentials'});

resJson = await res.json();
console.log(resJson.access_token);
tokenAAA = resJson.access_token;

}


getAccessToken();

console.log(tokenAAA);