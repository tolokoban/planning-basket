"use strict";

module.exports = {
    calendar: [
        '23092016', '30092016', '07102016', '14102016',
        '04112016', '18112016', '25112016',
        '02122016', '09122016'//, '16122016'
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
        Valentin: { '30092016': '' }
    },
    // Scores déjà réalisés.
    scores: {
        Hortense: 5,
        Valentin: 5
    }
};
