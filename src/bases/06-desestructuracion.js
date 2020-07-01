const persona = {
  name: 'Ironman',
  edad: 45,
  clave: 'ironman'
};

const { name } = persona;

const useContext = ({clave, name, edad, rango = 'capitan'}) => {
  return {
    nombreClave: clave,
    anios: edad,
    latlng: {
      lat: 14.22,
      lng: -12.35
    }
  }
}

const { nombreClave, anios, latlng: {lat, lng} } = useContext(persona);
console.log(nombreClave, anios);
console.log(lat, lng);