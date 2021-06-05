const btn = document.getElementById('switch-theme');
let theme = localStorage.getItem('theme');
console.log(theme);

document.addEventListener("DOMContentLoaded", (e) => {
     if (theme == 'dark') {
          document.documentElement.setAttribute('data-theme', 'dark');
          document.getElementById("logo").src = "./assets/favicon/favicon-32x32 dark-mode.png";
          document.getElementById("switch-theme").checked = true;
          localStorage.setItem('theme', 'dark');          
     }
     else {
          document.documentElement.removeAttribute('data-theme');
          document.getElementById("logo").src = "./assets/favicon/favicon-32x32.png";
          document.getElementById("switch-theme").checked = false;
          localStorage.setItem('theme', 'light');
     }
});

btn.addEventListener('click', (e) => {     
     if (theme == 'dark') {
          document.documentElement.removeAttribute('data-theme');
          document.getElementById("logo").src = "./assets/favicon/favicon-32x32.png";
          localStorage.setItem('theme', 'light');
     }
     else {
          document.documentElement.setAttribute('data-theme', 'dark');
          document.getElementById("logo").src = "./assets/favicon/favicon-32x32 dark-mode.png";
          localStorage.setItem('theme', 'dark');
     }
})