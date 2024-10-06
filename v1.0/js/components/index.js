let html = `
<div id="root">
    <!-- NAVBAR -->
        <div id='navbar'></div>
    <!-- NAVBAR -->

    <!-- MAIN -->
    <!-- MAIN -->

    <!-- FOOTER -->
        <div id="footer"></div>
    <!-- FOOTER -->
</div>

<script src="js/navbar.js"></script>

<style>
    @font-face {
        font-family: "Lovely Home";
        src: local('Lovely Home'), url("./LovelyHome-9aBZ.ttf") format('truetype');
    }
</style>
`;

let body = document.getElementsByTagName('body')[0];
body.innerHTML = html;

