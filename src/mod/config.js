"use strict";

module.exports = {
  calendar: [
        '05052017', '12052017', '19052017', '02062017', '09062017',
        '16062017', '23062017', '30062017'
      ],
  // Les équipes pouvant faire l'aller.
  go: [
    {
      Agathe: 5
    },
    {
      Alois: 5
    }
    ],
  // Les équipes pouvant faire le retour.
  back: [
    {
      Hortense: 5
    },
    {
      Anna: 4,
      Alois: 1
    },
    {
      Valentin: 5
    }
    ],
  // Jours où on ne peut faire que l'aller ("G"), le retour ("B") ou
  // ni l'un ni l'autre ("").
  restrictions: {
    Anna: {
      '05052017': 'G'
    },
  },
  // Jours où une équipe est déjà inscrite.
  obligations: {
    '05052017': {
      G: {
        Valentin: 5
      },
      B: {
        Anna: 4,
        Alois: 1
      }
    },
    "09062017": {
      B: {
        Valentin: 5
      }
    },
    "16062017": {
      B: {
        Valentin: 5
      }
    }
  },
  // Scores déjà réalisés.
  scores: {
    "Hortense": 10,
    "Valentin": 10,
    "Agathe": 10,
    "Alois": 8,
    "Anna": 12
  }
};