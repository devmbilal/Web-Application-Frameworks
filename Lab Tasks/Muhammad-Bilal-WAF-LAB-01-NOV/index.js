const users = require("./MOCK_DATA.json");
const fs = require("fs");
const express = require("express");
const app = express();


app.use(express.json());

// Get Route to read data from json file and store it in different files depending on the class of the ip address

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
} );  

// Get Route to read data from the specific file depending on the class of the ip address
app.get("/classA", (req, res) => {
  fs.readFile("classA.json", (err, data) => {
    if (err) {
      throw err;
    }

    res.send(JSON.parse(data));
  }
  );
}); 

app.get("/classB", (req, res) => {  
  fs.readFile("classB.json", (err, data) => {
    if (err) {
      throw err;
    }

    res.send(JSON.parse(data));
  });
});

app.get("/classC", (req, res) => {
  fs.readFile("classC.json", (err, data) => {
    if (err) {
      throw err;
    }

    res.send(JSON.parse(data));

  });
}
);

app.get("/classD", (req, res) => {
  fs.readFile("classD.json", (err, data) => {
    if (err) {
      throw err;
    }

    res.send(JSON.parse(data));

  });
}
);

app.get("/classE", (req, res) => {

  fs.readFile("classE.json", (err, data) => {
    if (err) {
      throw err;
    }

    res.send(JSON.parse(data));

  }
  );
}
);

app.get("/classF", (req, res) => {
  fs.readFile("classF.json", (err, data) => {
    if (err) {
      throw err;
    }

    res.send(JSON.parse(data));

  });

}
);

// Patch Route to update the data of a specific user using id for each specific file

app.patch("/updateA/:id", (req, res) => {  
  let id = req.params.id;
  console.log(id);
  let data = req.body;
  console.log(data);
  fs.readFile("classA.json", (err, users) => {
    if (err) {
      throw err;
    }
    let usersData = JSON.parse(users);
    console.log(usersData);
    let index = usersData.findIndex((user) => user.id == id);
    console.log(index);
    usersData[index] = data;
    console.log(usersData);
    fs.writeFile("classA.json", JSON.stringify(usersData), (err) => {
      if (err) {
        throw err;
      }
    });
    res.send("Data updated successfully");
  });

});

app.patch("/updateB/:id", (req, res) => {
  let id = req.params.id;
  let data = req.body;
  fs.readFile("classB.json", (err, users) => {
    if (err) {
      throw err;
    }
    let usersData = JSON.parse(users);
    let index = usersData.findIndex((user) => user.id == id);
    usersData[index] = data;
    fs.writeFile("classB.json", JSON.stringify(usersData), (err) => {
      if (err) {
        throw err;
      }
    });
    res.send("Data updated successfully");
  });   
}
);

app.patch("/updateC/:id", (req, res) => { 
  let id = req.params.id;
  let data = req.body;
  fs.readFile("classC.json", (err, users) => {
    if (err) {
      throw err;
    }
    let usersData = JSON.parse(users);
    let index = usersData.findIndex((user) => user.id == id);
    usersData[index] = data;
    fs.writeFile("classC.json", JSON.stringify(usersData), (err) => {
      if (err) {
        throw err;
      }
    });
    res.send("Data updated successfully");
  });
}
);

app.patch("/updateD/:id", (req, res) => {
  let id = req.params.id;
  let data = req.body;
  fs.readFile("classD.json", (err, users) => {
    if (err) {
      throw err;
    }
    let usersData = JSON.parse(users);
    let index = usersData.findIndex((user) => user.id == id);
    usersData[index] = data;
    fs.writeFile("classD.json", JSON.stringify(usersData), (err) => {
      if (err) {
        throw err;
      }
    });
    res.send("Data updated successfully");
  });
}
);

app.patch("/updateE/:id", (req, res) => {
  let id = req.params.id;
  let data = req.body;
  fs.readFile("classE.json", (err, users) => {
    if (err) {
      throw err;
    }
    let usersData = JSON.parse(users);
    let index = usersData.findIndex((user) => user.id == id);
    usersData[index] = data;
    fs.writeFile("classE.json", JSON.stringify(usersData), (err) => {
      if (err) {
        throw err;
      }
    });
    res.send("Data updated successfully");
  });
}
);

app.patch("/updateF/:id", (req, res) => {
  let id = req.params.id;
  let data = req.body;
  fs.readFile("classF.json", (err, users) => {
    if (err) {
      throw err;
    }
    let usersData = JSON.parse(users);
    let index = usersData.findIndex((user) => user.id == id);
    usersData[index] = data;
    fs.writeFile("classF.json", JSON.stringify(usersData), (err) => {
      if (err) {
        throw err;
      }
    });
    res.send("Data updated successfully");
  });
}
);

app.listen(8080, () => {
  console.log("Server initiated ....");
});