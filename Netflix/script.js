// let buttons=document.querySelectorAll("svg");
// buttons.forEach(function (button) {
//     button.addEventListener("click", function (e) {
//         if(e.target.id==='svg1')
//         {
//             let svgIcon = document.getElementById("svg1");
//             svgIcon.classList.toggle("rotated");
//             let block=document.getElementById("content1");
//             block.classList.toggle("block");
//             const paragraph = document.createElement("p");
//             paragraph.innerText = svgId === "svg1"
//                 ? "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices."
//                 : "Netflix has different subscription plans depending on the region. Plans offer different streaming qualities and allow multiple users.";


//         }
//         if(e.target.id==='svg2')
//             {
//                 let svgIcon = document.getElementById("svg2");
//                 svgIcon.classList.toggle("rotated");
//             }
//             if(e.target.id==='svg3')
//                 {
//                     let svgIcon = document.getElementById("svg3");
//                     svgIcon.classList.toggle("rotated");
//                 }
//                 if(e.target.id==='svg4')
//                     {
//                         let svgIcon = document.getElementById("svg4");
//                         svgIcon.classList.toggle("rotated");
//                     }
//                     if(e.target.id==='svg5')
//                         {
//                             let svgIcon = document.getElementById("svg5");
//                             svgIcon.classList.toggle("rotated");
//                         }
//                         if(e.target.id==='svg6')
//                             {
//                                 let svgIcon = document.getElementById("svg6");
//                                 svgIcon.classList.toggle("rotated");
//                             }

        
//     });
// });

// document.querySelectorAll("svg").forEach(function (button) {
//     button.addEventListener("click", function (e) {
//         let svgId = e.target.id;
//         let contentId = "content" + svgId.replace("svg", ""); // Match corresponding content div
//         let content = document.getElementById(contentId);

//         // if (!content) {
//         //     console.error("Content div not found for", svgId);
//         //     return;
//         // }

//         let svgIcon = document.getElementById(svgId);
//         svgIcon.classList.toggle("rotated");
//         content.classList.toggle("block");

//         // // Remove paragraph if already added
//         // let existingParagraph = content.querySelector("p");
//         // if (existingParagraph) {
//         //     existingParagraph.remove();
//         // } else {
//             const paragraph = document.createElement("p");
//             paragraph.innerText = svgId === "svg1"
//                 ? "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices."
//                 : "Netflix has different subscription plans depending on the region. Plans offer different streaming qualities and allow multiple users.";

//             content.appendChild(paragraph);
//         // }
//     });
// });

// Select all SVG icons
document.querySelectorAll(".plus-icon").forEach(function (button) {
    button.addEventListener("click", function (e) {
        // Identify the clicked SVG icon
        const svgId = e.target.id;

        // Match the corresponding content div
        const contentId = "content" + svgId.replace("svg", "");
        const content = document.getElementById("content1");

        // Toggle visibility and rotation
        const svgIcon = document.getElementById(svgId);
        svgIcon.classList.toggle("rotated");
        content.classList.toggle("block");

        // Collapse other sections
        document.querySelectorAll(".content").forEach(function (section) {
            if (section.id !== contentId) {
                section.classList.remove("block");
            }
        });

        document.querySelectorAll(".plus-icon").forEach(function (icon) {
            if (icon.id !== svgId) {
                icon.classList.remove("rotated");
            }
        });
    });
});

