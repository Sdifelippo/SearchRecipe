let container = document.querySelector(".container");
let search = document.querySelector(".searchbar");


fetch("https://crossorigin.me/http://www.recipepuppy.com/api/?q=" + (recipe.search.value))

    .then(function(obj) {
        return;
    })
    response.json().then(function(object) {
        console.log(object.title);
          console.log(object.results);

      info.innerHTML += `
        <h2>The Info<h2>
          ${results.title}
            `
  })
  .then(function(obj){
    console.log(obj)

  });
