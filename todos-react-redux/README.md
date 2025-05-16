# Exercices

## Exercice 1

Ajouter les actions suivantes dans todosSlice :
- deleteTodo (appelée avec un id en payload)
doit supprimer la todo du tableau
- toggleAllCompleted (qui sera appelée avec true/false) :
doit passer toutes les clés completed à true/false en fonction de payload
- updateTodo (qui sera appelée avec une todo)
doit mettre à jour les clés title et completed de la todo en fonction
de l'id de la todo

Exporter ses actions

Puis utiliser dispatch dans TodoPage pour faire les modification sur le store dans les event handlers.

## Exercice 2

Passer editingId dans le store.

Modifier TodosState dans store/types.ts pour y ajouter une clé editingId
de type number et l'initialiser à -1 dans slices.ts

Ajouter un reducer dans le slice todosSlice appelé setEditingId qui recevra
en payload l'id (type number) et mettre à jour la clé editingId avec ce payload

Exporter l'action creator

Ecrire un selecteur dans store/selector pour récupérer editingId

Dans TodosPage, utiliser useSelector pour récupérer la editingId, utiliser dispatch(setEditingId(...)) pour mettre à jour editingId où c'est nécessaire.

## Bonus : Exercice 3

Passer newTodo dans le store, à vous de trouver les étapes