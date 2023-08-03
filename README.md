# Piped API

This is the API wrapper for Piped in Node.js (Typescript).

## Installation

```bash
npm i piped-api
```

## Usage

```typescript
import { PipedAPI } from "piped-api";

const api = new PipedApi("https://ytapi.dc09.ru");

let trending = await api.trending("US");

console.log(trending[0].title);
```
