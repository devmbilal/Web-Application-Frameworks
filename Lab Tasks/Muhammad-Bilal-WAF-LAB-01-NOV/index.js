const users = require("./MOCK_DATA.json");
const fs = require("fs");
const express = require("express");
const app = express();
app.use(express.json());

//  Read data from the Mock Data json file
app.get("/api/users", (req, res) => {
  res.send(users);
});

// GET /api/users/:id 
app.get("/api/users/:id", (req, res) => {
  const user = users.find((user) => user.id === parseInt(req.params.id));
  if (!user) {
    return res.status(404).send("The user with the given ID was not found");
  }
  res.send(user);
});

//GET /api/users/:name 
app.get("/api/users/:name", (req, res) => {
  const user = users.find((user) => user.first_name === req.params.name);
  if (!user) {
    return res.status(404).send("The user with the given name was not found");
  }
  res.send(user);
});

// POST /api/users
app.post("/api/users", (req, res) => {
  const user = {
    id: users.length + 1,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    gender: req.body.gender,
    ip_address: req.body.ip_address,
    ORGANIZATION: req.body.ORGANIZATION,
  };
   
  users.push(user);
  res.send(user);
});

// PUT /api/users/:id 
app.put("/api/users/:id", (req, res) => {
  const user = users.find((user) => user.id === parseInt(req.params.id));
  if (!user) {
    return res.status(404).send("The user with the given ID was not found");
  }
  
  user.first_name = req.body.first_name;
  user.last_name = req.body.last_name;
  user.email = req.body.email;
  user.gender = req.body.gender;
  user.ip_address = req.body.ip_address;
  user.ORGANIZATION = req.body.ORGANIZATION;
  res.send(user);
});

// Patch /api/users/:id
app.patch("/api/users/:id", (req, res) => {
  const user = users.find((user) => user.id === parseInt(req.params.id));
  if (!user) {
    return res.status(404).send("The user with the given ID was not found");
  }

  const fieldsToUpdate = ['first_name', 'last_name', 'email', 'gender', 'ip_address', 'ORGANIZATION'];
  fieldsToUpdate.forEach(field => {
    if (req.body[field] !== undefined) {
      user[field] = req.body[field];
    }
  });

  res.send(user);
});

// DELETE /api/users/:id 
app.delete("/api/users/:id", (req, res) => {
  const user = users.find((user) => user.id === parseInt(req.params.id));
  if (!user) {
    return res.status(404).send("The user with the given ID was not found");
  }
  const index = users.indexOf(user);
  users.splice(index, 1);
  res.send(user);
});

// DELETE /api/users/:class
app.delete("/api/users/:class", (req, res) => {
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
  });

  if (req.params.class === "A") {
    users = classB.concat(classC, classD, classE, classF);
  } else if (req.params.class === "B") {
    users = classA.concat(classC, classD, classE, classF);
  } else if (req.params.class === "C") {
    users = classA.concat(classB, classD, classE, classF);
  } else if (req.params.class === "D") {
    users = classA.concat(classB, classC, classE, classF);
  } else if (req.params.class === "E") {
    users = classA.concat(classB, classC, classD, classF);
  }
  else {
    users = classA.concat(classB, classC, classD, classE);
  }
  fs.writeFile("MOCK_DATA.json", JSON.stringify(users), (err) => {
    if (err) {
      throw err;
    }
  });
  
  res.send(users);
});


/* Get Route to read data from json file and store it in 
different files depending on the class of the ip address*/

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
});  

// Get Route to read data from the specific file depending on the class of the ip address
app.get("/api/users/A", (req, res) => {
  fs.readFile("classA.json", (err, data) => {
    if (err) {
      throw err;
    }

    res.send(JSON.parse(data));
  }
  );
}); 

app.get("/api/users/B", (req, res) => {  
  fs.readFile("classB.json", (err, data) => {
    if (err) {
      throw err;
    }

    res.send(JSON.parse(data));
  });
});

app.get("/api/users/C", (req, res) => {
  fs.readFile("classC.json", (err, data) => {
    if (err) {
      throw err;
    }

    res.send(JSON.parse(data));

  });
}
);

app.get("/api/users/D", (req, res) => {
  fs.readFile("classD.json", (err, data) => {
    if (err) {
      throw err;
    }

    res.send(JSON.parse(data));

  });
}
);

app.get("/api/users/E", (req, res) => {

  fs.readFile("classE.json", (err, data) => {
    if (err) {
      throw err;
    }

    res.send(JSON.parse(data));

  }
  );
}
);

app.get("/api/users/F", (req, res) => {
  fs.readFile("classF.json", (err, data) => {
    if (err) {
      throw err;
    }

    res.send(JSON.parse(data));

  });

}
);


app.listen(8080, () => {
  console.log("Server initiated ....");
});