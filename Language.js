const datareload = document.querySelectorAll("[data-reload]");

//CHANGE FONT SIZE and WIDTH SCREEN on tablet

if(window.location.hash === '#de' && window.innerWidth >= 768){

    //GET HEADER

    //GET TEXT
    heroSubtitle.style.width = '585px'
    heroSubtitle.style.width = '585px'
    

    
}

//CHANGE FONT SIZE and WIDTH SCREEN on desktop


if(window.location.hash === '#de' && window.innerWidth >= 1024){
    //GET TEXT
    heroSubtitle.style.width = '585px'
    heroSubtitle.style.width = '830px'
    

    
}

const language = {
    eng:{
        'home' : 'Home',
        'project' : 'project',
        'about' : 'about',
        'contact' : 'contact',

        //HERO

        'hello' : 'Hello there!',
        'myName' : 'I am Adeola',
        'heroSubtitle' : 'A frontend web developer'
    },
    de:{
        'home' : 'Startseite',
        'project' : 'Projekte',
        'about' : 'über',
        'contact' : 'Kontakt',
        

        //HERO
        'hello' : 'Hallo Da!',
        'myName' : 'Ich bin Adeola',
        'heroSubtitle' : 'Ein Frontend-Webentwickler'
    }
}

if(window.location.hash){
    if(window.location.hash === '#de'){

        //NAVBAR
        home.textContent = language.de.home;
        project.textContent = language.de.project;
        about.textContent = language.de.about;
        contact.textContent = language.de.contact;

        //  HERO

        hello.textContent = language.de.hello;
        myName.textContent = language.de.myName;
        heroSubtitle.textContent = language.de.heroSubtitle;




        
        //CHANGE LANG TEXT
        selectedlang.textContent = 'Deutsch';

        //flag change
        flagimage.src = 'https://www.countryflags.io/de/flat/32.png'

    }


}

datareload.forEach(anchortag => {

    anchortag.onclick = function(){
        setTimeout(() => {
            location.reload()
        }, 100)
        
    }
})