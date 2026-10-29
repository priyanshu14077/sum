# sum-server

A minimal Node.js server built with Express.

## Requirements

- Node.js 18 or later
- npm

## Setup

```bash
npm install
```

## Run

```bash
npm start
```

The server listens on `http://localhost:3000`. Set the `PORT` environment variable to use a different port:

```bash
PORT=8080 npm start
```

## Endpoints

| Method | Path | Response                   |
| ------ | ---- | -------------------------- |
| GET    | `/`  | `Hello from the server!`   |
