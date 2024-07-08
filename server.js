const express = require('express');
const path = require('path');
const querystring = require('querystring');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Spotify credentials
const client_id = 'YOUR_SPOTIFY_CLIENT_ID'; // Your client id
const client_secret = 'YOUR_SPOTIFY_CLIENT_SECRET'; // Your secret
const redirect_uri = 'http://localhost:3000/callback'; // Your redirect uri

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/auth/spotify', (req, res) => {
    const scope = 'user-read-private user-read-email';
    res.redirect('https://accounts.spotify.com/authorize?' +
        querystring.stringify({
            response_type: 'code',
            client_id: client_id,
            scope: scope,
            redirect_uri: redirect_uri,
        }));
});

app.get('/callback', (req, res) => {
    // Handle Spotify callback and token exchange here
    res.send('Spotify authentication successful.');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
