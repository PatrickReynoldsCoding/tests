### How I created this project:

https://www.youtube.com/watch?v=WmR9IMUD_CY&t=4s

```
npm create vite@latest
npm install firebase

```

open firebase console:
https://console.firebase.google.com/

then

1. create database in test mode
2. project settings > create web app > copy producty code/credentials

then paste to main.js, along with:

```

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const firestore = firebase.firestore();

```
