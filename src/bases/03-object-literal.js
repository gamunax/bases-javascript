const persona = {
  nombre: 'Jan',
  apellido: 'Sánchez',
  edad: 33,
  direccion: {
    ciudad: 'Lima',
    Zip: 123,
    lat: 14.333,
    lng: 15.333
  }
};


// const persona2 = persona; // no es factiable, ya que es una copia de referencia.
const persona2 = {...persona}; // aplicar spread para clonar
persona2.nombre = 'Juan';

console.log(persona);
console.log(persona2);