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

| Method | Path         | Input                                              | Response                                   |
| ------ | ------------ | -------------------------------------------------- | ------------------------------------------ |
| GET    | `/`          | none                                               | `Hello from the server!`                   |
| GET    | `/sum`       | query `a`, `b`                                     | `{ "result": a + b }`                      |
| GET    | `/calculate` | query `a`, `b`, `op` (`add`, `subtract`, `multiply`, `divide`) | `{ "result": ... }`              |
| POST   | `/stats`     | JSON body `{ "numbers": [1, 2, 3] }`               | `{ count, sum, mean, min, max }`           |

Invalid input returns `400` with `{ "error": "..." }`.

Examples:

```bash
curl "http://localhost:3000/sum?a=2&b=3"
curl "http://localhost:3000/calculate?a=10&b=4&op=divide"
curl -X POST http://localhost:3000/stats -H "Content-Type: application/json" -d '{"numbers":[4,8,15,16,23,42]}'
```
