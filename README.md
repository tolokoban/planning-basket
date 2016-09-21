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

