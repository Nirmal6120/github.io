// Author Name: Nirmal Patel, Jalpan Patel
// Group 9
// Date: 21/2/25
// Description: This is the gallery javascript file for the website which shows
// the picture with desciption about the picture which we use in assignment

// it will load the function
document.addEventListener("DOMContentLoaded", function () {
    // fetch is used to fetch data from the user
    fetch("../data/gallery.json")
        .then(response => response.json())
        .then(images => {
            // it uses container which will help to display gallary images
            const galleryContainer = document.getElementById("gallery-container");

            // it will uses for loop to loop through the data for JSON file
            images.forEach(image => {
                const colDiv = document.createElement("div");
                colDiv.className = "col-md-4 mb-4";

                const link = document.createElement("a");
                link.href = image.src;
                link.setAttribute("data-lightbox", "gallery");
                link.setAttribute("data-title", image.title);
                link.setAttribute("data-bs-toggle", "modal");
                link.setAttribute("data-bs-target", "#imageModal");
                link.addEventListener("click", function() {
                    // Set the modal content when the image is clicked
                    // it will Set the modal title to the image title
                    document.getElementById("imageModalLabel").textContent = image.title;
                    document.getElementById("modal-image").src = image.src;
                    document.getElementById("image-description").textContent = `Description: ${image.title}`;
                });

                const img = document.createElement("img");
                img.src = image.src;
                img.alt = image.alt;
                img.className = "img-fluid gallery-img";

                link.appendChild(img);
                colDiv.appendChild(link);
                galleryContainer.appendChild(colDiv);
            });
        })
        // it will Handle any errors that occur while fetching or processing the JSON data
        .catch(error => console.error("Error loading gallery images:", error));
});
