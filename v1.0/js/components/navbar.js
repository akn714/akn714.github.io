let html = `
<a href='./index.html' class="navbar-profile" style="text-decoration: none">
    <!-- <img  class="navbar-profile-pic" src="./user-profile.png" alt="" /> -->
    <div class="title">Adarsh Kumar</div>
</a>
<div class='navbar-links'>
    <button class="burger" onclick=extend()>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
    </button>
    <a href="./about.html" class="about">About</a>
    <a href="./skills.html" class="skills">Skills</a>
    <a href="./projects.html" class="projects">Projects</a>
    <a href="adarsh cv.pdf" class="download-cv">Resume</a>
    <a href="./contact.html" class="contact">Contact Me</a>
</div>`;

let navbar = document.getElementById('navbar');
navbar.innerHTML = html;


