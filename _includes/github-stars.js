document.addEventListener("DOMContentLoaded", function() {
    const starsElement = document.getElementById("github-stars");
    const repoUrl = "https://api.github.com/repos/0917Ray/Reading_Notes";

    fetch(repoUrl)
        .then(response => response.json())
        .then(data => {
            const starsCount = data.stargazers_count;
            starsElement.textContent = starsCount;
        })
        .catch(error => {
            starsElement.textContent = "Error loading stars";
            console.error("Error fetching GitHub stars:", error);
        });
});
