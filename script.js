// Confirm Button Click Effect
document.getElementById("confirmButton").addEventListener("click", function (event) {
    const button = this;
    button.classList.add("active");
    setTimeout(() => button.classList.remove("active"), 300);
});

// Redirection Logic
function redirectUser() {
    var code = document.getElementById("codeInput").value.trim();

    var redirectionMap = {
        "A1203": { name: "Abhishek", link: "https://hpkingsprojectabhishek.netlify.app" },
        "K843": { name: "Kulwinder", link: "https://hpkingsprojectkulwinder.netlify.app" },
        "A399": { name: "KPR Gamer", link: "https://hpkingprojectkpr.netlify.app" },
        "186": { name: "Abhiahek Katnoria", link: "https://hpkingsprojectabhishekk.netlify.app" },
        "S808": { name: "Sukhamrit", link: "https://hpkingsprojectsukhamrit.netlify.app" }
    };

    if (redirectionMap[code]) {
        var userData = redirectionMap[code];

        document.getElementById("redirectOverlay").style.display = "flex";
        document.getElementById("redirectMessage").textContent = `Welcome, ${userData.name}! Redirecting...`;

        setTimeout(() => {
            window.location.href = userData.link;
        }, 3000);
    } else {
        var errorPopup = document.getElementById("errorPopup");
        errorPopup.style.display = "block";
        setTimeout(() => errorPopup.style.display = "none", 2000);
    }
}