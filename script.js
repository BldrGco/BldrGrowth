console.log("Script loaded");

// Existing statements fade-in functionality
document.addEventListener("DOMContentLoaded", function() {
    const statements = document.getElementById("statements");
    console.log("Statements element found:", statements);
    if (statements) {
        setTimeout(() => {
            statements.classList.add("visible");
            console.log("Adding visible class for fade-in");
        }, 2000);
    }

    // Fetch Substack RSS feed and display posts
    fetchSubstackPosts();
});

function fetchSubstackPosts() {
    const rssUrl = "https://theintermediator.substack.com/feed";
    const proxyUrl = `https://corsproxy.io/?${encodeURIComponent(rssUrl)}`;
    const grid = document.getElementById("substack-posts-grid");

    if (!grid) {
        console.error("Substack posts grid element not found");
        return;
    }

    fetch(proxyUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            // Parse the XML data
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(data, "text/xml");
            const items = xmlDoc.querySelectorAll("item");

            // Get the 6 most recent posts
            const recentPosts = Array.from(items).slice(0, 6);

            // Clear the grid
            grid.innerHTML = "";

            // Default image if thumbnail is not available
            const defaultImage = "https://via.placeholder.com/200x200.png?text=No+Image";

            recentPosts.forEach(item => {
                const title = item.querySelector("title").textContent;
                const link = item.querySelector("link").textContent;

                // Try to find the thumbnail image (social preview image)
                let thumbnail = defaultImage;
                const enclosure = item.querySelector("enclosure");
                const mediaThumbnail = item.querySelector("thumbnail");

                if (enclosure && enclosure.getAttribute("type").startsWith("image")) {
                    thumbnail = enclosure.getAttribute("url");
                } else if (mediaThumbnail) {
                    thumbnail = mediaThumbnail.getAttribute("url");
                } else {
                    // Fallback: Try to extract an image from the description (encoded HTML)
                    const description = item.querySelector("description").textContent;
                    const tempDiv = document.createElement("div");
                    tempDiv.innerHTML = description;
                    const img = tempDiv.querySelector("img");
                    if (img && img.src) {
                        thumbnail = img.src;
                    }
                }

                // Create the post element
                const postDiv = document.createElement("div");
                postDiv.className = "substack-post";
                postDiv.innerHTML = `
                    <a href="${link}" target="_blank">
                        <img src="${thumbnail}" alt="${title}">
                        <h3>${title}</h3>
                    </a>
                `;
                grid.appendChild(postDiv);
            });
        })
        .catch(error => {
            console.error("Error fetching Substack RSS feed:", error);
            grid.innerHTML = "<p>Unable to load posts. Please try again later.</p>";
        });
}
