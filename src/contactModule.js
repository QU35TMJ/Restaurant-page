const contact = function (){
    const mainSection = document.createElement('section');
    mainSection.classList.add('main-section');
    mainSection.classList.add('main-contact');
    mainSection.innerHTML = 
    `
    
    <form class= form>
        <h4 class= "form-header">Contact Us </h4>
        <label class= "form-label">Name:</label>
        <input type="text" id="name">
        <label class= "form-label">Email:</label>
        <input type="email" id="email">
        <label class= "form-label">Message:</label>
        <textarea id="msg">Enter message here...</textarea>
        <button class="formbtn">Send</button>

    </form>

    <div class= "contact-info">
    <h4 class= "details">Contact Details</h4>
    <p>Email: laterrazzanrb@gmail.com</p>
    <p>Phone Number: +254 748 101 503</p>
    
    <h4 class= "hrs">Opening Hours</h4>
    <p>Monday – Sunday&nbsp&nbsp&nbsp12:00 PM – 8:00 PM</p>
    </div>

    `;
    document.body.append(mainSection);
};
export {contact};