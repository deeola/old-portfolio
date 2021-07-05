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
    scrollicon.style.marginLeft = '60px';
    
    

    
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
        'scrolls' : 'scroll down',


        //PROJECT

        'projectSection' : 'projects',
        'projectSubheading' : 'Here are some of my projects, all responsive.',
        'audioLive' : 'Live Site',
        'audioRepo' : 'View Repo',
        'audioFirstPara' : 'Audiophile is an e-commerce website. It is a frontend mentor guru challenge.  Users are able to add/remove items from cart, edit product quantities in cart, receive form validations if fields are missed or incorrect during checkout and receive an order confirmation modal after checking out with an order summary.',
        'audioSecondPara' : 'Made using REACT, REACT Hooks and styled using SASS.For state management, useContext API was used and data was fetched from a json file.',
        'archFirstPara' : "Archstudio is a multi-page website i created. Users are able to view  optimal layout for each page depending on their device's screen sizes and also view actual locations on the contact page map.",
        'archSecondPara' : 'I created this site with  REACT, SASS and the state was managed with useContext API and Google Map API.',
        'heritageFirstPara' : 'This is a cultural heritage website i created to help people learn more about their unesco heritage sites around the world.Users can save some of these sites to their visit list or bucketlist. ',
        'heritageSecondPara' : 'Made using REACT, SASS and GSAP. useContext API was used  for the state management, data was fetched from a json file and Google maps API was used to display geolocations in sites section. Graphics and layout designs was  created using figma.'
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
        'scrolls' : 'nach unten scrollen',

        //PROJECTS

        'projectSection' : 'PROJEKTE',
        'projectSubheading' : 'Hier sind einige meiner Projekte, die alle ansprechbar sind.',
        'audioLive' : 'Live-Seite',
        'audioRepo' : 'Ansicht Repo',
        'audioFirstPara' : 'Audiophile ist eine E-Commerce-Website. Es ist eine Frontend-Mentor guru Herausforderung.  Benutzer können Artikel aus dem Warenkorb hinzufügen/entfernen Warenkorb hinzufügen/entfernen, Produktmengen im Warenkorb bearbeiten, Formularvalidierungen erhalten Formularvalidierungen erhalten, wenn Felder während des Checkouts fehlen oder falsch sind, und ein Bestätigungsmodal mit einer Zusammenfassung der Bestellung.',
        'audioSecondPara' : 'Hergestellt mit REACT, REACT Hooks und gestylt mit SASS.Für das State Verwaltung wurde die useContext API verwendet und die Daten wurden aus einer json Datei geholt.',
        'archFirstPara' : 'Archstudio ist eine mehrseitige Website, die ich erstellt habe. Die Benutzer können das optimale Layout für jede Seite abhängig von der Bildschirmgröße ihres Geräts anzeigen und auch die aktuellen Standorte auf der Karte der Kontaktseite sehen. ',
        'archSecondPara' : 'Ich habe diese Seite mit REACT, SASS erstellt und der Zustand wurde mit useContext API und Google Map API verwaltet.',
        'heritageFirstPara' : 'Dies ist eine Website für kulturelles Erbe, die ich erstellt habe, um Menschen zu helfen, mehr über ihre Unesco-Kulturerbestätten auf der ganzen Welt zu erfahren.Benutzer können einige dieser Stätten auf ihrer Besuchsliste oder Bucketlist speichern. ',
        'heritageSecondPara' : 'Erstellt mit REACT, SASS und GSAP. useContext API wurde für die Zustandsverwaltung verwendet, Daten wurden aus einer json-Datei geholt und Google Maps API wurde verwendet, um Geolocations im Bereich Sites anzuzeigen. Grafiken und Layout-Designs wurden mit figma erstellt.'
    
        
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

        //PROJECT SECTION

        projectSection.textContent = language.de.projectSection;
        projectSubheading.textContent = language.de.projectSubheading;

        //AUDIOPHILE

        audioFirstPara.textContent = language.de.audioFirstPara;
        audioSecondPara.textContent = language.de.audioSecondPara;

        //ARCHSTUDIO

        archFirstPara.textContent = language.de.archFirstPara;
        archSecondPara.textContent = language.de.archSecondPara;

        //Heritage
        heritageFirstPara.textContent = language.de.heritageFirstPara;
        heritageSecondPara.textContent = language.de.heritageSecondPara;

        //SUNNYSIDE

        




        





        
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