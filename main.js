/* 
Creiamo un finto biglietto del treno con:
Nome passeggero
Codice treno (numero casuale tra 90000 e 100000 escluso)
Numero carrozza
Prezzo calcolato
Categoria selezionata dall'utente
Aggiungiamo una piccola animazione al click su "Crea" e "Annulla", 
se clicchiamo su annulla dobbiamo ripulire il form.
*/


document.getElementById('createTicket').addEventListener('click', createTicket);

document.getElementById('clearTicket').addEventListener('click', clearTicket);



function createTicket () {

    //Printing on the ticket the name of the passeger
    document.getElementById('client_name').innerHTML = `${fullName.value}`;

    //Customer Number of kms
    var distance = document.getElementById('distance').value;

    //Customer Age
    var age = document.getElementById('age_group').value;

    //General Ticket price
    var tPrice = distance * 0.21;
    console.log(tPrice);

    //Prices with and without Discounts
    if ( age === 'minor' ){
        tPrice = tPrice - (tPrice * 0.20);
        var rounded_price = tPrice.toFixed(2);

        document.getElementById('ticketPrice').innerHTML = `${rounded_price}`;
        document.getElementById('discount').innerHTML = "Sconto minori";

    }else if ( age === 'senior' ){
        tPrice = tPrice - (tPrice * 0.40);
        var rounded_price = tPrice.toFixed(2);

        document.getElementById('ticketPrice').innerHTML = `${rounded_price}`;
        document.getElementById('discount').innerHTML = "Sconto anziani";

    }else if ( age === 'adult'){
        var rounded_price = tPrice.toFixed(2);
    
        document.getElementById('ticketPrice').innerHTML = `${rounded_price}`;
        document.getElementById('discount').innerHTML = " ";

    }
    //Printing the carriage number on the ticket 
    document.getElementById('carriageNumber').innerHTML = `${generateCarriageNumber(1, 15)}`;

    //Printing on the ticket the train code 
    document.getElementById('code').innerHTML = `${generateTrainCode(90000, 100000)}`;
}



function clearTicket () {
    document.getElementById('client_name').innerHTML = " ";
    document.getElementById('discount').innerHTML = " ";
    document.getElementById('code').innerHTML = " ";
    document.getElementById('ticketPrice').innerHTML = " ";
    document.getElementById('carriageNumber').innerHTML = " ";

}

function generateTrainCode (min, max) {
    return Math.floor(Math.random() * (max - min +1)) + min;
}

function generateCarriageNumber (min, max) {
    return Math.floor(Math.random() * (max - min +1)) + min;
}