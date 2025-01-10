// Create web server 
// 1. Import express
const express = require('express');
// 2. Create an instance of express
const app = express();
// 3. Define the port number
const port = 3000;

// 4. Define the route for GET request
app.get('/', (req, res) => {
    // Handle the GET request
    res.send('Hello World!');
});

// 5. Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

// 6. Define the route for POST request
app.post('/', (req, res) => {
    // Handle the POST request
    res.send('POST request received!');
});

// 7. Define the route for PUT request
app.put('/', (req, res) => {
    // Handle the PUT request
    res.send('PUT request received!');
});

// 8. Define the route for DELETE request
app.delete('/', (req, res) => {
    // Handle the DELETE request
    res.send('DELETE request received!');
});

// 9. Define the route for GET request with parameters
app.get('/users/:userId/books/:bookId', (req, res) => {
    // Extract the parameters from the URL
    console.log(req.params);
    res.send('GET request with parameters received!');
});

// 10. Define the route for GET request with query parameters
app.get('/search', (req, res) => {
    // Extract the query parameters from the URL
    console.log(req.query);
    res.send('GET request with query parameters received!');
});

// 11. Define the route for GET request with comments
app.get('/comments/:commentId', (req, res) => {
    // Extract the commentId from the URL
    const commentId = req.params.commentId;
    // Extract the query parameters from the URL
    const query = req.query;
    // Send the response
    res.send(`GET request with commentId: ${commentId}, query: ${JSON.stringify(query)}`);
});