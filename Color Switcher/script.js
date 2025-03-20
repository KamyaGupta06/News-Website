// let buttons=document.querySelectorAll(".button");
// const body=document.querySelector("body");
// buttons.forEach(function(button){
//     button.addEventListener("click",function(e)
//    {
//     if(e.target.id==='gray')
//     {
//         body.style.backgroundColor='grey';

//     }
//     if(e.target.id==='blue')
//     {
//         body.style.backgroundColor=e.target.id;

//     }
//     if(e.target.id==='white')
//         {
//             body.style.backgroundColor=e.target.id;

//         }
//     if(e.target.id==='yellow')
//             {
//                 body.style.backgroundColor=e.target.id;
//             }
// });
    
// });

let buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

// Add event listeners to each button
buttons.forEach(function (button) {
    button.addEventListener("click", function (e) {
        // Change the body's background color based on the button's ID
        body.style.backgroundColor = e.target.id;
        document.querySelector("#nav").classList.add("#nav");
    });
});

