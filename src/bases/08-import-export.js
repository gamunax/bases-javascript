// import { heroes } from './data/heros';
// import { heroes } from './data/heros'

import { heroes } from '../data/heros';

export const getHeroById = (id) => heroes.find(hero => hero.id === id);
export const getHerosByOwner = (owner) => heroes.filter( hero => hero.owner === owner);

// console.log(getHeroById(2));
// console.log(getHerosByOwner('DC'));