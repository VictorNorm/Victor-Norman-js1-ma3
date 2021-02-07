// Question 2 ------------------------------------------

const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-ratings";

const container = document.querySelector(".html");
const loading = document.querySelector(".loading")

async function apiCall() {

    try {
        
        const response = await fetch(url);
        const results = await response.json();

        loading.innerHTML = "";

        for (let i = 0; i < results.results.length; i++) {

            container.innerHTML +=
                `<div>Name: ${results.results[i].name}.
                 Rating: ${results.results[i].rating}.
                 Number of tags: ${results.results[i].tags.length}.</div>
                `
            if (i === 8) {
                break;
            }
        }
    } catch (error) {
        console.log("An error has occured");
        loading.innerHTML = "An error occured.";
    }
}

apiCall();