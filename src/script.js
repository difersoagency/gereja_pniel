// Global Script

// Variable
let navBar = document.querySelector('.navigationBar');
let menuNavDesktop = document.getElementsByClassName('menuNavDesk');
let hamburgerButton = document.querySelector('.hamburgerButton');
let hamburgerMenu = document.querySelector('.hamburgerMenu');
let logoNav = document.querySelector('.nav-logo');
let body = document.body;
let navActive = false;
let onScroll = false;

let menuStrukturMobile = document.querySelector('.strukturMobile')
let subMenuStruktur = document.querySelector('.menuMajelis');
let menuPelkatMobile = document.querySelector('.pelkatMobile')
let subMenuPelkat = document.querySelector('.menuPelkat');
let menuBeritaMobile = document.querySelector('.beritaMobile')
let subMenuBerita = document.querySelector('.menuBerita');

let strukturMenuDesktop = document.querySelector('.strukturMenu');
let menuStruktur = document.querySelector('.strukturSub');
let pelkatMenuDesktop = document.querySelector('.pelkatMenu');
let menuPelkat = document.querySelector('.pelkatSub');
let beritaMenuDesktop = document.querySelector('.beritaMenu');
let menuBerita = document.querySelector('.beritaSub');

// Function

// Scroll Navbar Function
document.addEventListener('scroll', function(){
    if(window.scrollY > 50) {
        navBar.classList.add('bg-prim-white');
        navBar.classList.add('shadow-lg');
        navBar.classList.remove('mt-7');

        

        let hamburgerSpan = hamburgerButton.children;
        for(let i = 0 ; i < hamburgerSpan.length ; i++){
            hamburgerSpan[i].classList.add('bg-prim-blue');
            hamburgerSpan[i].classList.remove('bg-prim-white');
        }
        logoNav.src = '../dist/assets/img/logo1.png';
        onScroll = true;

        for(let i = 0 ; i < menuNavDesktop.length ; i++){
            menuNavDesktop[i].classList.add('text-prim-blue');
            menuNavDesktop[i].classList.remove('text-prim-white');
        }
    } else {
        navBar.classList.remove('bg-prim-white');
        navBar.classList.remove('shadow-lg');
        navBar.classList.add('mt-7');

        for(let i = 0 ; i < menuNavDesktop.length ; i++){
            menuNavDesktop[i].classList.remove('text-prim-blue');
            menuNavDesktop[i].classList.add('text-prim-white');
        }

        let hamburgerSpan = hamburgerButton.children;
        for(let i = 0 ; i < hamburgerSpan.length ; i++){
            hamburgerSpan[i].classList.remove('bg-prim-blue');
            hamburgerSpan[i].classList.add('bg-prim-white');
        }
        logoNav.src = '../dist/assets/img/logo2.png';
        onScroll = false;
    }
})

// Show Hamburger Menu Function
hamburgerButton.addEventListener('click', function(){
    hamburgerMenu.classList.toggle('hidden');
    body.classList.toggle('overflow-y-hidden');
    hamburgerMenu.classList.contains

    if(hamburgerMenu.classList.contains('hidden')){
        navActive = false;
    } else {
        navActive = true;
    }

    

    let hamburgerSpan = hamburgerButton.children;
    if (onScroll == false){
        for(let i = 0 ; i < hamburgerSpan.length ; i++){
            hamburgerSpan[i].classList.toggle('bg-prim-white');
            hamburgerSpan[i].classList.toggle('bg-prim-blue');
            
        }
        logoNav.src = navActive ? '../dist/assets/img/logo1.png' : '../dist/assets/img/logo2.png';
    }
})

// Reveal sub menu Mobile
menuStrukturMobile.addEventListener('click', function(){
    subMenuStruktur.classList.toggle('hidden');
    subMenuStruktur.classList.toggle('grid');
})

menuPelkatMobile.addEventListener('click', function(){
    subMenuPelkat.classList.toggle('hidden');
    subMenuPelkat.classList.toggle('grid');
})

menuBeritaMobile.addEventListener('click', function(){
    subMenuBerita.classList.toggle('hidden');
    subMenuBerita.classList.toggle('grid');
})

// Reveal sub menu Mobile
strukturMenuDesktop.addEventListener("click", function(){
    menuStruktur.classList.toggle('hidden');
})

pelkatMenuDesktop.addEventListener("click", function(){
    menuPelkat.classList.toggle('hidden');
})

beritaMenuDesktop.addEventListener("click", function(){
    menuBerita.classList.toggle('hidden');
})

// Ibadah Page Script

//Variabel
let tiberiasContent = document.querySelector('.tiberiasContent');
let pnielContent = document.querySelector('.pnielContent');
let keluargaContent = document.querySelector('.keluargaContent');
let perayaanContent = document.querySelector('.perayaanContent');
let ibadahButton = document.getElementsByName('ibadah'); //Get All Ibadah Choice Button on Ibadah Page/Default Value of ibadah radio button

let sektor1Content = document.querySelector('.sektor1Content');
let sektor2Content = document.querySelector('.sektor2Content');
let sektor3Content = document.querySelector('.sektor3Content');
let sektor4Content = document.querySelector('.sektor4Content');
let sektor5Content = document.querySelector('.sektor5Content');
let sektor6Content = document.querySelector('.sektor6Content');
let sektorButton = document.getElementsByName('sektor'); //Get All sektor Choice button on Majelis Section

let germasa = document.querySelector('.germasaContent');
let ppsdi = document.querySelector('.ppsdiContent');
let teologi = document.querySelector('.teologiContent');
let peg = document.querySelector('.pegContent');
let pelkes = document.querySelector('.pelkesContent');
let inforkom = document.querySelector('.inforkomContent');
let komisiButton = document.getElementsByName('komisi');



// Function
// Change Komisi Content based on which radio button is clicked
for(let i=0 ; i<komisiButton.length ; i++){
    komisiButton[i].addEventListener('click', function(){
        switch(komisiButton[i].value){
            case 'germasa':
                if(germasa.classList.contains('hidden')){
                    germasa.classList.remove('hidden');
                    ppsdi.classList.add('hidden');
                    teologi.classList.add('hidden');
                    peg.classList.add('hidden');
                    pelkes.classList.add('hidden');
                    inforkom.classList.add('hidden');
                }
                break;
            case 'ppsdi':
                if(ppsdi.classList.contains('hidden')){
                    ppsdi.classList.remove('hidden');
                    germasa.classList.add('hidden');
                    teologi.classList.add('hidden');
                    peg.classList.add('hidden');
                    pelkes.classList.add('hidden');
                    inforkom.classList.add('hidden');
                }
                break;
            case 'teologi':
                if(teologi.classList.contains('hidden')){
                    teologi.classList.remove('hidden');
                    germasa.classList.add('hidden');
                    ppsdi.classList.add('hidden');
                    peg.classList.add('hidden');
                    pelkes.classList.add('hidden');
                    inforkom.classList.add('hidden');
                }
                break;
            case 'peg':
                if(peg.classList.contains('hidden')){
                    peg.classList.remove('hidden');
                    germasa.classList.add('hidden');
                    ppsdi.classList.add('hidden');
                    teologi.classList.add('hidden');
                    pelkes.classList.add('hidden');
                    inforkom.classList.add('hidden');
                }
                break;
            case 'pelkes':
                if(pelkes.classList.contains('hidden')){
                    pelkes.classList.remove('hidden');
                    germasa.classList.add('hidden');
                    ppsdi.classList.add('hidden');
                    teologi.classList.add('hidden');
                    peg.classList.add('hidden');
                    inforkom.classList.add('hidden');
                }
                break;
            case 'inforkom':
                if(inforkom.classList.contains('hidden')){
                    inforkom.classList.remove('hidden');
                    germasa.classList.add('hidden');
                    ppsdi.classList.add('hidden');
                    teologi.classList.add('hidden');
                    peg.classList.add('hidden');
                    pelkes.classList.add('hidden');
                }
                break;
        }
    })
}

// Change Sektor Content based on which radio button is clicked
for(let i = 0 ; i < sektorButton.length; i++){
    sektorButton[i].addEventListener('click', function(){
        switch(sektorButton[i].value){
            case 'sektor1':
                if(sektor1Content.classList.contains('hidden')){
                    sektor1Content.classList.remove('hidden');
                    sektor1Content.classList.add('grid');
                    sektor2Content.classList.add('hidden');
                    sektor3Content.classList.add('hidden');
                    sektor4Content.classList.add('hidden');
                    sektor5Content.classList.add('hidden');
                    sektor6Content.classList.add('hidden');
                }
                break;

            case 'sektor2' : 
                if(sektor2Content.classList.contains('hidden')){
                    sektor2Content.classList.remove('hidden');
                    sektor2Content.classList.add('grid');
                    sektor1Content.classList.add('hidden');
                    sektor3Content.classList.add('hidden');
                    sektor4Content.classList.add('hidden');
                    sektor5Content.classList.add('hidden');
                    sektor6Content.classList.add('hidden');
                }
                break;
            
            case 'sektor3' : 
                if(sektor3Content.classList.contains('hidden')){
                    sektor3Content.classList.remove('hidden');
                    sektor3Content.classList.add('grid');
                    sektor2Content.classList.add('hidden');
                    sektor1Content.classList.add('hidden');
                    sektor4Content.classList.add('hidden');
                    sektor5Content.classList.add('hidden');
                    sektor6Content.classList.add('hidden');
                }
                break;

            case 'sektor4' : 
                if(sektor4Content.classList.contains('hidden')){
                    sektor4Content.classList.remove('hidden');
                    sektor4Content.classList.add('grid');
                    sektor2Content.classList.add('hidden');
                    sektor3Content.classList.add('hidden');
                    sektor1Content.classList.add('hidden');
                    sektor5Content.classList.add('hidden');
                    sektor6Content.classList.add('hidden');
                }
                break;
            
            case 'sektor5' : 
                if(sektor5Content.classList.contains('hidden')){
                    sektor5Content.classList.remove('hidden');
                    sektor5Content.classList.add('grid');
                    sektor2Content.classList.add('hidden');
                    sektor3Content.classList.add('hidden');
                    sektor4Content.classList.add('hidden');
                    sektor1Content.classList.add('hidden');
                    sektor6Content.classList.add('hidden');
                }
                break;

            case 'sektor6' : 
                if(sektor6Content.classList.contains('hidden')){
                    sektor6Content.classList.remove('hidden');
                    sektor6Content.classList.add('grid');
                    sektor2Content.classList.add('hidden');
                    sektor3Content.classList.add('hidden');
                    sektor4Content.classList.add('hidden');
                    sektor5Content.classList.add('hidden');
                    sektor1Content.classList.add('hidden');
                }
                break;
        }
    })
}


// Change Content based on which radio button is clicked
for(let i = 0 ; i < ibadahButton.length; i++){
    ibadahButton[i].addEventListener('click', function(){
        switch(ibadahButton[i].value){
            case 'ibadahPniel':
                if(pnielContent.classList.contains('hidden')){
                    pnielContent.classList.remove('hidden');
                    tiberiasContent.classList.add('hidden');
                    keluargaContent.classList.add('hidden');
                    perayaanContent.classList.add('hidden');
                } 
                break;
            case 'ibadahTiberias':
                if(tiberiasContent.classList.contains('hidden')){
                    pnielContent.classList.add('hidden');
                    tiberiasContent.classList.remove('hidden');
                    keluargaContent.classList.add('hidden');
                    perayaanContent.classList.add('hidden');
                } 
                break;
            case 'ibadahKeluarga':
                if(keluargaContent.classList.contains('hidden')){
                    pnielContent.classList.add('hidden');
                    tiberiasContent.classList.add('hidden');
                    keluargaContent.classList.remove('hidden');
                    perayaanContent.classList.add('hidden');
                } 
                break;
            case 'ibadahPerayaan':
                if(perayaanContent.classList.contains('hidden')){
                    pnielContent.classList.add('hidden');
                    tiberiasContent.classList.add('hidden');
                    keluargaContent.classList.add('hidden');
                    perayaanContent.classList.remove('hidden');
                } 
                break;
        }
    })
}