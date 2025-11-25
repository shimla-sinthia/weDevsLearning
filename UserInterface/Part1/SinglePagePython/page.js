// Load a specific section
function showSection(number) {
    fetch(`sections/${number}.txt`)
        .then(response => response.text())
        .then(text => {
            console.log("Loaded:", text);
            document.querySelector("#content").innerHTML = text;
        });
}

document.addEventListener("DOMContentLoaded", () => {
    
    // When clicking a button
    document.querySelectorAll("button").forEach(button => {
        button.onclick = function () {
            const section = this.dataset.section;

            // Push URL history
            history.pushState(
                { section: section }, 
                "", 
                `#section${section}`
            );

            showSection(section);
        };
    });

    // 🔥 Load section if page is opened with a hash
    if (location.hash.startsWith("#section")) {
        const sectionNumber = location.hash.replace("#section", "");
        showSection(sectionNumber);
    }
});

// 🔥 Handle back/forward browser navigation
window.onpopstate = function (event) {
    if (event.state && event.state.section) {
        showSection(event.state.section);
    } else {
        document.querySelector("#content").innerHTML =
            "Click a section to load content...";
    }
};
