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
        'heritageSecondPara' : 'Made using REACT, SASS and GSAP. useContext API was used  for the state management, data was fetched from a json file and Google maps API was used to display geolocations in sites section. Graphics and layout designs was  created using figma.',
        'sunnyFirstPara' : 'This web application looks like your basic html,css and Javascript website but it is more than that. It is a Progressive Web Application(PWA) where users have the option to deustch and english language.Users are able to view and use this website even without internet connection. They  can also download this app and add to their android home screen on mobile and desktop.',
        'sunnySecondPara' : 'It was made with HTML, CSS and Vanilla Javascript(ES6). Animations on this site were made with GSAP(including the smoothscroll plugin).',

        //ABOUT
        'aboutTitle' : 'About',
        'aboutFirstPara' : "My name is Adeola Bamigboye, and I'm a passionate frontend web developer using web technologies to build amazing products and focusing on solving problems and for different niches and industries using the power of technology. I try to better myself everytime and contribute to open source.",
        'aboutHello' : 'Hello,',
        'aboutSecondPara' : 'I would love to hear from you.Please feel free to contact me for projects, job opportunities or even collaborations.',
        'openSourceLink' : 'Here is the link to some open sourceprojects that i have contributed to.',

        //CONTACT

        'contactTitle' : 'CONTACT',
        'contactQuestion' : 'Do you have any question or message for me?',
        'submit' : 'SEND',
        'phoneNumber' : 'PHONE-NUMBER',
        'socially' : "LET'S CONNECT SOCIALLY"


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
        'heritageSecondPara' : 'Erstellt mit REACT, SASS und GSAP. useContext API wurde für die Zustandsverwaltung verwendet, Daten wurden aus einer json-Datei geholt und Google Maps API wurde verwendet, um Geolocations im Bereich Sites anzuzeigen. Grafiken und Layout-Designs wurden mit figma erstellt.',
        'sunnyFirstPara' : 'Diese Webanwendung sieht aus wie eine einfache HTML-, CSS- und Javascript-Website, aber sie ist mehr als das. Es handelt sich um eine progressive Webanwendung (PWA), bei der die Benutzer die Möglichkeit haben, zwischen deutscher und englischer Sprache zu wählen, so dass sie diese Website auch ohne Internetverbindung anzeigen und nutzen können. Sie können auch diese App herunterladen und zu ihrem Android-Startbildschirm auf dem Handy und Desktop hinzufügen.',
        'sunnySecondPara' : 'Sie wurde mit HTML, CSS und Vanilla Javascript(ES6) erstellt. Die Animationen auf dieser Seite wurden mit GSAP(einschließlich dem Smoothscroll-Plugin) erstellt.',

        //ABOUT
        'aboutTitle' : 'ÜBER',
        'aboutHello' : 'Hallo,',
        'openSourceLink' : 'Hier ist der Link zu einigen Open-Source-Projekten, zu denen ich beigetragen habe.',
        'aboutFirstPara' : 'Mein Name ist Adeola Bamigboye und ich bin ein leidenschaftlicher Frontend-Webentwickler, der Webtechnologien verwendet, um erstaunliche Produkte zu bauen und sich darauf konzentriert, Probleme zu lösen und für verschiedene Nischen und Branchen die Macht der Technologie zu nutzen. Ich versuche, mich jedes Mal zu verbessern und zu Open Source beizutragen.',
        'aboutSecondPara' : 'Ich würde mich freuen, von Ihnen zu hören. Sie können mich gerne für Projekte, Arbeitsmöglichkeiten oder sogar Kooperationen kontaktieren.',

         //CONTACT

         'contactTitle' : 'KONTAKT',
         'contactQuestion' : 'Haben Sie eine Frage oder Nachricht für mich?',
         'submit' :'SENDEN',
         'phoneNumber' : 'TELEFONNUMMER',
         'socially' : "LASSEN SIE UNS SOZIAL VERNETZEN"
        
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
        sunnyFirstPara.textContent = language.de.sunnyFirstPara;
        sunnySecondPara.textContent = language.de.sunnySecondPara;


        //ABOUT SESSION

        aboutTitle.textContent = language.de.aboutTitle;
        aboutFirstPara.textContent = language.de.aboutFirstPara;
        aboutHello.textContent = language.de.aboutHello;
        aboutSecondPara.textContent = language.de.aboutSecondPara;
        openSourceLink.textContent = language.de.openSourceLink;


        //Contact SESSION

        contactTitle.textContent = language.de.contactTitle;
        contactQuestion.textContent = language.de.contactQuestion;
        submit.textContent = language.de.submit;
        phoneNumber.textContent = language.de.phoneNumber;
        socially.textContent = language.de.socially;


        

        




        





        
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