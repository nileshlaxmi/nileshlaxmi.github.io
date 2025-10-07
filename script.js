(function () {
    const root = document.documentElement;
    const toggle = document.getElementById("toggleTheme");
    const resumeBtn = document.getElementById("downloadResume");

    const saved = localStorage.getItem("theme");
    const prefersDark =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;
    function applyTheme(theme) {
        if (theme === "dark") root.setAttribute("data-theme", "dark");
        else root.removeAttribute("data-theme");
        toggle.setAttribute(
            "aria-pressed",
            theme === "dark" ? "true" : "false"
        );
    }
    if (saved) applyTheme(saved);
    else if (prefersDark) applyTheme("dark");
    else applyTheme("light");

    toggle.addEventListener("click", () => {
        const current =
            root.getAttribute("data-theme") === "dark" ? "dark" : "light";
        const next = current === "dark" ? "light" : "dark";
        applyTheme(next);
        localStorage.setItem("theme", next);
    });

    resumeBtn.addEventListener("click", (e) => {
        e.preventDefault();
        const url =
            "/Nilesh_Laxmi_Complete_Resume_CrossPlatform_UI_Lead.docx";
        window.open(url, "_blank");
    });
})();