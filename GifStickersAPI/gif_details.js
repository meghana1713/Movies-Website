let APIKEY = "nB7jdfgmREyBnIXmwDDxfqAr1aJRKzaA";

let detailsfn = async () => {
    let id = JSON.parse(localStorage.getItem("detailslist")); // Retrieve from localStorage
    console.log(id); // Corrected to log the ID instead of undefined `detailslist`

    try {
        let response = await fetch(`https://api.giphy.com/v1/gifs/${id}?api_key=${APIKEY}`);
        let data = await response.json(); // Convert the response to JSON
        console.log(data); // Debugging the returned data
        appendToDom(data.data); // Pass data to appendToDom
    } catch (error) {
        console.log("Error:", error);
    }
};

const appendToDom = (data) => {
    let details = document.getElementById("details"); // Reference the div
    let image = document.createElement("img");
    image.src = data.images.downsized.url; // Set image source
    details.append(image); // Append image to the div
};

