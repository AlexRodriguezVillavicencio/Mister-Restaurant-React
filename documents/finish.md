
To mount it to github pages we do the following:
>npm install gh-pages

Go to package.json add a new property:
    "homepage": "https://alexrodriguezvillavicencio.github.io/Mister-Restaurant-React/",

Let's run the code:
>npm run build

Add inside the package.json, the scripts:
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build",


We save all the changes and upload it to github.

