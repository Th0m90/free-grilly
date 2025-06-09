document.addEventListener("DOMContentLoaded", () => {
    const themeLink = document.getElementById("theme-link");
    const toggleBtn = document.getElementById("theme-toggle");
  
    if (!themeLink || !toggleBtn) return;
  
    const savedTheme = localStorage.getItem("grilly-theme") || "light";
    setTheme(savedTheme);
  
    toggleBtn.addEventListener("click", () => {
      const current = themeLink.getAttribute("href").includes("dark") ? "dark" : "light";
      const newTheme = current === "light" ? "dark" : "light";
      setTheme(newTheme);
    });
  
    function setTheme(name) {
      themeLink.setAttribute("href", `grilly-ui/themes/theme-${name}.css`);
      localStorage.setItem("grilly-theme", name);
      toggleBtn.textContent = name === "light" ? "🌙 Donker" : "☀️ Licht";
    }
  });
  
