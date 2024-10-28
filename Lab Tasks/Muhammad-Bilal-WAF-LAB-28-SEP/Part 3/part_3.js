/* Your program should create and call six to seven functions. Name your functions as signup, 
sendVerificationCode, signin, getData, checkEmail, composeEmail, and sendEmail. Create 
some delay in each function using the asynchronous method setTimeout function. These 
functions should have some console output messages displaying these tasks completion 
messages. Call these functions in the following order with the delay mentioned against each 
function and the last line of code after these function calls should be console.log(“All tasks 
completed…..”) 
signup – delay of 2000 milliseconds = 2 seconds 
sendVerificationCode – delay of 4000 milliseconds = 4 seconds 
signin – delay of 3500 milliseconds = 3.5 seconds
getData – delay of 4500 milliseconds = 4.5 seconds` 
checkEmail – delay of 1500 milliseconds = 1.5 seconds 
composeEmail – delay of 2000 milliseconds = 2 seconds 
sendEmail – delay of 3000 milliseconds = 3 seconds 
i. First, call these functions in above mentioned order with the given delays and 
show the order of execution. See what order is followed. 
ii. You should now use callbacks to execute the functions in the given order so that 
the order of events is intact. Again, call these functions in above mentioned order 
with the given delays and show the order of execution. See what order is followed. 
iii. Now you should use promises to do part ii. Again, call these functions in above 
mentioned order with the given delays and show the order of execution. See what 
order is followed. 
iv. Now use async wait to do part ii or part iii. Again, call these functions in above 
mentioned order with the given delays and show the order of execution. See what 
order is followed. */


function signup(callback) {
    setTimeout(() => {
        console.log("Signup completed");
        callback();
    }, 2000);
}

function sendVerificationCode(callback) {
    setTimeout(() => {
        console.log("Verification code sent");
        callback();
    }, 4000);
}

function signin(callback) {
    setTimeout(() => {
        console.log("Signin completed");
        callback();
    }, 3500);
}

function getData(callback) {
    setTimeout(() => {
        console.log("Data received");
        callback();
    }, 4500);
}

function checkEmail(callback) {        
    setTimeout(() => {
        console.log("Email checked");
        callback();
    }, 1500);
}

function composeEmail(callback) {
    setTimeout(() => {
        console.log("Email composed");
        callback();
    }, 2000);
}

function sendEmail(callback) {
    setTimeout(() => {
        console.log("Email sent");
        callback();
    }, 3000);
}

signup(() => {
    sendVerificationCode(() => {
        signin(() => {
            getData(() => {
                checkEmail(() => {
                    composeEmail(() => {
                        sendEmail(() => {
                            console.log("All tasks completed.....");
                        });
                    });
                });
            });
        });
    });
});

// Output:
// Signup completed
// Verification code sent
// Signin completed
// Data received
// Email checked
// Email composed
// Email sent
// All tasks completed.....

