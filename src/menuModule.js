const menu = function(){
    const mainSection = document.createElement('section');
    mainSection.classList.add('main-section');
    mainSection.classList.add('main-menu');
    mainSection.innerHTML =
     `
     <div class= "menu-grid">
        <div class= "menu-item">
            <h4 class= "meni-item-h4">PASTA</h4>
            <div class = "menu-img></div>
            <div class ="menu-content">
                <h3 class ="menu-content-h3">SPAGHETTI CARBONARA</h3>
                <p  class ="menu-content-p">guanciale/pancetta tesa, eggs, grana padano, pecorino romano cheese, black pepper</p>
                <h3 class ="menu-content-price">KES 1300</h3>
            </div>
        <div>

        <div class= "menu-item">
            <h4 class= "meni-item-h4">BEEF</h4>
            <div class = "menu-img></div>
            <div class ="menu-content">
                <h3 class ="menu-content-h3">STRACCETTI ALLA ROMANA</h3>
                <p  class ="menu-content-p">thinly sliced beef fillet, rocket, cherry tomato, balsamic vinegar, grana padano</p>
                <h3 class ="menu-content-price">KES 1500</h3>
            </div>
        <div>

        <div class= "menu-item">
            <h4 class= "meni-item-h4">LASAGNE</h4>
            <div class = "menu-img></div>
            <div class ="menu-content">
                <h3 class ="menu-content-h3">CLASSIC</h3>
                <p  class ="menu-content-p">lasagne with beef bolognese sauce, mozzarella, vegetales, bechamel</p>
                <h3 class ="menu-content-price">KES 1250</h3>
            </div>
        <div>
     </div>
     `;
     document.body.append(mainSection);
};

export {menu};