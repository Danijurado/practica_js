const calcularPomedio = (numeros) => {
    let sumaTotal = 0;
    for (let i = 0; i < numeros.length; i++) {
        sumaTotal += numeros[i];
    }
    const promedio = sumaTotal / numeros.length;
    return promedio;
};

const listaNumeros = [1, 2, 3, 4, 5];
const promedioNumeros = calcularPomedio(listaNumeros);

console.log(promedioNumeros);

/*
El problema estaba en la condicion del for, 
i <= numeros.length, le sobra el = si dejamos el igual
el bucle for se sale del arrays
*/