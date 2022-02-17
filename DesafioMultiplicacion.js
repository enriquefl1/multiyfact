let numero = prompt("Ingrese numero para calcular tablas y factorial")

    let multi = (numero) => {
            // Imprime las tablas de multiplicación del numero dado
            for ( let i = 1 ; i <= numero ; i++) {
                for ( let j = 1 ; j <= numero ; j++) {
                console.log( ` ${j} x ${i} = ${j*i} ` );
                }
            }
    }

    let fact = (numero) => {
        var res = 1;
        for (let i = 1; i <= numero; i++) {
        res = res * i;
        }
        console.log(res)
    }

//1.- Valida que numero sea mayor que 0 y menor que 20
if (numero>0 && numero<=20) {
    // Tabla de multiplicacion del numero dado
    multi(numero);
    // Factorial del numero dado
    fact(numero)

} else {
    console.log("numero fuera de rango ( de 0 a 20)");
}   
