# planning-basket

Pour minimiser les trajets de chaque parent, on regroupe les enfants allant au basket dans le moins de voitures possibles.
On essaie d'être équitable et on doit tenter de respecter au mieux les contraintes de chacun.

A chaque enfant allant au basket, on associe :
* un nombre de places disponibles pour l'__aller__,
* un nombre de places disponibles pour le __retour__.

Afin d'équilibrer les contributions de chacun, on accorde des __points__ à chaque trajet réalisé. Le nombre de points correspond au nombre d'enfants transportés.

L'algorithme pour affecter les voitures aux différents trajets est le suivant :
```
Pour chaque scéance de basket:
  Trouver les voitures pouvant faire l'aller et ayant le moins de points.
  Les affecter à l'aller et leur donner les points correspondants.

  Faire de même pour le retour.
```

Le nombre de points à considérer pour un groupe de voitures est le nombre de point de la voiture qui en a le moins.

## Configuration

Toute la configuration s'effectue dans le fichier `config.js`.
Ce module retourne un objet dont les attributs sont les suivants :

* __calendar__ : C'est un tableau des dates de toutes les scéances de basket qu'on veut voir apparaitre dans le planning. Le format est `DDMMYYYY`. Par exemple, le 10 Mars 2017 se code ainsi : `10032017`.
* __go__ : Un tableau représentant les équipes qui peuvent faire l'aller. Chaque équipe est représentée par un objet possèdant autant d'attributs que de personnes composant cette équipe. Chaque attribut a comme nom celui de la personne et comme valeur le nombre de places dans sa voiture. Par exemple, si _Alice_ a 5 places dans sa voiture, _Bob_ 3, _Charles_ seulement 2 et que les trois peuvent faire l'aller, alors on aura : `go: [{Alice: 5}, {Bob: 3, Charles: 2}]`. On signifie ainsi que un aller est réalisé soit par _Alice_ seule, soit par _Bob_ et _Charles_ ensembles. Tout ça parce que dans notre exemple, il y a cinq enfants à transporter.
* __back__ : La même chose, mais pour les retours.
* __restrictions__ : On peut spécifier des contraintes pour chaque personne à des dates données. On a donc un objet dont les attributs ont pour nom le nom de la personne et pour valeur un objet dont le nom est une date au format `DDMMYYYY` et la valeur une chaîne de caractère pouvant être vide ou contenir _G_ (go) et/ou _B_ (back). Ainsi, une chaîne vide signifie que la personne en question ne peut pas de voyage ce jour là. Un _G_ signifie qu'elle ne peut faire que l'aller.
* __scores__ : Un objet donnant les scores initiaux pour différentes personnes. Ceci est utile pour enchaîner les plannings en tenant compte des scores précédents.
