const clientId = 'd8c3bd83e1964b5da8153869fc4bcbdf'; // Insert client ID here.
const redirectUri = 'http://localhost:3000/'; // Have to add this to your accepted Spotify redirect URIs on the Spotify API.
let accessToken;

const Spotify = {
  
  getAccessToken() {
    
    if ( accessToken ) {
      return accessToken;
    }
      
    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
      
    if (accessTokenMatch && expiresInMatch) {
      
      accessToken = accessTokenMatch[1];
      const expiresIn = Number(expiresInMatch[1]);
      window.setTimeout(() => accessToken = '', expiresIn * 3600);
      window.history.pushState('Access Token', null, '/'); // This clears the parameters, allowing us to grab a new access token when it expires.
      return accessToken;
      
    } else {
      
      const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
      window.location = accessUrl;
      
    }

  },
  
  search(term) {
    const accessToken = Spotify.getAccessToken();
    return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }).then((response) => {
      return response.json();
    }).then((jsonResponse) => {
      return ( jsonResponse.tracks.items || [] ).map((track) => {
        console.log( track );
        return {
          id: track.id,
          name: track.name,
          artist: track.artists[0].name,
          album: track.album.name,
          uri: track.uri,
          images: track.album.images,
          release_date: track.album.release_date,
          release_date_precision: track.album.release_date_precision
        }
      });
    });
  },
  
  savePlaylist( playlistName = "", playlistTrackUris = [] ) {
    
    /*
    Expects a playlistName (STRING) and playlistTrackUris (ARRAY)
    */
    
    if ( !playlistName || !playlistTrackUris.length ) {
      return;
    }
    
    const accessToken = Spotify.getAccessToken();
    const headers = { Authorization: `Bearer ${accessToken}` };
    let userID;
    
    return fetch( 'https://api.spotify.com/v1/me', { headers: headers })
      .then((response) => response.json())
      .then((jsonResponse) => {
        userID = jsonResponse.id;
        return fetch(`https://api.spotify.com/v1/users/${userID}/playlists`, {
          headers: headers,
          method: 'POST',
          body: JSON.stringify({name: playlistName})
        })
        .then((response) => response.json())
        .then((jsonResponse) => {
          const playlistId = jsonResponse.id;
          return fetch(`https://api.spotify.com/v1/users/${userID}/playlists/${playlistId}/tracks`, {
            headers: headers,
            method: 'POST',
            body: JSON.stringify({uris: playlistTrackUris})
          });
        })
      });
      
  }
  
};

export default Spotify;