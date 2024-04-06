const sectionBox= document.querySelector(".landing_grid")

const myEventsApi = `https://fakerapi.it/api/v1/books?_quantity=20`;
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
    }
    
  });


