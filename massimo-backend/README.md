# Massimo-Authentication Application

Build a Restful API for a simple Register and Login using Node.js, Express and MongoDB.

# Steps to Setup

1. Install dependencies

```bash
npm install
```

2. Docker Mongo UP

```bash
docker-compose up
```


3. Run Server

```bash
npm run start
```

You can browse the apis at <http://localhost:3000>

# API DOC

* Register

```bash
/v1/users/register


BODY: 
{
    email: 'example@example.com',
    password: '1234'
}

```
* Login

```bash
/v1/users/login


BODY: 
{
    email: 'example@example.com',
    password: '1234'
}

```
