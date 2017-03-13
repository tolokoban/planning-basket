"use strict";

module.exports = {
    calendar: [
        /*'16122016', '06012017', '13012017', '20012017', '27012017',
        '03022017', '10022017', '17022017', '10032017', '17032017'*/
        '17032017', '24032017', '31032017', '07042017', '14042017'
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
        Hortense: { '17032017': 'B' },
        Alois:    { '17032017': 'G' },
        Agathe:   { '17032017': 'G' },
        Valentin: { '17032017': 'G' },
        Anna:     { '17032017': 'G' }
    },
    // Scores déjà réalisés.
    scores: {
        Hortense: 0,
        Valentin: 0
    }
};
