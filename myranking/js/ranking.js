//トークン取得
fetch('https://accounts.spotify.com/api/token', {
  mode: 'cors',
  method: 'POST',
  headers: {
    'Authorization': 'Basic ',
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  body: 'grant_type=client_credentials'})
  .then(response => {
    if (response.ok) {
      console.info(response.json());
    }
  });