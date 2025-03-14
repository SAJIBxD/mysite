---
title: "How to Get Spotify Saved Albums"
date: 2025-03-10T00:18:31+06:00
tags: [spotify, api]
---

To get a Spotify access token, follow these steps:

### Step 1: Create a Spotify Developer App

1. Go to [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. Log in and click "Create an App"
3. Note your Client ID and Client Secret

### Step 2: Get an Access Token

Since saved albums require user authentication, you need to use OAuth 2.0 Authorization Code Flow.

**Get Authorization Code**  
Open this URL in your browser (replace `YOUR_CLIENT_ID` with your actual Client ID):

```
https://accounts.spotify.com/authorize?client_id=YOUR_CLIENT_ID&response_type=code&redirect_uri=http://localhost:8080/callback&scope=user-library-read
```

1. Log in and authorize the app
2. Spotify redirects you to `http://localhost:8888/callback?code=YOUR_AUTH_CODE`
3. Copy the `AUTH_CODE` from the URL

**Exchange AUTH_CODE for Access Token**  
Run this cURL command (replace `YOUR_CLIENT_ID`, `YOUR_CLIENT_SECRET`, and `YOUR_AUTH_CODE`):

```shell
curl -X POST "https://accounts.spotify.com/api/token" \
     -H "Content-Type: application/x-www-form-urlencoded" \
     -d "grant_type=authorization_code" \
     -d "code=YOUR_AUTH_CODE" \
     -d "redirect_uri=http://localhost:8888/callback" \
     -d "client_id=YOUR_CLIENT_ID" \
     -d "client_secret=YOUR_CLIENT_SECRET"
```

You'll get a JSON response like this:

```json
{
  "access_token": "YOUR_ACCESS_TOKEN",
  "token_type": "Bearer",
  "expires_in": 3600,
  "refresh_token": "YOUR_REFRESH_TOKEN",
  "scope": "user-library-read"
}
```

### Step 3: Get Your Saved Albums

Use the access token to make a request to the Spotify API to get your saved albums. You can use the following cURL command.

```shell
curl -X GET "https://api.spotify.com/v1/me/albums?limit=50" \
     -H "Authorization: Bearer YOUR_ACCESS_TOKEN"
```
