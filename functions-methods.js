// Je gaat functies schrijven die we kunnen hergebruiken om sommige emailadressen te checken. Nu zul je gaan merken hoe handig functies kunnen zijn!
// Je zult hier methoden van het String Object voor nodig hebben, dus pak de paragraaf op EdHub over het String Object er even bij.


/* Opdracht  1 */
// Schrijf een functie genaamd getEmailDomain, die een emailadres verwacht en de domeinnaam teruggeeft. Een domeinnaam is hetgeen dat na het @ in het adres staat
// ---- Verwachte uitkomsten:
// getEmailDomain("n.eeken@novi-education.nl") geeft novi-education.nl
// getEmailDomain("t.mellink@novi.nl") geeft novi.nl
// getEmailDomain("a.wiersma@outlook.com") geeft outlook.com

const emailAddress = ["n.eeken@novi-education.nl", "t.mellink@novi.nl", "a.wiersma@outlook.com"];
number = 0

function getEmailDomain() {
    for (address in emailAddress) {
        var fields = emailAddress[number].split('@');
        var domain = fields[1]
        console.log(domain)
        number = number + 1
    }
}

getEmailDomain(emailAddress)

/* Opdracht  2 */
// Schrijf een functie genaamd typeOfEmail, die een emailadres verwacht. De functie checkt of het emailadres een novi domein heeft (medewerker), een novi-education domein (student), of extern domein (zoals gmail of outlook)
// ---- Verwachte uitkomsten:
// typeOfEmail("n.eeken@novi-education.nl") geeft "Student"
// typeOfEmail("t.mellink@novi.nl") geeft geeft "Medewerker"
// typeOfEmail("novi.nlaapjesk@outlook.com") geeft geeft "Extern" <-- deze moet het ook doen!
// typeOfEmail("a.wiersma@outlook.com") geeft "Extern"

const emailAddress = ["n.eeken@novi-education.nl", "t.mellink@novi.nl", "novi.nlaapjesk@outlook.com", "a.wiersma@outlook.com"];
number = 0

function getEmailDomain() {
    for (address in emailAddress) {
        var fields = emailAddress[number].split('@');
        var domain = fields[1]
        number = number + 1

        if (domain === "novi.nl") {
            console.log("Medewerker")
        }
    
        if (domain === "novi-education.nl") {
            console.log("Student")
        }
    
        if (domain === "outlook.com") {
            console.log("Extern")
        }
    }
}

getEmailDomain(emailAddress)


/* Opdracht  3 */
// Schrijf een functie genaamd checkEmailValidity, die een emailadres verwacht en checkt of het emailadres valide is. De functie returned true of false, afhankelijk van de uitkomst.
// Een emailadres is valide wanneer:
// * Er een @ in voorkomt
// * Er géén , in voorkomt
// * Er géén . in voorkomt als allerlaatste karakter (dus hotmail.com is valide, net als outlook.nl, maar outlooknl. niet)
// ---- Verwachte uitkomsten:
// checkEmailValidity("n.eeken@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("tessmellink@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("n.eekenanovi.nl") geeft false - want geen @
// checkEmailValidity("n.eeken@novinl.") geeft false - want de punt mag niet als laatst
// checkEmailValidity("tessmellink@novi,nl") geeft false - want er staat een komma in

const emailAddress = ["n.eeken@novi.nl", "tessmellink@novi.nl", "n.eekenanovi.nl", "n.eeken@novinl.", "tessmellink@novi,nl"];

number = 0

function getEmailDomain() {
    for (address in emailAddress) {

        if (emailAddress[number].includes("@")) {
            if (emailAddress[number] != ",") {
                if (emailAddress[number].charAt(emailAddress[number].length-1) != "."){
                    console.log("True")
                }
            }
            
        }
        
        else {
            console.log("False")
        }

        number = number + 1

    }
}

getEmailDomain(emailAddress)