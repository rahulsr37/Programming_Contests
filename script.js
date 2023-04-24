let url = "https://kontests.net/api/v1/all"

// cardContainer.innerHTML = "allcards";

let response = fetch(url)
response.then((v) => {
    return v.json()
}).then((contests) => {
    console.log(contests)
    ihtml = ""
    for (item in contests) {
        console.log(contests[item])
        ihtml += `
        <div class="card mx-2 my-2" style="width: 22rem;">
          <img class="card-img-top" src="https://cdn.shopify.com/s/files/1/0306/6419/6141/articles/coding_languages.png?v=1619126283" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">${contests[item].name}</h5>

            <p>Starts at : ${contests[item].start_time}</p>
            <p>Ends at : ${contests[item].end_time}</p>
            <p>Status : ${contests[item].status}</p>
            <a href="${contests[item].url}" target="_blank" class="btn btn-primary my-4">Visit Contests</a>
          </div>
        </div>
        `
    }
    document.getElementById("cardContainer").innerHTML = ihtml;
})


// console.log("JS is working!!!")