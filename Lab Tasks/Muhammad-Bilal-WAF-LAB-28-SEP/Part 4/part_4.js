/*Create a web server using Node JS http module. Create four to five routes /, /users, /products, 
/display, and /books. Maintain a log by appending a file “log.txt” using fs module everytime a 
URL is visited. This file should store information such as serial number, time, date, URL, and 
number of query parameters for every URL. Create three plain text files named “products.txt”, 
“users.txt”, and “books.txt” using fs module. Get the information related to a specific file to be 
appended from the query parameters. The file “products.txt” should get information from query 
parameters of route /products and it should contain id, product title, and product price. Similarly 
the files “users.txt” and “books.txt” should be appended from the query parameters of /users 
and /books routes, respectively. The file “users.txt” should contain id, user name, age, city, and 
university. The file “books.txt” should contain id, book title, edition, year of publication, and 
press name. Hit at least 5 URLs having query parameters such as following for each bove 
mentioned routes for testing: 
/ 
/users?id=24&name=Abdullah&age=60&city=Islamabad&uni=QAU 
/products?id=89&title=Samsung&price=75K     
/books?id=19&title=AlgorithmDesignAndApplications&edition=3&2019&press=Wiley */


const http = require('http');
const fs = require('fs');
const url = require('url');
const port = 3000;

let serialNumber = 1;

const logRequest = (reqUrl, queryParams) => {
    const logEntry = `${serialNumber++}, ${new Date().toISOString()}, ${reqUrl}, ${Object.keys(queryParams).length}\n`;
    fs.appendFile('log.txt', logEntry, (err) => {
        if (err) throw err;
    });
};

const appendToFile = (fileName, data) => {
    fs.appendFile(fileName, data, (err) => {
        if (err) throw err;
    });
};

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const queryParams = parsedUrl.query;

    logRequest(parsedUrl.pathname, queryParams);

    if (parsedUrl.pathname === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Welcome to the Home Page');
    } else if (parsedUrl.pathname === '/users') {
        const userData = `${queryParams.id}, ${queryParams.name}, ${queryParams.age}, ${queryParams.city}, ${queryParams.uni}\n`;
        appendToFile('users.txt', userData);
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('User data appended');
    } else if (parsedUrl.pathname === '/products') {
        const productData = `${queryParams.id}, ${queryParams.title}, ${queryParams.price}\n`;
        appendToFile('products.txt', productData);
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Product data appended');
    } else if (parsedUrl.pathname === '/books') {
        const bookData = `${queryParams.id}, ${queryParams.title}, ${queryParams.edition}, ${queryParams.year}, ${queryParams.press}\n`;
        appendToFile('books.txt', bookData);
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Book data appended');
    } else if (parsedUrl.pathname === '/display') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Display Page');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Page not found');
    }
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
