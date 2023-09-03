// Este programa simula una llamada asincrónica para obtener un usuario

function obtenerUsuario(id) {
    let usuario;
    setTimeout(() => {
        if (id === 1) {
            usuario = { id: 1, nombre: 'John Doe' };
        }
    }, 2000);
    
    return usuario;
};

const usuario = obtenerUsuario(2);
console.log(usuario);

//solucion callback
function obtenerUsuarioCb(id, cb) {
    setTimeout(() => {
        if (id=== 1) {
            return cb ({id: 1, nombre: 'John Doe'});
        } else {
            return cb ('usuario incorrecto')
        }
    }, 2000);
};

obtenerUsuarioCb(1, (usuario) => {
    console.log('cb', usuario);
});

//solucion async/await
function obtenerUsuario(id) {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (id === 1) {
          const usuario = { id: 1, nombre: 'John Doe' };
          resolve(usuario);
        } else {
          resolve(null); 
        }
      }, 2000);
    });
  }

async function obtenerUsuarioAsync(id) {
    try {
      const usuario = await obtenerUsuario(id);
      return usuario;
    } catch (error) {
      console.log('Error al obtener el usuario:', error);
      return null;
    }
  }
  
  async function main() {
    const usuario = await obtenerUsuarioAsync(1);
    console.log(usuario);
  }
  
  main();


