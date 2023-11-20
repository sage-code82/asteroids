console.log("hello there!");

const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

context.fillRect(0, 0, canvas.width, canvas.height);
context.fillStyle = "black";
