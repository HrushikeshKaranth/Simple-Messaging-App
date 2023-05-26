# Simple Messaging App
Simple Messaging App
## Requirements needed to run this project 👇
+ Node JS Ver(16.17.0 or Greater) - (React JS)
+ VS Code (optional, use your preferred IDE)
+ Live Sass Compiler extension for VS Code.
## Steps to run this project 👍
+ Clone this repository!
+ change directory to 'frontend'.
+ After that run the below commands one after the another.
```
npm install
```
```
npm start
```
+ If Live Sass Compiler is not installed then we need to manually run the compiler.
+ Now open a new console in 'frontend' directory and run below commands.
```
cd src/assets/css
```
```
sass --watch app.scss:app.css format.scss:format.css welcomePage.scss:welcomePage.css
```
+ This will run the Sass compiler.

> Running the server

+ Change directory to server and run below commands.
```
npm install
```
```
npm start
```
+ This will start the server.

> Chat Feature
+ After login, run two instance of the app in different tabs of the browser.
+ Enter same room id in both the instances and we can exchange messages between apps.
