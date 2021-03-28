# sketchat
a chatting app that utilizes drawing canvas as its main feature of conversation

## Features

- Make a chat room with multiple users
- Send your sketch in a conversation

## Setup

1. Clone the repo
2. Go to `frontend/` and run `npm install`
3. Create a `.env` file in the `/frontend` directory (see [below](#.ENV-file-config))
4. Enter `npm run dev` to run the react server in `PORT=3000` with other dependencies

## .ENV file config
An environment configuration file is needed to establish the host address for the socket.io server. Create a `.env` file and enter the variable below:
```
REACT_APP_SOCKETIO_URL = '192.168.1.XXX'
```
where XXX is your local IP address.

## NPM Scripts
Enter `npm run [script]` to run various commands on bash. `[script]` includes:
- `dev`: run react server, node server, and node-sass
- `start`: run react server
- `css-watch`: run node-sass to watch for changes and compile on style.scss

More scripts in the `package.json`