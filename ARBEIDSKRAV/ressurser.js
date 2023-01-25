    const resources = [
      {
          category: "HTML",
          text: "HTML står for HyperText Markup Language, og er et strukturspråk som brukes for å lage strukturer til nettside- og applikasjonsgrensesnitt.",
          sources: [
              {
                  title: "W3Schools",
                  url: "https://www.w3schools.com/html/"
              },
              {
                  title: "HTML Living standard",
                  url: "https://html.spec.whatwg.org/multipage/"
              },
              {
                  title: "HTML.com Tutorials",
                  url: "https://html.com/"
              },
          ]
      },
      {
          category: "CSS",
          text: "CSS står for Cascading StyleSheets, og brukes for å sette stilregler på HTML-elementer.",
          sources: [
              {
                  title: "W3Schools",
                  url: "https://www.w3schools.com/css/"
              },
              {
                  title: "W3C HTML & CSS Standards",
                  url: "https://www.w3.org/standards/webdesign/htmlcss.html"
              },
              {
                  title: "W3C CSS Validator",
                  url: "https://jigsaw.w3.org/css-validator/"
              },
              {
                  title: "CSS Tricks",
                  url: "https://css-tricks.com/"
              },
          ]
      },
      {
          category: "JavaScript",
          text: "JavaScript er et scriptspråk basert på EcmaScript. JavaScript kjører direkte i nettleseren, og brukes ofte til å manipulere HTML og CSS i webgrensnesnitt.",
          sources: [
              {
                  title: "W3Schools",
                  url: "https://www.w3schools.com/js/"
              },
              {
                  title: "MDN Web Docs",
                  url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              },
              {
                  title: "How to read JavaScript Documentation",
                  url: "https://www.youtube.com/watch?v=O3iR-CIufKM"
              },
          ]
      },
      {
          category: "React",
          text: "React er et rammeverk bygget i JavaScript. React bruker komponenter og states for å lage en levende frontend.",
          sources: [
              {
                  title: "React documentation",
                  url: "https://reactjs.org/docs/getting-started.html"
              },
              {
                  title: "W3Schools",
                  url: "https://www.w3schools.com/REACT/DEFAULT.ASP"
              },
              {
                  title: "How to read JavaScript Documentation",
                  url: "https://www.youtube.com/watch?v=O3iR-CIufKM"
              },
          ]
      },
      {
          category: "Sanity and headless CMS",
          text: "Sanity er et headless CMS som står for innholdsadministrasjon. Innhold hentes inn i applikasjoner via GROQ-spørringer.",
          sources: [
              {
                  title: "Sanity documentation",
                  url: "https://www.sanity.io/docs"
              },
              {
                  title: "OnCrawl: a beginners guide to headless CMS",
                  url: "https://www.oncrawl.com/technical-seo/beginners-guide-headless-cms/"
              },
              {
                  title: "Section.io: Getting started with Sanity CMS",
                  url: "https://www.section.io/engineering-education/getting-started-with-sanity-cms/"
              },
          ]
      },
  ]

    //funksjon som bestemmer oppsettet av det som skal stå i div med id="tabcontent"
    
    function Printkilde(resource) {
      document.getElementById("tabcontent").innerHTML = "";
      
      const kategoriTitel = document.createElement("h3");
      kategoriTitel.textContent = resource.category;
  
      const tekst = document.createElement("p");
      tekst.textContent = resource.text;
  
      const kildeListe = document.createElement("ul");
  
      resource.sources.forEach(source => {
          const kildeMaterial = document.createElement("li");
  
          const sourceURL = document.createElement("a");
          sourceURL.textContent = source.title;
          sourceURL.href = source.url;
  
          kildeMaterial.appendChild(sourceURL);
          kildeListe.appendChild(kildeMaterial);
      });
      
      //Skriver ut ellementene fra resources i div-en "tabcontent"

      document.getElementById("tabcontent").appendChild(kategoriTitel);

      document.getElementById("tabcontent").appendChild(tekst);
      
      document.getElementById("tabcontent").appendChild(kildeListe)
  }
  

  //Plukker ut hvilken sett med info fra const resources basert på knappen som er trykket på

  document.addEventListener("DOMContentloaded", Printkilde);
  
  document.getElementById("HTMLKnapp").addEventListener('click', function() {
      Printkilde(resources[0])
  })
  
  document.getElementById("CSSKnapp").addEventListener('click', function() {
      Printkilde(resources[1])
  })
  
  document.getElementById("JavaKnapp").addEventListener('click', function() {
      Printkilde(resources[2])
  })
  
  document.getElementById("ReactKnapp").addEventListener('click', function() {
      Printkilde(resources[3])
  })
  
  document.getElementById("SanityKnapp").addEventListener('click', function() {
      Printkilde(resources[4])
  })








/*
KILDER{
  -w2schools. How To - Tabs:
   https://www.w3schools.com/howto/howto_js_tabs.asp

  -uin23ak2_resource_layout_prestegaard
  https://github.com/Jadeigo/uin23ak2_resource_layout_prestegaard
  
  -w2schools. HTML DOM Element appendChild()
  https://www.w3schools.com/jsref/met_node_appendchild.asp

  -HTML DOM Document createElement()
  https://www.w3schools.com/jsref/met_document_createelement.asp
  
}
*/
