const saludar = (name) =>  console.log(`Hola ${name}`);

saludar('Jan');

const getUser = () => {
  return {
    id: '123',
    userName: 'gamunax'
  }
}

console.log(getUser());

const getUsuarioActivo = (name) => ({
  id: '123',
  userName: name
});

const usuarioActivo = getUsuarioActivo('Jan Pierre');
console.log(usuarioActivo);