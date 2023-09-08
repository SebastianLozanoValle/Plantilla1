
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