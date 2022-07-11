# NomadCoders_2.2.NodeJS-JoomClone

Zooooom 을 클론하며 Vanilla JS, NodeJS, WebSockets, SocketIO, WebRTC 등에 대해 배우는 저장소입니다.

## 프로젝트 세팅 과정 (설치 명령어 모음)

- `npm i nodemon -D`
- "./nodemon.json" 생성
- "./babel.config.json" 생성
- "./src/server.js" 생성

```import express from 'express';

const app = express();
const PORT = 3000;

app.listen(PORT, console.log(`✅ Listen ${PORT}!!!`));
```

- `npm i @babel/core @babel/cli @babel/node -D`
- "nodemon.json" 파일에 `{ "exec": "babel-node src/server.js" }` 입력
- "babel.config.json" 파일에 `{ "presets": ["@babel/preset-env"] }` 입력
- `npm i @babel/preset-env -D`
- "package.json" 파일에 `"scripts": { "dev" : "nodemon" }` 입력
- `npm i express`
- `npm i pug`
- `npm run dev`
