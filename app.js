//JavaScript File app.js

// Callback Hell

h1 = document.querySelector("h1");


setTimeout(() => {
    h1.style.color = "red";
}, 1000);

setTimeout(() => {
    h1.style.color = "orange";
}, 2000);

setTimeout(() => {
    h1.style.color = "green";
}, 3000);

