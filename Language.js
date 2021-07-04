const datareload = document.querySelectorAll("[data-reload]");

//CHANGE FONT SIZE and WIDTH SCREEN on mobile

if(window.location.hash === '#de' && window.innerWidth <= 767){

    //GET HEADER

    //GET TEXT
    heroSubtitle.style.width = '585px';
    heroSubtitle.style.width = '585px';
    recentDownload.style.width = '250px';
    recentDownloadSecond.style.width = '250px';


    

    
}

//CHANGE FONT SIZE and WIDTH SCREEN on tablet

if(window.location.hash === '#de' && window.innerWidth >= 768){

    //GET HEADER

    //GET TEXT
    heroSubtitle.style.width = '585px';
    heroSubtitle.style.width = '585px';
    btnContainer.style.width = '458px'
    recentDownload.style.width = '48%';
    recentDownloadSecond.style.width = '48%';
    scrollicon.style.marginLeft = '60px'
    

    
}

//CHANGE FONT SIZE and WIDTH SCREEN on desktop


if(window.location.hash === '#de' && window.innerWidth >= 1024){
    //GET TEXT
    
    heroSubtitle.style.width = '830px'
    btnContainer.style.width = '690px'
    

    
}

//CHANGE FONT SIZE and WIDTH SCREEN on bigger desktop


if(window.location.hash === '#de' && window.innerWidth >= 1600){
    //GET TEXT

    myName.style.width = '830px'
    heroSubtitle.style.width = '850px'
    btnContainer.style.width = '817px'


    
    

    
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
        'heroSubtitle' : 'A frontend web developer',
        'recentProjects' : 'RECENT PROJECTS',
        'downloadResume' : 'DOWNLOAD RESUME',
        'scrolls' : 'scroll down'
    },
    de:{
        'home' : 'Startseite',
        'project' : 'Projekte',
        'about' : 'über',
        'contact' : 'Kontakt',
        
        
        

        //HERO
        'hello' : 'Hallo Da!',
        'myName' : 'Ich bin Adeola',
        'heroSubtitle' : 'Ein Frontend-Webentwickler',
        'recentProjects' : 'NEUESTE PROJEKTE',
        'downloadResume' : 'DOWNLOAD LEBENSLAUF',
        'scrolls' : 'nach unten scrollen'
        
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
        recentProjects.textContent = language.de.recentProjects;
        downloadResume.textContent = language.de.downloadResume;
        scrolls.textContent = language.de.scrolls




        
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