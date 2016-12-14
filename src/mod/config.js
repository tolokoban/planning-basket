"use strict";

module.exports = {
    calendar: [
/*
        '23092016', '30092016', '07102016', '14102016',
        '04112016', '18112016', '25112016',
        '02122016', '09122016'//, '16122016'
*/
        '16122016', '06012017', '13012017', '20012017', '27012017', 
        '03022017', '10022017', '17022017', '10032017'/*, '17032017'*/
    ],
    // Les équipes pouvant faire l'aller.
    go: [
        { Agathe: 5 },
        { Alois: 5 },
        { Hortense: 5 },
        { Valentin: 5 }
    ],
    // Les équipes pouvant faire le retour.
    back: [
        { Anna: 4, Alois: 1 },
        { Hortense: 5 },
        { Valentin: 5 }
    ],
    // Jours où on ne peut faire que l'aller ("G"), le retour ("B") ou
    // ni l'un ni l'autre ("").
    restrictions: {
        Alois: { '30092016': '' },
        Hortense: { 
            '16122016': 'B',
            '06012017': 'B', 
            '13012017': 'B', 
            '20012017': 'B', 
            '27012017': 'B', 
            '03022017': 'B', 
            '10022017': 'B', 
            '17022017': 'B', 
            '10032017': 'B'
        }
    },
    // Scores déjà réalisés.
    scores: {
        Hortense: 0,
        Valentin: 10
    }
};
