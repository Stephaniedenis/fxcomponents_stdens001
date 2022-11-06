# <a href="https://reactjs.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/></a> TP1 - Composants React
## :women_wrestling: Équipe
Stéphanie Denis (steden001) et Emeline Marquès (emmar009)
## :page_facing_up: Description
Il s'agit de la création d'une bibliothèque de 10 composants React ayant chacun 3 stories différentes.
La liste des composants : 
- [Alert](#alert)
- [Badge](#badge)
- [Button](#button)
- [Card](#card)
- [Carousel](#carousel)
- [Checkbox](#checkbox)
- [Collection](#collection)
- [Pagination](#pagination)
- [Progress](#progress)
- [Spin](#spin)
## :arrow_forward: Pour démarrer le projet :
```sh
yarn install
```
```sh
yarn storybook
```
## :books: Les composantes
### :large_orange_diamond: Alert
### :small_orange_diamond: Description
Permet d'afficher un message d'alerte. 
### :small_orange_diamond: Librairie utilisée
> [mui](https://mui.com/)<br>
Version : 5.2.7
### :small_orange_diamond: Exemple
```javascript
const Success = Template.bind({});
Success.args={
    variant:'outlined',
    color: 'success',
    severity: 'success'
}
```
### :small_orange_diamond: Élément(s) personnalisable(s)
| Nom  | Type | Valeur(s) disponible(s) |
| ------------- | ------------- | ------------- |
| variant  | string   | outlined, filled  |
| severity  | string   | error, warning, info, success  |
| color  | string  | error, warning, info, success  |
--------------------------------
### :large_orange_diamond: Badge
### :small_orange_diamond: Description
Permet de créer un badge.
### :small_orange_diamond: Librairie utilisée
> [antd](https://ant.design/)<br>
Version : 4.18.2
### :small_orange_diamond: Exemple
```javascript
const Green = Template.bind({});
Green.args={
    text:'citron vert',
    color:'lime'
}
```
### :small_orange_diamond: Élément(s) personnalisable(s)
| Nom  | Type | Valeur(s) disponible(s) |
| ------------- | ------------- | ------------- |
| text  | string   | au choix  |
| color  | string  | pink, red, yellow, orange, cyan, green, blue, purple, geekblue, magenta, volcano, gold, lime  |
--------------------------------
### :large_orange_diamond: Button
### :small_orange_diamond: Description
Permet de créer un bouton.
### :small_orange_diamond: Librairie utilisée
> [mui](https://mui.com/)<br>
Version : 5.2.7
### :small_orange_diamond: Exemple
```javascript
const Principal = Template.bind({});
Principal.args={
    variant: 'outlined',
    color:'primary',
    size:'medium',
    disabled:false,
    text:'Principal'
}
```
### :small_orange_diamond: Élément(s) personnalisable(s)
| Nom  | Type | Valeur(s) disponible(s) |
| ------------- | ------------- | ------------- |
| variant  | string   | text, contained, outlined |
| color  | string  | inherit, primary, secondary, success, error, info, warning |
| size  | string   | small, medium, large |
| disabled   | boolean  | true, false |
| text  | string   | Texte du bouton au choix |
--------------------------------
### :large_orange_diamond: Card
### :small_orange_diamond: Description
Permet de créer une carte avec une image d'illustration ainsi que du texte.
### :small_orange_diamond: Librairie utilisée
> [react-bootstrap](https://react-bootstrap.github.io/)<br>
Version : 2.5.0
### :small_orange_diamond: Exemple
```javascript
const Small = Template.bind({});
Small.args = {
  width: '200px',
  title:'Petit titre',
  variant:'primary'
};
```
### :small_orange_diamond: Élément(s) personnalisable(s)
| Nom  | Type | Valeur(s) disponible(s) |
| ------------- | ------------- | ------------- |
| width  | string   | Au choix, pour changer la largeur de la carte |
| title  | string   | Titre au choix |
| variant  | string  | primary, secondary, success, danger, warning, info, light, dark |
--------------------------------
### :large_orange_diamond: Carousel
### :small_orange_diamond: Description
Permet de créer un carousel d'images avec un titre.
### :small_orange_diamond: Librairie utilisée
> [antd](https://ant.design/)<br>
Version : 4.18.2
### :small_orange_diamond: Exemple
```javascript
const Small = Template.bind({});
Small.args={
    width: '200px',
    background:'#ac9a66',
    height: '180px',
    color: '#fff',
    lineHeight: '180px',
    textAlign: 'center'
}
```
### :small_orange_diamond: Élément(s) personnalisable(s)
| Nom  | Type | Valeur(s) disponible(s) |
| ------------- | ------------- | ------------- |
| width  | string | Au choix, pour changer la largeur du carousel |
| background | string | Au choix, entrer un code hexadécimal |
| heigth | string | Au choix, pour changer la hauteur du h3 |
| color | string | Au choix, entrer un code hexadécimal |
| lineHeight | string  | Au choix pour changer la hauteur de l'interlignage |
| textAlign | string  | left, center, right, justify |
--------------------------------
### :large_orange_diamond: Checkbox
### :small_orange_diamond: Description
Permet de créer des checkbox.
### :small_orange_diamond: Librairie utilisée
> [mui](https://mui.com/)<br>
Version : 5.2.7
### :small_orange_diamond: Exemple
```javascript
const Bleu = Template.bind({});
Bleu.args={
    color: 'primary'
}
```
### :small_orange_diamond: Élément(s) personnalisable(s)
| Nom  | Type | Valeur(s) disponible(s) |
| ------------- | ------------- | ------------- |
| color  | string  | inherit, primary, secondary, success, error, info, warning  |
--------------------------------
### :large_orange_diamond: Collection
### :small_orange_diamond: Description
Permet de créer une collection d'images.
### :small_orange_diamond: Librairie utilisée
> [antd](https://ant.design/)<br>
Version : 4.18.2
### :small_orange_diamond: Exemple
```javascript
const Small = Template.bind({});
Small.args = {
  imagesurl: img,
  width: 100
};
```
### :small_orange_diamond: Élément(s) personnalisable(s)
| Nom  | Type | Valeur(s) disponible(s) |
| ------------- | ------------- | ------------- |
| imageurl | array   | Ajouter des images  |
| width  | number   | Modifier la largeur, au choix  |
--------------------------------
### :large_orange_diamond: Pagination
### :small_orange_diamond: Description
### :small_orange_diamond: Librairie utilisée
> [antd](https://ant.design/)<br>
Version : 4.18.2
### :small_orange_diamond: Exemple
```javascript
const Vingt = Template.bind({});
Vingt.args={
    defaultCurrent: 1,
    total: 200
};
```
### :small_orange_diamond: Élément(s) personnalisable(s)
| Nom  | Type | Valeur(s) disponible(s) |
| ------------- | ------------- | ------------- |
| defaultCurrent  | number   | Indique le numéro de page initial par défaut  |
| total  | number   | Remplacer par le nombre d'éléments souhaité  |
--------------------------------
### :large_orange_diamond: Progress
### :small_orange_diamond: Description
### :small_orange_diamond: Librairie utilisée
> [antd](https://ant.design/)<br>
Version : 4.18.2
### :small_orange_diamond: Exemple
```javascript
const Petit = Template.bind({});
Petit.args = {
    percent:30
};
```
### :small_orange_diamond: Élément(s) personnalisable(s)
| Nom  | Type | Valeur(s) disponible(s) |
| ------------- | ------------- | ------------- |
| percent  | number   | Entre 0 et 100  |
--------------------------------
### :large_orange_diamond: Spin
### :small_orange_diamond: Description
### :small_orange_diamond: Librairie utilisée
> [antd](https://ant.design/) <br>
Version : 4.18.2
### :small_orange_diamond: Exemple
```javascript
const Small = Template.bind({});
Small.args={
    size:'small'
}
```
### :small_orange_diamond: Élément(s) personnalisable(s)
| Nom  | Type | Valeur(s) disponible(s) |
| ------------- | ------------- | ------------- |
| size  | string   | small, medium, large  |
--------------------------------
