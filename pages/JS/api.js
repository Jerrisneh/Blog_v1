const URL = "https://fakerapi.it/api/v1/books?_quantity=10"

fetch(URL)
.then(res => res.json())
.then(data => {
 console.log(data)
})