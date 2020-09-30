const home = function(){
    const mainSection = document.createElement('section');
    mainSection.classList.add('main-section');
    mainSection.classList.add('main-home');
    mainSection.innerHTML = 
    `<h3 class= "home-title"> Welcome To La Terrazza</h3>
    <h4 class= "home-subtitle">AUTHENTIC ITALIAN RESTAURANT IN THE HEART OF NAIROBI</h4>
     <p class= "home-content">We are  Italian Restaurant, Lounge & Art Gallery is located on the 4th floor of the Greenhouse Mall along Ngong Road. La Terrazza offers
       its guests a unique Italian experience. Guests get the opportunity to visit a beautiful art gallery and 
       at the same time get authentic and flavorful Italian cuisine paired with wine from the heart of Italy.</p>`;
    
    document.body.append(mainSection);
};

export {home};