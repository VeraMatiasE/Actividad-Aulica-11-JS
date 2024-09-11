// Introducción
document.write("Matías Vera <br> 21 Años<br>");

// Variables
let nombre_empleado = "Joaquín";
let sueldo_empleado = 50000;
document.write(nombre_empleado, "<br>", sueldo_empleado, "<br>");

// Entrada de Datos por teclado
let nombre_usuario = prompt("Ingrese su nombre de usuario");
let email_usuario = prompt("Ingrese su email");
document.write("Nombre de Usuario: ", nombre_usuario, "<br>");
document.write("Email: ", email_usuario, "<br>");

// Estructuras secuenciales de Programación
// 1.
let lados_cuadrado = parseFloat(prompt("Ingrese el tamaño de los lados del cuadrado:"));
document.write("El tamaño del cuadrado es: ", lados_cuadrado, "<br>");
document.write("El perímetro del cuadrado es: ", lados_cuadrado * 4, "<br>");

// 2.
let num1 = parseInt(prompt("Ingrese el primer número"));
let num2 = parseInt(prompt("Ingrese el segundo número"));
let num3 = parseInt(prompt("Ingrese el tercer número"));
let num4 = parseInt(prompt("Ingrese el cuarto número"));
document.write("Los números ingresados son:", num1, ", ", num2,", ", num3, ", ", num4, ", <br>");
document.write("Los suma de ",num1, " y ", num2, " es igual a ", num1 + num2,", <br>");
document.write("El producto entre ",num3, " y ", num4, " es igual a ", num3 + num4,", <br>");

// 3.
let valores_numericos = [];
for(i = 1; i <= 4; i++) {
    valores_numericos.push(parseInt(prompt("Ingrese el número "+i)));
}
let suma_numeros = 0;
let producto_numeros = 1;
document.write("Los números ingresados son:");
valores_numericos.forEach(numero => {
    document.write(numero, " ");
    suma_numeros += numero;
    producto_numeros *= numero;
});
document.write("<br>","La suma de los valores es igual a ", suma_numeros, "<br>");
document.write("El producto de los valores es igual a ", producto_numeros, "<br>");

// 4.
let precio_producto = parseInt(prompt("Ingrese el precio del producto que comprará el cliente:"));
let cantidad_producto = parseInt(prompt("Ingrese la cantidad del producto que compra:"));
document.write("El comprador abonará ", precio_producto * cantidad_producto, "<br>");

// Estucturas Condicionales Simples
// 1.
let nota1 = parseInt(prompt("Ingrese la primer nota del alumno:"));
let nota2 = parseInt(prompt("Ingrese la segunda nota del alumno:"));
let nota3 = parseInt(prompt("Ingrese la tercer nota del alumno:"));
let promedio_notas = (nota1 + nota2 + nota3) / 3;
if(promedio_notas >= 7 ) {
    document.write("El alumno con un promedio de notas de ", promedio_notas, " promocionó la materia")
}

// 2.
let clave1 = prompt("Ingrese la primer clave");
let clave2 = prompt("Ingrese la segunda clave");
if(clave1 == clave2)
    document.write("Las claves son iguales");
else
    document.write("Las claves no son iguales");

// Estructuras Condicionales Compuestas
// 1.
let numero1 = parseInt(prompt("Ingrese el primer número"));
let numero2 = parseInt(prompt("Ingrese el segundo número"));
if(numero1 > numero2) {
    document.write("La suma entre ",numero1, " y ", numero2, " es igual a ", numero1 + numero2,"<br>");
    document.write("La diferencia entre ",numero1, " y ", numero2, " es igual a ", numero1 - numero2,"<br>");
} else {
    document.write("El producto entre ",numero1, " y ", numero2, " es igual a ", numero1 * numero2,"<br>");
    document.write("La división entre ",numero1, " y ", numero2, " es igual a ", numero1 / numero2,"<br>");
}

// 2.
let nota_alumno1 = parseInt(prompt("Ingrese la primer nota del alumno:"));
let nota_alumno2 = parseInt(prompt("Ingrese la segunda nota del alumno:"));
let nota_alumno3 = parseInt(prompt("Ingrese la tercer nota del alumno:"));
let promedio_notas_alumno = (nota_alumno1 + nota_alumno2 + nota_alumno3) / 3;

if(promedio_notas_alumno > 4) {
    document.write("Regular<br>");
} else {
    document.write("Reprobado<br>")
}
// 3.
let numero = parseInt(prompt("Ingrese un número entre 1 y 99:"));
if(numero <= 0) {
    document.write("Ingrese un número mayor a 0<br>");
} else if(numero < 10) {
    document.write("El número posee un solo dígito<br>");
} else if(numero < 100) {
    document.write("El número posee dos dígitos<br>");
} else {
    document.write("Ingrese un número positivo menor a 99<br>");
}

// Estructuras condicionales anidadas
// 1.
let numero_teclado1 = parseInt(prompt("Ingrese el primer número"));
let numero_teclado2 = parseInt(prompt("Ingrese el segundo número"));
let numero_teclado3 = parseInt(prompt("Ingrese el tercero número"));

document.write("El mayor número entre ", numero_teclado1, ", ", numero_teclado2," y ", numero_teclado3," es:");
if(numero_teclado1 > numero_teclado2) {
    if(numero_teclado1 > numero_teclado3) {
        document.write(numero_teclado1);
    } else {
        document.write(numero_teclado3);
    }
} else {
    if(numero_teclado2 > numero_teclado3) {
        document.write(numero_teclado2);
    } else {
        document.write(numero_teclado3);
    }
}
document.write("<br>");

// 2.
numero = parseInt(prompt("Ingrese un número"));
if(numero == 0) {
    document.write("El número es cero.<br>");
} else if(numero < 0) {
    document.write("El número es negativo.<br>");
} else {
    document.write("El número es positivo.<br>");
}

// 3.
numero = parseInt(prompt("Ingrese un número positivo de hasta 3 cifras"));
if(numero < 0) {
    document.write("Debe ingresar un número positivo<br>");
} else if(numero < 10) {
    document.write("El número tiene 1 cifra<br>");
} else if(numero < 100) {
    document.write("El número tiene 2 cifras<br>");
} else if(numero < 1000) {
    document.write("El número tiene 3 cifras<br>");
} else {
    document.write("El número debe de tener menos de 3 cifras<br>");
}

// 4.
let nombre_postulante = prompt("Ingrese el nombre del postulante:");
let cantidad_preguntas_postulante = prompt("Ingrese la cantidad de preguntas realizadas:");
let cantidad_preguntas_correctas_postulante = prompt("Ingrese la cantidad de preguntas contestadas correctamente por el postulante:");
let porcentaje_correctas_postulante = cantidad_preguntas_correctas_postulante / cantidad_preguntas_postulante;

document.write("El postulante ", nombre_postulante, " tiene un nivel:");
if (porcentaje_correctas_postulante >= 0.9 ) {
    document.write("Nivel Superior");
} else if(porcentaje_correctas_postulante >= .75) {
    document.write("Nivel Medio");
} else if(porcentaje_correctas_postulante >= .5) {
    document.write("Nivel Regular");
} else {
    document.write("Fuera de nivel");
}

// Operadores lógicos && (y) en las estructuras condicionales.	
// 1.
let dia_navidad = parseInt(prompt("Ingrese el día:"));
let mes_navidad = parseInt(prompt("Ingrese el mes:"));
let año_navidad = parseInt(prompt("Ingrese el año:"));

if(dia_navidad == 25 && mes_navidad == 12) {
    document.write("La fecha corresponde a la navidad del año ",año_navidad);
} else {
    document.write("La fecha no corresponde a la navidad<br>");
}
// 2.
let numero3;
numero1 = parseInt(prompt("Ingrese el primer número"));
numero2 = parseInt(prompt("Ingrese el segundo número"));
numero3 = parseInt(prompt("Ingrese el tercer número"));

if(numero1 == numero2 && numero2 == numero3) {
    document.write("La suma del primero por el segundo, y su producto por el tercero es igual a: ", (numero1 + numero2) * numero3,"<br>")
}

// 3.
numero1 = parseInt(prompt("Ingrese el primer número"));
numero2 = parseInt(prompt("Ingrese el segundo número"));
numero3 = parseInt(prompt("Ingrese el tercer número"));

if(numero1 < 10 && numero2 < 10 && numero3 < 10) {
    document.write("Todos los números son menores a 10<br>");
}
// 4.
let x = parseInt(prompt("Ingrese la primera coordenada del punto"));
let y = parseInt(prompt("Ingrese la segunda coordenada del punto"));
document.write("El punto (",x,", ",y,") se encuentra en el ")
if(x > 0) {
    if(y > 0) {
        document.write("primer cuadrante.<br>")
    } else {
        document.write("cuarto cuadrante.<br>")
    }
} else {
    if(y > 0) {
        document.write("segundo cuadrante.<br>")
    } else {
        document.write("tercer cuadrante.<br>")
    }
}

let sueldo_operario = parseInt(prompt("Ingrese el sueldo del operario"));
let antiguedad_operario = parseInt(prompt("Ingrese los años de antigüedad del operario."));
let nuevo_sueldo = sueldo_operario;
if(sueldo_operario < 500 && antiguedad_operario >= 10) {
    nuevo_sueldo += sueldo_operario * 0.2;
    document.write("Se aumentó el sueldo del operario en un 20%, su nuevo sueldo es $",nuevo_sueldo,"<br>");
} else if(sueldo_operario < 500 && antiguedad_operario < 10) {
    nuevo_sueldo += sueldo_operario * 0.05;
    document.write("Se aumentó el sueldo del operario en un 5%, su nuevo sueldo es $",nuevo_sueldo,"<br>");
} else if(sueldo_operario > 500) {
    document.write("El sueldo del operario es $",nuevo_sueldo,"<br>");
}

// Operadores lógicos || (o) en las estructuras condicionales.	
numero1 = parseInt(prompt("Ingrese el primer número"));
numero2 = parseInt(prompt("Ingrese el segundo número"));
numero3 = parseInt(prompt("Ingrese el tercer número"));

if(numero1 < 10 || numero2 < 10 || numero3 < 10) {
    document.write("Alguno de los números es menor a 10<br>");
} else {
    document.write("Ninguno de los números es menor a 10<br>");
}

// Estructuras switch
let palabra = prompt("Ingrese una de las siguientes palabras: casa, mesa, perro o gato.");
switch(palabra) {
    case "casa":
        document.write("House<br>");
        break;
    case "mesa":
        document.write("Table<br>");
        break;
    case "perro":
        document.write("Dog<br>");
        break;
    case "gato":
        document.write("Cat<br>");
        break;
    default:
        document.write("Ingrese solo las opciones: casa, mesa, perro o gato.<br>");
}

// Estructura repetitiva (while)	
// 1.
document.write("Los primero 25 multiplos de 11 son: ")
index = 1;
numero = 11;
while(index <= 25) {
    document.write(numero, " ");
    index++;
    numero += 11;
}

// 2.
document.write("Los múltiplos de 8 menores a 500 son: ");
numero = 8;
while(numero < 500) {
    document.write(numero," ");
    numero+=8;
}
document.write("<br>");

// Concepto de acumulador.
// 1.
let notas_menor_7 = 0, notas_mayor_7 = 0, nota;
for(i = 1; i <= 10; ++i) {
    nota = parseInt(prompt("Ingrese la nota del alumno n°" + i));
    if(nota >= 7) {
        notas_mayor_7++;
    } else {
        notas_menor_7++;
    }
}
document.write("La cantidad de notas menores a 7 son: ",notas_menor_7,"<br>");
document.write("La cantidad de notas mayores a 7 son: ",notas_mayor_7,"<br>");
// 2.
let alturas_personas = 0, promedio_alturas = 0;
for(i = 1; i <= 5; ++i) {
    alturas_personas += parseInt(prompt("Ingrese la altura de la persona n°" + i));
}
promedio_alturas = alturas_personas / 5;
document.write("El promedio de las alturas de las 5 personas es de ",promedio_alturas,"<br>");

// 3.
let importe = 0, sueldos_mayor_300 = 0, sueldos_entre_100_300 = 0;
sueldo_empleado = 0;
for(i = 1; i <= 5; ++i) {
    sueldo_empleado = parseInt(prompt("Ingrese el sueldo del empleado n°" + i));
    if(sueldo_empleado >= 100 && sueldo_empleado <= 300) {
        sueldos_entre_100_300++;
    } else if(sueldo_empleado > 300) {
        sueldos_mayor_300++;
    }
}
document.write("En la empresa, ", sueldos_entre_100_300, " personas cobran entre $100 y $300.<br>");
document.write("En la empresa, ", sueldos_mayor_300, " personas cobran más de $300.<br>");

// 4.
document.write("Los primero 20 multiplos de 5 son: ")
index = 1;
numero = 5;
while(index <= 20) {
    document.write(numero, " ");
    index++;
    numero += 5;
}
document.write("<br>");

// 5.
document.write("Los primero multiplos de 10 menores o iguales a 1500 son: ")
numero = 10;
while(numero <= 1500) {
    document.write(numero, " ");
    numero += 10;
}
document.write("<br>");
// 6.
let lista1 = 0, lista2 = 0;
for(i = 1; i <= 3; i++) {
    lista1 +=  parseInt(prompt("Ingrese el valor" + i + " de la lista1:"));
}
for(i = 1; i <= 3; i++) {
    lista2 +=  parseInt(prompt("Ingrese el valor" + i + " de la lista2:"));
}

if(lista1 > lista2) {
    document.write("La primer lista es mayor a la segunda.<br>");
} else if(lista1 < lista2) {
    document.write("La segunda lista es mayor a la primera.<br>");
} else {
    document.write("Ambas listas son iguales.<br>");
}

// 7.
let numeros_pares = 0, numeros_impares = 0;
for(i = 1; i <= 5; i++) {
    numero =  parseInt(prompt("Ingrese el valor n°" + i));
    if(numero %2 == 0) {
        numeros_pares++;
    } else {
        numeros_impares++;
    }
}
document.write("De los valores ingresados, ",numeros_impares," numeros son impares y ", numeros_pares, " números son pares.<br>");

// Estructura repetitiva (do/while)
suma_numeros = 0;
numero = 0;
do {
    suma_numeros = numero;
    numero = parseInt(prompt("Ingrese un número. Si ingresa un número mayor o igual a 9999 se termina el programa."));
} while(numero < 9999);
document.write("El número acumulado es igual a: ", suma_numeros, "<br>");
if(suma_numeros == 0) {
    document.write("El valor acumulado es igual a 0<br>");
} else if (suma_numeros < 0) {
    document.write("El valor acumulado es menor a 0<br>");
} else {
    document.write("El valor acumulado es mayor a 0<br>");
}

// Estructura repetitiva (for)	
let base_triangulo = 0, altura_triangulo = 0, superficie_triangulo = 0, superficies_mayor_12 = 0;
for(i = 1; i <= 3; i++) {
    base_triangulo =  parseInt(prompt("Ingrese la base del triángulo n°" + i));
    altura_triangulo =  parseInt(prompt("Ingrese la base del triángulo n°" + i));
    superficie_triangulo = (base_triangulo*altura_triangulo)/2;
    if(superficie_triangulo > 12) {
        superficies_mayor_12++;
    }
    document.write("La base del triángulo ", i, " es de: ", base_triangulo, "<br>");
    document.write("La altura del triángulo ", i, " es de: ", altura_triangulo, "<br>");
    document.write("La superficie del triángulo ", i, " es de: ", superficie_triangulo, "<br>");
}
document.write("La cantidad de triangulos cuya superficie sea mayor a 12 es de: ", superficies_mayor_12);