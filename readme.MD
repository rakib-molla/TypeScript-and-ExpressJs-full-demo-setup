# Install Express & TypeScript
===========================================

1. create a folder 
2. open cmd command:  npm init
3. yarn add express
4. typescript install for devDependency :  yarn add -D typescript
5. using esm module (import) in this command create tsconfig.json file:  tsc --init
6. go to tsconfig and search roodDir  "rootDir": "./src/",  && create root dist folder it is for build ts file "outDir": "./dist",     
7. create src folder in root directory
8. in src folder create two file 1. app.ts 2.server.ts
9. in src folder create src > app folder
10. go to express js website and copy hello world code and past in  app.ts file :

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

11. open cmd : yarn add -D @types/node
12. open cmd : yarn add -D @types/express

13. app.ts file code :

import express from 'express'

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})


export default app;

14. server.ts file code : 
import { Server } from 'http'
import app from './app'

const port = 5000

let server: Server

async function bootstrap(){
 server = app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
 })
}

bootstrap();

15. cmd : tsc 
16. go to dist folder and run command node server.js (app is running)
17. cmd auto run for tsc file. this command for if you chang any file the server will auto run (Starting compilation in watch mode...) (auto run command) : tsc -w
18. cmd auto run for server : yarn add -D nodemon
19. got to package.json add nodemon script:  "start": "nodemon ./dist/server.js",
20. cmd finally run server: yarn start