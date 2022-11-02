# TP1 - Composants React

## Équipe

Stéphanie Denis (steden001) et Emeline Marquès (emmar009)

## Description

Il s'agit de la création d'une bibliothèque de 10 composants React ayant chacun 3 stories différentes.

La liste des composants :

-   [Alert](#alert)
-   [Badge](#badge)
-   [Button](#button)
-   [Card](#card)
-   [Carousel](#carousel)
-   [Checkbox](#checkbox)
-   [Collection](#collection)
-   [Pagination](#pagination)
-   [Progress](#progress)
-   [Spin](#spin)

## Pour démarrer le projet :

```sh
yarn install
```

```sh
yarn storybook
```

## Les composantes

### Alert

Élément(s) personnalisable(s) :

-   variant (type string) : Permet de changer l'aspect visuel de l'alert.
    -   Valeurs disponibles : outlined, filled.
-   severity (type string) : Permet de changer le niveau de gravité de l'alert.
    -   Valeurs disponibles : error, warning, info, success.
-   color (type string) : Permet de changer la couleur de l'alert.
    -   Valeurs disponibles : error, warning, info, success.

---

### Badge

Élément(s) personnalisable(s) :

-   text (type string) : Permet de changer le texte du badge par celui désiré.
-   color (type string) : Permet de changer la couleur du badge.
    -   Valeurs disponibles : pink, red, yellow, orange, cyan, green, blue, purple, geekblue, magenta, volcano, gold, lime.

---

### Button

Élément(s) personnalisable(s) :

-   variant (type string) : Permet de choisir le style du bouton.
    -   Valeurs disponibles : text, contained, outlined.
-   color (type string) : Permet de choisir la couleur du bouton.
    -   Valeurs disponibles : inherit, primary, secondary, success, error, info, warning.
-   size (type string) : Permet de modifier la taille du bouton.
    -   Valeurs disponibles : small, medium, large.
-   disabled (type boolean) : Permet de désactiver ou non le bouton, sur false par défaut, remplacer par true si on souhaite le désactiver.
    -   Valeurs disponibles : true, false.
-   text (type string) : Permet de changer le texte du bouton par celui désiré.

---

### Card

Élément(s) personnalisable(s) :

-   width (type string) : Permet de choisir la largeur de la carte par celle désirée.
-   title (type string) : Permet de choisir le titre désiré.
-   variant (type string) : Permet de choisir le style du bouton de la carte.
    -   Valeurs disponibles : primary, secondary, success, danger, warning, info, light, dark.

---

### Carousel

Élément(s) personnalisable(s) :

-   width (type string) : Permet de choisir la largeur du carousel.
-   background (type string) : Permet de choisir la couleur de fond du h3 du carousel. Il suffit de rentrer un code hexadécimal.
-   height (type string) : Permet de choisir la hauteur du h3.
-   color (type string) : Permet de choisir la couleur du texte du h3. Il suffit de rentrer un code hexadécimal.
-   lineHeight (type string) : Permet de choisir la hauteur de l'interlignage.
-   textAlign (type string) : Permet de choisir l'alignement du texte.
    -   Valeurs disponibles : left, center, right, justify.

---

### Checkbox

Élément(s) personnalisable(s) :

-   color (type string) : Permet de choisir la couleur de la checkbox.
    -   Valeurs disponibles : inherit, primary, secondary, success, error, info, warning.

---

### Collection

Élément(s) personnalisable(s) :

-   imageurl (type array) : Permet d'ajouter des images.
-   width (type number) : Permet de modifier la largeur des images.

---

### Pagination

Élément(s) personnalisable(s) :

-   defaultCurrent (type number) : Permet d'indiquer le numéro de page initial par défaut.
-   total (type number) : Permet d'indiquer le nombre total d'éléments de données. Remplacer par le nombre d'éléments souhaité.

---

### Progress

Élément(s) personnalisable(s) :

-   percent (type number) : Permet de changer la valeur de la progression de la barre.
    -   Valeurs disponibles : Entre 0 et 100.

---

### Spin

Élément(s) personnalisable(s) :

-   size (type string) : Permet de modifier la taille du spinner.
    -   Valeurs disponibles : small, medium, large.

---

## Technologies

Les librairies externes utilisées :

-   Material UI
    -   Version : 5.2.7
    -   Site : https://mui.com/
-   Ant Design
    -   Version : 4.18.2
    -   Site : https://ant.design/
-   React Bootstrap
    -   Version : 2.5.0
    -   Site : https://react-bootstrap.github.io/
