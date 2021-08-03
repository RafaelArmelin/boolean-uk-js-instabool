// write your code here
const qlqcoisa = []

fetch("http://localhost:3000/images")
  .then((res) => res.json())
  .then(images => {
    console.log("Inside GET Fetch: ", images)

    //do something with products
    // renderImagesList()
    renderPosts(images);

})


// // input: an array of images
// // ouput: -

// function renderImagesList(images) {
//     console.log("Inside renderImagesList: ", images)
  
//     // Write code here...
//   }
  
//   // renderImageCard()
  
//   // input: an object that represent an image
//   // output: an <article> element
  
//   function renderImageCard(image) {
//     console.log("Inside renderImageCard", image)
  
    // Write code here
 // }
///////////////////////////////////////////////////////////////
//  <section class="image-container">
//   <article class="image-card">
//     <h2 class="title">Title of image goes here</h2>
//     <img src="./assets/image-placeholder.jpg" class="image" />
//     <div class="likes-section">
//       <span class="likes">0 likes</span>
//       <button class="like-button">♥</button>
//     </div>
//     <ul class="comments">
//       <li>Get rid of these comments</li>
//       <li>And replace them with the real ones</li>
//       <li>From the server</li>
//     </ul>
//     <form class="comment-form">
//       <input
//         class="comment-input"
//         type="text"
//         name="comment"
//         placeholder="Add a comment..."
//         />
//       <button class="comment-button" type="submit">Post</button>
//     </form>
//   </article>
//   <!-- More cards like the on above -->
// </section>
///////////////////////////////////////////////////////////////

    

//MY WORK
let dogCardEl = document.querySelector(".image-container");

function renderPosts(dogCards){
    console.log("dogCards: ", dogCards);
    for (let i=0; i < dogCards.length; i++){

        let articleEl = document.createElement("article");
        articleEl.className = "image-card";
        dogCardEl.append(articleEl);
      
        let headerEl = document.createElement("h2");
        headerEl.className = "title";
        headerEl.innerText = `${dogCards[i].title}`;
        articleEl.append(headerEl);

        let imageEl = document.createElement("img");
        imageEl.className = "image";
        imageEl.src = `${dogCards[i].image}`;
        imageEl.setAttribute("alt", dogCards[i].title);
        articleEl.append(imageEl);

        let divEl = document.createElement("div");
        divEl.className = "likes-section";
        articleEl.append(divEl);

        let spanEl = document.createElement("span");
        spanEl.className = "likes";
        spanEl.innerText = "0 likes";
        divEl.append(spanEl);

        let likesButtonEL = document.createElement("button");
        likesButtonEL.className = "like-button";
        likesButtonEL.innerText = "♥";
        divEl.append(likesButtonEL);

        likesButtonEL.addEventListener("click", () => {
            console.log("clicked! ");
            
            // const productToUpdate = {
            //     "likes"
            //   };
              
            //   const fetchOptions = {
            //     method: "PATCH",
            //     headers: {
            //       "Content-Type": "application/json"
            //     },
            //     body: JSON.stringify(productToUpdate)
            //   };
              
            //   fetch("http://localhost:3000/images", fetchOptions)
            //     .then((res) => res.json())
            //     .then((updatedProduct) => {
            //       console.log("Inside PATCH Fetch: ", updatedProduct);
              
            //       // Do something with updatedProduct
            //     });
        } )


        let listEl = document.createElement("ul");
        listEl.className = "comments";
        articleEl.append(listEl);
        console.log(dogCards[i]);

        for(let j = 0; j < dogCards[i].comments.length; j++ ){
            console.log(dogCards[i].comments[j]);
            
            let listItemEl = document.createElement("li");
            listItemEl.innerText = `${dogCards[i].comments[j].content}`
            listEl.append(listItemEl);
        }

        let formEl = document.createElement("form");
        formEl.className = "comment-form";
        articleEl.append(formEl);

        let inputEL = document.createElement("input");
        inputEL.className = "comment-input";
        inputEL.setAttribute("type", "text");
        inputEL.setAttribute("name", "comment");
        inputEL.setAttribute("placeholder", "Add a comment...");
        formEl.append(inputEL);

        let commentButtonEL = document.createElement("button");
        commentButtonEL.className = "comment-button";
        commentButtonEL.setAttribute("type", "submit");
        commentButtonEL.innerText = "Post";
        formEl.append(commentButtonEL);
    }
}

// const  test = renderPosts(dogCards);
// console.log("funcao: ", test);


