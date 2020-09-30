const nav = (function(){
    const header = document.createElement('header');
    header.classList.add('header');
    header.innerHTML = 
    `<h1 class="h1"><a href="#" class="logo">La Terrazza</a></h1>
    <ul class="nav-list header-nav">
        <li class="nav-list-item"><a href="#" class="nav-list-link" data-content="home">Home</a></li>
        <li class="nav-list-item"><a href="#" class="nav-list-link" data-content="menu">Menu</a></li>
        <li class="nav-list-item"><a href="#" class="nav-list-link" data-content="contact">Contact</a></li>
    </ul>`;
    content.append(header);

})();