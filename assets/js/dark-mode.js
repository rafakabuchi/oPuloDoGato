const btn = document.getElementById('switch-theme');
localStorage.setItem('theme','light');
btn.addEventListener('click',(e)=>{
     let theme = localStorage.getItem('theme');
     console.log(theme);
     if(theme == 'light' || theme ==''){
          document.documentElement.setAttribute('data-theme','dark');
          document.getElementById("logo").src="./assets/favicon/favicon-32x32 dark-mode.png";
          localStorage.setItem('theme','dark');
     }
     else {
          document.documentElement.removeAttribute('data-theme');          
          document.getElementById("logo").src="./assets/favicon/favicon-32x32.png";
          localStorage.setItem('theme','light');
     }
})