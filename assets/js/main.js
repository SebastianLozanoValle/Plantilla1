
const showHideMenu = () =>{
    const nav = document.getElementById('navegacion');
    const mobile = 'hidden';
    if (nav.classList.contains(mobile)){
        nav.classList.remove(mobile)
    }
    else{
        nav.classList.add(mobile)
    }
    console.log('se activo el boton')

}

const contactForm = document.getElementById('contact-form'),
contactMessage = document.getElementById('contact-message');

const sendEmail = (e) =>{
    e.preventDefault();

    //serviceID - templateID - #form -publickey
    emailjs.sendForm('service_2ufaels', 'template_4c1crvu', '#contact-form', 'vgO5yJZpYTrDRc7W7')
    .then(() => {
        //Show sent message
        contactMessage.textContent = 'Message sent succefully ✅'

        //Remove message after five seconds
        setTimeout(() => {
            contactMessage.textContent = '';
        }, 5000);

        //Clear input files
        contactForm.reset();
    }, () => {
        //Show error message
        contactMessage.textContent = 'Message not sent (service error) ❌'
    })
}

contactForm.addEventListener('submit', sendEmail);