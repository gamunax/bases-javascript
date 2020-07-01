import { getHeroById } from './bases/08-import-export';

/* const promesa = new Promise( (resolve, reject) => {
  setTimeout(() => {
    
    const hero = getHeroById(2);
    console.log(hero);

    resolve(hero);
    reject('No se pudo encontrar el hero');
  }, 2000);
});

promesa.then( (hero) => {
  console.log('hero', hero);
})
.catch( err => console.warn(err));
 */

const getHeroByIdAsync = (id) => {
  return new Promise( (resolve, reject) => {
    setTimeout(() => {
      
      const p1 = getHeroById(id);
      if (p1) {
        resolve(p1);
      } else {
        reject('No se pudo encontrar el hero');
      }
  
      // resolve(hero);
      
    }, 2000);
  });
};

getHeroByIdAsync(10)
  .then( hero => console.log('Hero', hero))
  .catch( err => console.warn(err));

