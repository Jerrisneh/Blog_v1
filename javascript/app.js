const sectionBox= document.querySelector(".landing_grid")

const myEventsApi = `https://fakerapi.it/api/v1/books?_quantity=10`;
const eventHeaders = {
  method: 'get',
  headers: {
    'Content-Type': 'application/json',
    // Authorization: `Bearer ${user.token}`,
  },
};
fetch(myEventsApi, eventHeaders)
  .then(function (res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(res);
    }
  })
  .then((res) => {
    console.log(res)
    const responses = res.data

    for (const response of responses) {
      console.log(response)
      const blogContent =document.createElement("div")
      blogContent.classList.add("blog-contents")
      blogContent.style.width="100%"
      const img = document.createElement("img")
      img.src = "../javascript/faith4.png"
      img.alt = "faith's image"
      img.classList.add("blog-desk-img")
      blogContent.appendChild(img)
      const otherSects = document.createElement("div")
      otherSects.classList.add("other-sects")
      const firstPara = document.createElement("p")
      firstPara.classList.add("section")
      firstPara.textContent= response.genre
      otherSects.appendChild(firstPara)
      const secondPara = document.createElement("p")
      secondPara.classList.add("headline")
      secondPara.textContent= response.title
      otherSects.appendChild(secondPara)
      blogContent.appendChild(otherSects)
      sectionBox.appendChild(blogContent)
      const btn = document.createElement("button")
      btn.classList.add("landing_btn")
      btn.textContent = "read more"
      // btn.style.backgroundColor ="red"
      // btn.style.color ="#fff"
      // btn.style.padding ="10px 20px"
      // btn.style.margin ="10px 0"
      // btn.style.margin ="10px 0"
      // btn.style.borderRadius ="15px"
      // btn.style.border ="none"
      blogContent.appendChild(btn)
    }
    
  });




// let gridContainer = document.getElementById("landingg_page");
// // CALLING POST
// // aPPI CALL FOR POST:

// const fetchPost = async () => {
//   const apiURL = "https://jsonplaceholder.typicode.com/posts";
//   let posts = [];

//   try {
//     const data = await fetch(apiURL);
//     posts = await data.json();
//   } catch (error) {
//     console.error(error);
//   }

//   return posts;
// };

// const fetchImgs = async () => {
//   const apiURL = "https://jsonplaceholder.typicode.com/albums/1/photos";
//   let imgs = [];

//   try {
//     const data = await fetch(apiURL);
//     imgs = await data.json();
//   } catch (error) {
//     console.error(error);
//   }

//   return imgs;
// };

// const photoUrl = "https://fakerapi.it/api/v1/books?_quantity=10";

// fetch(photoUrl)
//   .then((response) => response.json())
//   .then((images) => {
//     console.log(images);
//     posts.map((post) => {
//       let singlePost = postCreation(post);
//       gridContainer.appendChild(singlePost);
//     });
//   })

//   .catch((error) => {
//     console.error("Error fetching data:", error);
//   });

// function postCreation(post) {
//   let anchorTag = document.createElement("a");
//   anchorTag.href = "../pages/blog.html";
//   let container = document.createElement("div");
//   let imgSection = document.createElement("div");
//   imgSection.classList.add("image-section");
//   let img = document.createElement("img");
//   img.src = "../javascript/faith4.png";
//   img.alt = "image of a person";
//   imgSection.appendChild(img);

//   container.appendChild(imgSection);

//   let textSection = document.createElement("div");
//   textSection.classList.add("text-section");

//   let p1 = document.createElement("p");
//   // p1.classList.add(text-[#757B83]);
//   p1.textContent = "FOOD";

//   textSection.appendChild(p1);

//   let title = document.createElement("p");
//   title.classList.add("font-bold");
//   title.textContent = post.title;

//   textSection.appendChild(title);

//   let body = document.createElement("p");
//   body.textContent = post.body;
//   body.classList.add("text");
//   textSection.appendChild(body);

//   let btn = document.createElement("button");
//   btn.classList.add(
//     "bg-[#C6000F]",
//     "text-[#ffffff]",
//     "rounded-[20px]",
//     "px-[20px]"
//   );
//   btn.textContent = "Read more";

//   textSection.appendChild(btn);

//   container.appendChild(textSection);

//   anchorTag.appendChild(container);

//   return anchorTag;
// }

// const fetchContent = async () => {
//   const contents = [];
//   const posts = await fetchPost();
//   const imgs = await fetchImgs();

//   if (condition) {
//   } else {
//   }

//   console.log("posts", posts);
//   console.log("imgs", imgs);
// };

// fetchContent();