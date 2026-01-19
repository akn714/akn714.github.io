APIs (Application Programming Interfaces) allow applications to communicate and exchange data. However, securing your API is crucial to prevent unauthorized access. One popular method is using **API Key Authentication**, where clients are provided a unique key to access their API. This blog will guide you through creating API Key authentication for a Node.js API, step by step.

### Prerequisites

To follow this guide, ensure you have:

1.  **Node.js** installed on your system.
2.  A basic understanding of JavaScript.
3.  Familiarity with REST APIs.

### Step 1: Set Up Your Node.js Project

1.  Create a new project directory and initialize it with npm:

```
mkdir api-key-auth
cd api-key-auth
npm init -y
```

2. Install the necessary packages:

```
npm install express body-parser
```

### Step 2: Create the Basic API

1.  Create an `index.js` file in your project directory.
2.  Add the following code to set up a basic Express server:

```
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
// Basic route
app.get('/', (req, res) => {
    res.send('Welcome to the API!');
});
// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
```

3. Run your server:

```
node index.js
```

Visit `http://localhost:3000` in your browser to see the message.

### Step 3: Implement API Key Authentication

1.  Initializing a ‘users’ variables to save all the users that are assigned API keys.

```
const users = {
    // 'ae53df': { userId: 1, name: 'Alice' }
};
```

**2. Generate API Keys**: Writing a function ‘genKey’ to generate unique hex decimal keys for users.

```
function genKey(x) {
    let key;
    do {
        key = Math.floor(Math.random() * 16**x).toString(16).padStart(x, '0');
    } while (users[key]);
    
    return key;
}
```

3. **Middleware for API Key Validation**: Create a middleware to validate API keys.

```
// Middleware to validate API keys
const validateApiKey = (req, res, next) => {
    const apiKey = req.headers['authorization'];
    if (!apiKey || !users[apiKey]) {
        return res.status(401).json({ error: 'Invalid or missing API key' });
    }
    req.user = users[apiKey];
    next();
};
```

4. **Secure an API Endpoint**: Apply the middleware to secure specific routes.

```
// Secure route
app.get('/secure-data', validateApiKey, (req, res) => {
    res.json({ message: 'This is secure data.', user: req.user });
});
```

you can also use below code to apply secure access to all the route below this line.

```
app.use(validateApiKey);
// all the routes below will require api key to get access
app.get('/secure-data', (req, res) => {
    res.json({ message: 'This is secure data.', user: req.user });
});
```

### Step 4: Getting an API key

write a route to get an API key

```
let id = 0;
app.get('/get-key', (req, res) => {
    const key = genKey();
    const username = req.body.name;
    
    users[key] = { userId: id, name: username};
    res.json({
        "api-key": key
    });
});
```

Now, the your server will look like this…

```
// index.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
// users data
const users = {
    // 'ae53df': { userId: 1, name: 'Alice' }
};
// function to generate unique api keys
function genKey() {
    let key;
    do {
        key = Math.floor(Math.random() * 16**10).toString(16).padStart(10, '0');
    } while (users[key]);
    
    return key;
}
// Middleware to validate API keys
const validateApiKey = (req, res, next) => {
    const apiKey = req.headers['authorization'];
    if (!apiKey || !users[apiKey]) {
        return res.status(401).json({ error: 'Invalid or missing API key' });
    }
    req.user = users[apiKey];
    next();
};
// Basic route
app.get('/', (req, res) => {
    res.send('Welcome to the API!');
});
let id = 0;
// Route to generate new api key
app.get('/get-key', (req, res) => {
    const key = genKey();
    const username = req.body.name;
    
    users[key] = { userId: id++, name: username};
    res.json({
        "api-key": key
    });
});
// Adding validateApiKey middleware
app.use(validateApiKey);
// all the routes below will require api key to get access
app.get('/secure-data', (req, res) => {
    res.json({ message: 'This is secure route.', user: req.user });
});
// Start the server
const PORT = 3000;
const IP = '127.0.0.1';
app.listen(PORT, IP, () => {
    console.log(`Server running on http://${IP}:${PORT}`);
});
```

### Step 5: Test the API

1.  start the server

```
node index.js
```

2. Go to terminal and try to make a GET request to `/secure-data`route using ‘curl’

```
curl -X GET http://localhost:3000/secure-data
```

you will get an error message `{“error”:”Invalid or missing API key”}` .

3. Generate an API key.

```
curl -X GET http://localhost:3000/get-key -H "Content-Type: application/json" -d '{"name": "Bob"}'
```

an API key for user ‘Bob’ will be generated

```

{"api-key":"4e751556a3"}
```

4. Now, try to access the `/secure-data` route with this API key.

```
curl -X GET http://localhost:3000/secure-data -H "Authorization: 4e751556a3"
```

you will now get access to the secure route

```
{"message":"This is secure data.","user":{"userId":2,"name": "Bob"}}
```

Thanks for reading my blog!

Hope you learned a new thing today!