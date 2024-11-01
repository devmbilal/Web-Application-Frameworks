const users = require("./MOCK_DATA.json");
const fs = require("fs");
const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: false }));

/*
now we have to create get route read data from json file MOCK_DART.json and store it in variable then read that data and store it to 
different files depending on the class of the ip address 
*/

app.get("/readdata", (req, res) => {
  let classA = [];
  let classB = [];
  let classC = [];
  let classD = [];
  let classE = [];
  let classF = [];

  users.forEach((user) => {
    let ip = user.ip_address.split(".");
    if (ip[0] >= 1 && ip[0] <= 126) {
      classA.push(user);
    } else if (ip[0] >= 128 && ip[0] <= 191) {
      classB.push(user);
    } else if (ip[0] >= 192 && ip[0] <= 223) {
      classC.push(user);
    } else if (ip[0] >= 224 && ip[0] <= 239) {
      classD.push(user);
    } else if (ip[0] >= 240 && ip[0] <= 255) {
      classE.push(user);
    } else {
      classF.push(user);
    }
    
    fs.writeFile("classA.json", JSON.stringify(classA), (err) => {
      if (err) {
        throw err;
      }
    });

    fs.writeFile("classB.json", JSON.stringify(classB), (err) => {
      if (err) {
        throw err;
      }
    });

    fs.writeFile("classC.json", JSON.stringify(classC), (err) => {
      if (err) {
        throw err;
      }
    });


    fs.writeFile("classD.json", JSON.stringify(classD), (err) => {
      if (err) {
        throw err;
      }
    });

    fs.writeFile("classE.json", JSON.stringify(classE), (err) => {
      if (err) {
        throw err;
      }
    });

    fs.writeFile("classF.json", JSON.stringify(classF), (err) => {
      if (err) {
        throw err;
      }
    });



  });

  res.send("Data stored successfully");
} );  // end of get route

app.get("/classA", (req, res) => {
  fs.readFile("classA.json", (err, data) => {
    if (err) {
      throw err;
    }

    res.send(JSON.parse(data));
  }
  );


app.listen(8080, () => {
  console.log("Server initiated ....");
});
}); 