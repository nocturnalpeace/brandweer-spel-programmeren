////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
///                                                  ///
///   LETS EN CONSTANTS- BOVEN AAN ZOALS HET HOORT   ///
///                                                  ///
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////

// deze lijn roept de knop op uit de html. 
// Button is opgeslagen in buttomRamp
const buttonRamp = document.querySelector("#ramp")

// deze lijn roept het eerste vuurtje/img op uit de html. 
// De image is nu opgeslagen in vuur1
const vuur1 = document.querySelector("#vuur1")
// ook voor alle andere afbeeldingen/vuurtjes
const vuur2 = document.querySelector("#vuur2")
const vuur3 = document.querySelector("#vuur3")
const vuur4 = document.querySelector("#vuur4")
const vuur5 = document.querySelector("#vuur5")
const vuur6 = document.querySelector("#vuur6")
const vuur7 = document.querySelector("#vuur7")
const vuur8 = document.querySelector("#vuur8")
const vuur9 = document.querySelector("#vuur9")
const vuur10 = document.querySelector("#vuur10")
const vuur11 = document.querySelector("#vuur11")
const vuur12 = document.querySelector("#vuur12")

const geluidWater = new Audio("audio/WaterGeluid.mp3")

// de tekst in de HTML om de score bij te houden
const puntenTeller = document.querySelector("#punten")
// de score om te gebruiken in JS
let punten = 0;
let tijd = 0


const tekstballon = document.querySelector("#uitroep")

const uitroepen = [
    "Love is a friendship that caught fire",
    "Playing with a firefighter will get you wet",
    "Echte mannen bestrijden vuur met water",
    "De brandweer zijn echte helden",
    "We didn't start the fire?!",
    "Nog een gebouw gered",
    "Nummer 1 bij de brandweer!"
]





////////////////////////
////////////////////////
///                  ///
///   DE FUNCTIONS   ///
///                  ///
////////////////////////
////////////////////////


function VuurOnzichtbaar(){

    // de vuurtjes weer laten zien
    vuur1.classList.remove("zichtbaar")
    vuur1.classList.add("onzichtbaar")
    vuur2.classList.remove("zichtbaar")
    vuur2.classList.add("onzichtbaar")
    vuur3.classList.remove("zichtbaar")
    vuur3.classList.add("onzichtbaar")
    vuur4.classList.remove("zichtbaar")
    vuur4.classList.add("onzichtbaar")
    vuur5.classList.remove("zichtbaar")
    vuur5.classList.add("onzichtbaar")
    vuur6.classList.remove("zichtbaar")
    vuur6.classList.add("onzichtbaar")
    vuur7.classList.remove("zichtbaar")
    vuur7.classList.add("onzichtbaar")
    vuur8.classList.remove("zichtbaar")
    vuur8.classList.add("onzichtbaar")
    vuur9.classList.remove("zichtbaar")
    vuur9.classList.add("onzichtbaar")
    vuur10.classList.remove("zichtbaar")
    vuur10.classList.add("onzichtbaar")
    vuur11.classList.remove("zichtbaar")
    vuur11.classList.add("onzichtbaar")
    vuur12.classList.remove("zichtbaar")
    vuur12.classList.add("onzichtbaar")
}

    
function vuurVerspreiden() {
// vuurtjes verspreiden
const vuur1X = 10 + 70 * Math.random()
const vuur1Y = 5 + 25 * Math.random()
vuur1.style.left = vuur1X + 'vw'
vuur1.style.bottom = vuur1Y + 'vw'
vuur1.classList.remove("onzichtbaar")
vuur1.classList.add("zichtbaar")

const vuur2X = 10 + 70 * Math.random()
const vuur2Y = 5 + 25 * Math.random()
vuur2.style.left = vuur2X + 'vw'
vuur2.style.bottom = vuur2Y + 'vw'
vuur2.classList.remove("onzichtbaar")
vuur2.classList.add("zichtbaar")

const vuur3X = 10 + 70 * Math.random()
const vuur3Y = 5 + 25 * Math.random()
vuur3.style.left = vuur3X + 'vw'
vuur3.style.bottom = vuur3Y + 'vw'
vuur3.classList.remove("onzichtbaar")
vuur3.classList.add("zichtbaar")

const vuur4X = 10 + 70 * Math.random()
const vuur4Y = 5 + 25 * Math.random()
vuur4.style.left = vuur4X + 'vw'
vuur4.style.bottom = vuur4Y + 'vw'
vuur4.classList.remove("onzichtbaar")
vuur4.classList.add("zichtbaar")

const vuur5X = 10 + 70 * Math.random()
const vuur5Y = 5 + 25 * Math.random()
vuur5.style.left = vuur5X + 'vw'
vuur5.style.bottom = vuur5Y + 'vw'
vuur5.classList.remove("onzichtbaar")
vuur5.classList.add("zichtbaar")

const vuur6X = 10 + 70 * Math.random()
const vuur6Y = 5 + 25 * Math.random()
vuur6.style.left = vuur6X + 'vw'
vuur6.style.bottom = vuur6Y + 'vw'
vuur6.classList.remove("onzichtbaar")
vuur6.classList.add("zichtbaar")

const vuur7X = 10 + 70 * Math.random()
const vuur7Y = 5 + 25 * Math.random()
vuur7.style.left = vuur7X + 'vw'
vuur7.style.bottom = vuur7Y + 'vw'
vuur7.classList.remove("onzichtbaar")
vuur7.classList.add("zichtbaar")

const vuur8X = 10 + 70 * Math.random()
const vuur8Y = 5 + 25 * Math.random()
vuur8.style.left = vuur8X + 'vw'
vuur8.style.bottom = vuur8Y + 'vw'
vuur8.classList.remove("onzichtbaar")
vuur8.classList.add("zichtbaar")

const vuur9X = 10 + 70 * Math.random()
const vuur9Y = 5 + 25 * Math.random()
vuur9.style.left = vuur9X + 'vw'
vuur9.style.bottom = vuur9Y + 'vw'
vuur9.classList.remove("onzichtbaar")
vuur9.classList.add("zichtbaar")

const vuur10X = 10 + 70 * Math.random()
const vuur10Y = 5 + 25 * Math.random()
vuur10.style.left = vuur10X + 'vw'
vuur10.style.bottom = vuur10Y + 'vw'
vuur10.classList.remove("onzichtbaar")
vuur10.classList.add("zichtbaar")

const vuur11X = 10 + 70 * Math.random()
const vuur11Y = 5 + 25 * Math.random()
vuur11.style.left = vuur11X + 'vw'
vuur11.style.bottom = vuur11Y + 'vw'
vuur11.classList.remove("onzichtbaar")
vuur11.classList.add("zichtbaar")

const vuur12X = 10 + 70 * Math.random()
const vuur12Y = 5 + 25 * Math.random()
vuur12.style.left = vuur12X + 'vw'
vuur12.style.bottom = vuur12Y + 'vw'
vuur12.classList.remove("onzichtbaar")
vuur12.classList.add("zichtbaar")
}

// de functie als er op de knop gedrukt wordt
function toggleRamp() {
    // als er 12 punten zijn
    // dan opnieuw beginnen
    if (punten == 12) {

        VuurOnzichtbaar()


        // de tekst van de button veranderen
        buttonRamp.textContent = "Surprise"


        // de punten op 0 zetten
        punten = 0
        // de punten in de HTML op 0 zetten
        puntenTeller.textContent = 0
    }
    // bij de eerste keer op de knop drukken
    // en daarna zolang er minder dan 12 punten zijn
    // de vuurtjes van plek veranderen
    else {
vuurVerspreiden()
     // tekst in het ballonnetje varanderen
        tekstballon.textContent = "Oh nee!? De stad staat in brand!"
        setInterval(timer, 1000)
    }
}





// de functie als er op het eerste vlammetje geklikt wordt
function blusVuur1() {
    // vuurtje verbergen/blussen
    vuur1.classList.add("onzichtbaar")
    vuur1.classList.remove("zichtbaar")
    vuur1.classList.remove("grootvuur")
    blusGeluid()
    // een punt erbij optellen
    puntErbijOptellen()
    deTekstBallonAanpassen()
}

// de functie als er op het tweede vlammetje geklikt wordt
function blusVuur2() {
    vuur2.classList.add("onzichtbaar")
    vuur2.classList.remove("zichtbaar")
    blusGeluid()
    puntErbijOptellen()
    deTekstBallonAanpassen()
}

// etc
function blusVuur3() {
    vuur3.classList.add("onzichtbaar")
    vuur3.classList.remove("zichtbaar")
    blusGeluid()
    puntErbijOptellen()
    deTekstBallonAanpassen()
}

function blusVuur4() {
    vuur4.classList.add("onzichtbaar")
    vuur4.classList.remove("zichtbaar")
    blusGeluid()
    puntErbijOptellen()
    deTekstBallonAanpassen()
}

function blusVuur5() {
    vuur5.classList.add("onzichtbaar")
    vuur5.classList.remove("zichtbaar")
    blusGeluid()
    puntErbijOptellen()
    deTekstBallonAanpassen()
}

function blusVuur6() {
    vuur6.classList.add("onzichtbaar")
    vuur6.classList.remove("zichtbaar")
    blusGeluid()
    puntErbijOptellen()
    deTekstBallonAanpassen()
}

function blusVuur7() {
    vuur7.classList.add("onzichtbaar")
    vuur7.classList.remove("zichtbaar")
    blusGeluid()
    puntErbijOptellen()
    deTekstBallonAanpassen()
}

function blusVuur8() {
    vuur8.classList.add("onzichtbaar")
    vuur8.classList.remove("zichtbaar")
    blusGeluid()
    puntErbijOptellen()
    deTekstBallonAanpassen()
}

function blusVuur9() {
    vuur9.classList.add("onzichtbaar")
    vuur9.classList.remove("zichtbaar")
    blusGeluid()
    puntErbijOptellen()
    deTekstBallonAanpassen()
}

function blusVuur10() {
    vuur10.classList.add("onzichtbaar")
    vuur10.classList.remove("zichtbaar")
    blusGeluid()
    puntErbijOptellen()
    deTekstBallonAanpassen()
}

function blusVuur11() {
    vuur11.classList.add("onzichtbaar")
    vuur11.classList.remove("zichtbaar")
    blusGeluid()
    puntErbijOptellen()
    deTekstBallonAanpassen()
}

function blusVuur12() {
    vuur12.classList.add("onzichtbaar")
    vuur12.classList.remove("zichtbaar")
    blusGeluid()
    puntErbijOptellen()
    deTekstBallonAanpassen()
}

function timer() {
   tijd = tijd+1
    console.log(tijd)
    if (tijd == 5 && vuur1.classList.contains('zichtbaar') || tijd == 5 && vuur2.classList.contains('zichtbaar')){
        vuur1.classList.add("grootvuur")
        vuur2.classList.add('grootvuur')
    
}
}

function blusGeluid() {
    geluidWater.play()

}




// als er op een vuurtje geklikt wordt
// dan wordt het vuurtje eerste verborgen
// daarna wordt deze functie aangeroepen
// om de teller te verhogen
function puntErbijOptellen() {
    // 1 bij de punten optellen
    punten = punten + 1
    // dat getal terug zetten in de de teller op het scherm
    puntenTeller.textContent = punten


    // kijken of de brandjes geblust zijn
    // dat is zo als er 12 punten verzameld zijn
    if (punten == 12) {
        // om duidelijk te maken dat alles geblust is
        // de tekst van de button veranderen
        buttonRamp.textContent = "de fik er weer in"
        tekstballon.textContent = "De stad is gered!"
    }
}





function deTekstBallonAanpassen() {
    if (punten < 12) {
        // een getal met komma's
        // met math.random een getal tussen 0 en 1
        // maal het aantal uitroepen in de array
        const uitroepNummer = Math.random() * uitroepen.length
        // het getal met komma's naar beneden afronden
        const uitroepInteger = Math.floor(uitroepNummer)


        // dan de tekst in de tekstballon aanpassen
        // met een uitroep uit de array
        // daarvoor het afgeronde getal gebruiken
        tekstballon.textContent = uitroepen[uitroepInteger]
    }
}








///////////////////////////
///////////////////////////
///                     ///
///  DE EVENTLISTENERS  ///
///                     ///
///////////////////////////
///////////////////////////

// de button luistert naar kliks
// als er geklikt wordt
// dan wordt de functie toggleRamp aangeroepen
buttonRamp.addEventListener("click", toggleRamp)


// het eerste vuurtje luistert naar kliks
// als er geklikt wordt
// dan wordt de functie blusVuur1 aangeroepen
vuur1.addEventListener("click", blusVuur1)
// zelfde voor de andere vuurtjes
vuur2.addEventListener("click", blusVuur2)
vuur3.addEventListener("click", blusVuur3)
vuur4.addEventListener("click", blusVuur4)
vuur5.addEventListener("click", blusVuur5)
vuur6.addEventListener("click", blusVuur6)
vuur7.addEventListener("click", blusVuur7)
vuur8.addEventListener("click", blusVuur8)
vuur9.addEventListener("click", blusVuur9)
vuur10.addEventListener("click", blusVuur10)
vuur11.addEventListener("click", blusVuur11)
vuur12.addEventListener("click", blusVuur12)



