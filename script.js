document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const currentTheme = localStorage.getItem("theme") || "dark-mode";
    
    document.body.classList.add(currentTheme);

    themeToggle.addEventListener("click", () => {
        if (document.body.classList.contains("dark-mode")) {
            document.body.classList.replace("dark-mode", "light-mode");
            localStorage.setItem("theme", "light-mode");
        } else {
            document.body.classList.replace("light-mode", "dark-mode");
            localStorage.setItem("theme", "dark-mode");
        }
    });
});
