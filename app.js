//JavaScript File app.js

// Promises

function savetoDb(data, success, failure) {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;

    if (internetSpeed > 4) {
        success();
    }
    else {
        failure();
    }
    
}

// callback Hell
savetoDb(
    "apnaCollege", () => {
    console.log("Success: your data was saved.");
    savetoDb(
        "hello world", () => {
        console.log("success2: data2 saved.");
        savetoDb(
            "Anuj", () => {
            console.log("success3: data3 saved.");
        }, () => {
            console.log("failure3: weak connection.");
        });
    }, () => {
        console.log("failure2: data2 not saved.");
    });
}, ()=> {
    console.log("Failure: weak connection, data not saved.");
});

