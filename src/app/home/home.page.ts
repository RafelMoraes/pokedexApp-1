import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public listaPokemons = [{
    numero:'001',
    nome:'Bulbasaur',
    tipos:['Grass', 'poison'],
    img:'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png'
  },
{
  numero:'004',
    nome:'Charmander',
    tipos:['Fire'],
    img:'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png'
},
{
  numero:'007',
    nome:'Squirtle',
    tipos:['Warter'],
    img:'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png'
},
{
  numero:'025',
    nome:'PIkachu',
    tipos:['Electric'],
    img:'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png'
},
{
  numero:'006',
    nome:'Charizard',
    tipos:['Fire','Flying'],
    img:'https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png'
},
{
  numero:'052',
    nome:'Meowth',
    tipos:['Normal'],
    img:'https://assets.pokemon.com/assets/cms2/img/pokedex/full/052.png'
},{
  numero:'067',
    nome:'Machoke',
    tipos:['Fighting'],
    img:'https://assets.pokemon.com/assets/cms2/img/pokedex/full/067.png'
},{
  numero:'057',
    nome:'Primeape',
    tipos:['Fighting'],
    img:'https://assets.pokemon.com/assets/cms2/img/pokedex/full/057.png'
},{
  numero:'065',
    nome:'Alakazam',
    tipos:['Psychic'],
    img:'https://assets.pokemon.com/assets/cms2/img/pokedex/full/065.png'
},{
  numero:'106',
    nome:'Hitmonlee',
    tipos:['Fighting'],
    img:'https://assets.pokemon.com/assets/cms2/img/pokedex/full/106.png'
},
];
public listaFiltrada = [];

  constructor() {}

}
