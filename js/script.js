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
let lados_cuadrado = parseFloat(
  prompt("Ingrese el tamaño de los lados del cuadrado:")
);
document.write("El tamaño del cuadrado es: ", lados_cuadrado, "<br>");
document.write("El perímetro del cuadrado es: ", lados_cuadrado * 4, "<br>");

// 2.
let num1 = parseInt(prompt("Ingrese el primer número"));
let num2 = parseInt(prompt("Ingrese el segundo número"));
let num3 = parseInt(prompt("Ingrese el tercer número"));
let num4 = parseInt(prompt("Ingrese el cuarto número"));
document.write(
  "Los números ingresados son:",
  num1,
  ", ",
  num2,
  ", ",
  num3,
  ", ",
  num4,
  ", <br>"
);
document.write(
  "Los suma de ",
  num1,
  " y ",
  num2,
  " es igual a ",
  num1 + num2,
  ", <br>"
);
document.write(
  "El producto entre ",
  num3,
  " y ",
  num4,
  " es igual a ",
  num3 + num4,
  ", <br>"
);

// 3.
let valores_numericos = [];
for (i = 1; i <= 4; i++) {
  valores_numericos.push(parseInt(prompt("Ingrese el número " + i)));
}
let suma_numeros = 0;
let producto_numeros = 1;
document.write("Los números ingresados son:");
valores_numericos.forEach((numero) => {
  document.write(numero, " ");
  suma_numeros += numero;
  producto_numeros *= numero;
});
document.write(
  "<br>",
  "La suma de los valores es igual a ",
  suma_numeros,
  "<br>"
);
document.write(
  "El producto de los valores es igual a ",
  producto_numeros,
  "<br>"
);

// 4.
let precio_producto = parseInt(
  prompt("Ingrese el precio del producto que comprará el cliente:")
);
let cantidad_producto = parseInt(
  prompt("Ingrese la cantidad del producto que compra:")
);
document.write(
  "El comprador abonará ",
  precio_producto * cantidad_producto,
  "<br>"
);

// Estucturas Condicionales Simples
// 1.
let nota1 = parseInt(prompt("Ingrese la primer nota del alumno:"));
let nota2 = parseInt(prompt("Ingrese la segunda nota del alumno:"));
let nota3 = parseInt(prompt("Ingrese la tercer nota del alumno:"));
let promedio_notas = (nota1 + nota2 + nota3) / 3;
if (promedio_notas >= 7) {
  document.write(
    "El alumno con un promedio de notas de ",
    promedio_notas,
    " promocionó la materia"
  );
}

// 2.
let clave1 = prompt("Ingrese la primer clave");
let clave2 = prompt("Ingrese la segunda clave");
if (clave1 == clave2) document.write("Las claves son iguales");
else document.write("Las claves no son iguales");

// Estructuras Condicionales Compuestas
// 1.
let numero1 = parseInt(prompt("Ingrese el primer número"));
let numero2 = parseInt(prompt("Ingrese el segundo número"));
if (numero1 > numero2) {
  document.write(
    "La suma entre ",
    numero1,
    " y ",
    numero2,
    " es igual a ",
    numero1 + numero2,
    "<br>"
  );
  document.write(
    "La diferencia entre ",
    numero1,
    " y ",
    numero2,
    " es igual a ",
    numero1 - numero2,
    "<br>"
  );
} else {
  document.write(
    "El producto entre ",
    numero1,
    " y ",
    numero2,
    " es igual a ",
    numero1 * numero2,
    "<br>"
  );
  document.write(
    "La división entre ",
    numero1,
    " y ",
    numero2,
    " es igual a ",
    numero1 / numero2,
    "<br>"
  );
}

// 2.
let nota_alumno1 = parseInt(prompt("Ingrese la primer nota del alumno:"));
let nota_alumno2 = parseInt(prompt("Ingrese la segunda nota del alumno:"));
let nota_alumno3 = parseInt(prompt("Ingrese la tercer nota del alumno:"));
let promedio_notas_alumno = (nota_alumno1 + nota_alumno2 + nota_alumno3) / 3;

if (promedio_notas_alumno > 4) {
  document.write("Regular<br>");
} else {
  document.write("Reprobado<br>");
}
// 3.
let numero = parseInt(prompt("Ingrese un número entre 1 y 99:"));
if (numero <= 0) {
  document.write("Ingrese un número mayor a 0<br>");
} else if (numero < 10) {
  document.write("El número posee un solo dígito<br>");
} else if (numero < 100) {
  document.write("El número posee dos dígitos<br>");
} else {
  document.write("Ingrese un número positivo menor a 99<br>");
}

// Estructuras condicionales anidadas
// 1.
let numero_teclado1 = parseInt(prompt("Ingrese el primer número"));
let numero_teclado2 = parseInt(prompt("Ingrese el segundo número"));
let numero_teclado3 = parseInt(prompt("Ingrese el tercero número"));

document.write(
  "El mayor número entre ",
  numero_teclado1,
  ", ",
  numero_teclado2,
  " y ",
  numero_teclado3,
  " es:"
);
if (numero_teclado1 > numero_teclado2) {
  if (numero_teclado1 > numero_teclado3) {
    document.write(numero_teclado1);
  } else {
    document.write(numero_teclado3);
  }
} else {
  if (numero_teclado2 > numero_teclado3) {
    document.write(numero_teclado2);
  } else {
    document.write(numero_teclado3);
  }
}
document.write("<br>");

// 2.
numero = parseInt(prompt("Ingrese un número"));
if (numero == 0) {
  document.write("El número es cero.<br>");
} else if (numero < 0) {
  document.write("El número es negativo.<br>");
} else {
  document.write("El número es positivo.<br>");
}

// 3.
numero = parseInt(prompt("Ingrese un número positivo de hasta 3 cifras"));
if (numero < 0) {
  document.write("Debe ingresar un número positivo<br>");
} else if (numero < 10) {
  document.write("El número tiene 1 cifra<br>");
} else if (numero < 100) {
  document.write("El número tiene 2 cifras<br>");
} else if (numero < 1000) {
  document.write("El número tiene 3 cifras<br>");
} else {
  document.write("El número debe de tener menos de 3 cifras<br>");
}

// 4.
let nombre_postulante = prompt("Ingrese el nombre del postulante:");
let cantidad_preguntas_postulante = prompt(
  "Ingrese la cantidad de preguntas realizadas:"
);
let cantidad_preguntas_correctas_postulante = prompt(
  "Ingrese la cantidad de preguntas contestadas correctamente por el postulante:"
);
let porcentaje_correctas_postulante =
  cantidad_preguntas_correctas_postulante / cantidad_preguntas_postulante;

document.write("El postulante ", nombre_postulante, " tiene un nivel:");
if (porcentaje_correctas_postulante >= 0.9) {
  document.write("Nivel Superior");
} else if (porcentaje_correctas_postulante >= 0.75) {
  document.write("Nivel Medio");
} else if (porcentaje_correctas_postulante >= 0.5) {
  document.write("Nivel Regular");
} else {
  document.write("Fuera de nivel");
}

// Operadores lógicos && (y) en las estructuras condicionales.
// 1.
let dia_navidad = parseInt(prompt("Ingrese el día:"));
let mes_navidad = parseInt(prompt("Ingrese el mes:"));
let año_navidad = parseInt(prompt("Ingrese el año:"));

if (dia_navidad == 25 && mes_navidad == 12) {
  document.write("La fecha corresponde a la navidad del año ", año_navidad);
} else {
  document.write("La fecha no corresponde a la navidad<br>");
}
// 2.
let numero3;
numero1 = parseInt(prompt("Ingrese el primer número"));
numero2 = parseInt(prompt("Ingrese el segundo número"));
numero3 = parseInt(prompt("Ingrese el tercer número"));

if (numero1 == numero2 && numero2 == numero3) {
  document.write(
    "La suma del primero por el segundo, y su producto por el tercero es igual a: ",
    (numero1 + numero2) * numero3,
    "<br>"
  );
}

// 3.
numero1 = parseInt(prompt("Ingrese el primer número"));
numero2 = parseInt(prompt("Ingrese el segundo número"));
numero3 = parseInt(prompt("Ingrese el tercer número"));

if (numero1 < 10 && numero2 < 10 && numero3 < 10) {
  document.write("Todos los números son menores a 10<br>");
}
// 4.
let x = parseInt(prompt("Ingrese la primera coordenada del punto"));
let y = parseInt(prompt("Ingrese la segunda coordenada del punto"));
document.write("El punto (", x, ", ", y, ") se encuentra en el ");
if (x > 0) {
  if (y > 0) {
    document.write("primer cuadrante.<br>");
  } else {
    document.write("cuarto cuadrante.<br>");
  }
} else {
  if (y > 0) {
    document.write("segundo cuadrante.<br>");
  } else {
    document.write("tercer cuadrante.<br>");
  }
}
// 5.
let sueldo_operario = parseInt(prompt("Ingrese el sueldo del operario"));
let antiguedad_operario = parseInt(
  prompt("Ingrese los años de antigüedad del operario.")
);
let nuevo_sueldo = sueldo_operario;
if (sueldo_operario < 500 && antiguedad_operario >= 10) {
  nuevo_sueldo += sueldo_operario * 0.2;
  document.write(
    "Se aumentó el sueldo del operario en un 20%, su nuevo sueldo es $",
    nuevo_sueldo,
    "<br>"
  );
} else if (sueldo_operario < 500 && antiguedad_operario < 10) {
  nuevo_sueldo += sueldo_operario * 0.05;
  document.write(
    "Se aumentó el sueldo del operario en un 5%, su nuevo sueldo es $",
    nuevo_sueldo,
    "<br>"
  );
} else if (sueldo_operario > 500) {
  document.write("El sueldo del operario es $", nuevo_sueldo, "<br>");
}

// Operadores lógicos || (o) en las estructuras condicionales.
numero1 = parseInt(prompt("Ingrese el primer número"));
numero2 = parseInt(prompt("Ingrese el segundo número"));
numero3 = parseInt(prompt("Ingrese el tercer número"));

if (numero1 < 10 || numero2 < 10 || numero3 < 10) {
  document.write("Alguno de los números es menor a 10<br>");
} else {
  document.write("Ninguno de los números es menor a 10<br>");
}

// Estructuras switch
let palabra = prompt(
  "Ingrese una de las siguientes palabras: casa, mesa, perro o gato."
);
switch (palabra) {
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
document.write("Los primero 25 multiplos de 11 son: ");
index = 1;
numero = 11;
while (index <= 25) {
  document.write(numero, " ");
  index++;
  numero += 11;
}

// 2.
document.write("Los múltiplos de 8 menores a 500 son: ");
numero = 8;
while (numero < 500) {
  document.write(numero, " ");
  numero += 8;
}
document.write("<br>");

// Concepto de acumulador.
// 1.
let notas_menor_7 = 0,
  notas_mayor_7 = 0,
  nota;
for (i = 1; i <= 10; ++i) {
  nota = parseInt(prompt("Ingrese la nota del alumno n°" + i));
  if (nota >= 7) {
    notas_mayor_7++;
  } else {
    notas_menor_7++;
  }
}
document.write("La cantidad de notas menores a 7 son: ", notas_menor_7, "<br>");
document.write("La cantidad de notas mayores a 7 son: ", notas_mayor_7, "<br>");
// 2.
let alturas_personas = 0,
  promedio_alturas = 0;
for (i = 1; i <= 5; ++i) {
  alturas_personas += parseInt(
    prompt("Ingrese la altura de la persona n°" + i)
  );
}
promedio_alturas = alturas_personas / 5;
document.write(
  "El promedio de las alturas de las 5 personas es de ",
  promedio_alturas,
  "<br>"
);

// 3.
let importe = 0,
  sueldos_mayor_300 = 0,
  sueldos_entre_100_300 = 0;
sueldo_empleado = 0;
for (i = 1; i <= 5; ++i) {
  sueldo_empleado = parseInt(prompt("Ingrese el sueldo del empleado n°" + i));
  if (sueldo_empleado >= 100 && sueldo_empleado <= 300) {
    sueldos_entre_100_300++;
  } else if (sueldo_empleado > 300) {
    sueldos_mayor_300++;
  }
}
document.write(
  "En la empresa, ",
  sueldos_entre_100_300,
  " personas cobran entre $100 y $300.<br>"
);
document.write(
  "En la empresa, ",
  sueldos_mayor_300,
  " personas cobran más de $300.<br>"
);

// 4.
document.write("Los primero 20 multiplos de 5 son: ");
index = 1;
numero = 5;
while (index <= 20) {
  document.write(numero, " ");
  index++;
  numero += 5;
}
document.write("<br>");

// 5.
document.write("Los primero multiplos de 10 menores o iguales a 1500 son: ");
numero = 10;
while (numero <= 1500) {
  document.write(numero, " ");
  numero += 10;
}
document.write("<br>");
// 6.
let lista1 = 0,
  lista2 = 0;
for (i = 1; i <= 3; i++) {
  lista1 += parseInt(prompt("Ingrese el valor" + i + " de la lista1:"));
}
for (i = 1; i <= 3; i++) {
  lista2 += parseInt(prompt("Ingrese el valor" + i + " de la lista2:"));
}

if (lista1 > lista2) {
  document.write("La primer lista es mayor a la segunda.<br>");
} else if (lista1 < lista2) {
  document.write("La segunda lista es mayor a la primera.<br>");
} else {
  document.write("Ambas listas son iguales.<br>");
}

// 7.
let numeros_pares = 0,
  numeros_impares = 0;
for (i = 1; i <= 5; i++) {
  numero = parseInt(prompt("Ingrese el valor n°" + i));
  if (numero % 2 == 0) {
    numeros_pares++;
  } else {
    numeros_impares++;
  }
}
document.write(
  "De los valores ingresados, ",
  numeros_impares,
  " numeros son impares y ",
  numeros_pares,
  " números son pares.<br>"
);

// Estructura repetitiva (do/while)
// 1.
suma_numeros = 0;
numero = 0;
do {
  suma_numeros = numero;
  numero = parseInt(
    prompt(
      "Ingrese un número. Si ingresa un número mayor o igual a 9999 se termina el programa."
    )
  );
} while (numero < 9999);
document.write("El número acumulado es igual a: ", suma_numeros, "<br>");
if (suma_numeros == 0) {
  document.write("El valor acumulado es igual a 0<br>");
} else if (suma_numeros < 0) {
  document.write("El valor acumulado es menor a 0<br>");
} else {
  document.write("El valor acumulado es mayor a 0<br>");
}
// 2.
sumaAcreedores = 0;
do {
  numeroCuenta = parseInt(
    prompt(
      "Ingrese el número de la cuenta. Para finalizar introduzca un número negativo."
    )
  );
  if (numeroCuenta >= 0) {
    nombreCliente = prompt("Ingrese el nombre del cliente");
    saldoActual = parseFloat(prompt("Ingrese el saldo actual"));
    document.write(
      `El cliente ${nombreCliente} con el número de cuenta ${numeroCuenta} tiene su cuenta con estado `
    );

    if (saldoActual > 0) {
      document.write("Acreedor.");
      sumaAcreedores += saldoActual;
    } else if (saldoActual < 0) {
      document.write("Deudor.");
    } else {
      document.write("Nulo.");
    }
    document.write("<br>");
  }
} while (numeroCuenta >= 0);
document.write(`El saldo total de los acreedores es ${sumaAcreedores}`);

// 3.
cantidadCenso = 0;
cantidadVarones = 0;
cantidadVaronesEntre16y65 = 0;
cantidadMujeres = 0;
do {
  numeroDocumento = parseInt(
    prompt("Ingreso el número del documento. Para finalizar ingrese 0.")
  );
  if (numeroDocumento !== 0) {
    cantidadCenso++;
    let edad = parseInt(prompt("Ingrese la edad."));
    let sexo = prompt("Ingrese el sexo.");
    if (sexo.toLowerCase() === "masculino") {
      cantidadVarones++;
      if (edad >= 16 && edad <= 65) cantidadVaronesEntre16y65++;
    } else if (sexo.toLowerCase() === "femenino") cantidadMujeres++;
  }
} while (numeroDocumento !== 0);

document.write(`La cantidad de gente censada es de ${cantidadCenso}<br>`);
document.write(`La cantidad de varones es de ${cantidadVarones}<br>`);
document.write(
  `La cantidad de varones entre 16 y 65 es de ${cantidadVaronesEntre16y65}<br>`
);
document.write(`La cantidad de mujeres es de ${cantidadMujeres}<br>`);

// Estructura repetitiva (for)
// 1.
let base_triangulo = 0,
  altura_triangulo = 0,
  superficie_triangulo = 0,
  superficies_mayor_12 = 0;
for (i = 1; i <= 3; i++) {
  base_triangulo = parseInt(prompt("Ingrese la base del triángulo n°" + i));
  altura_triangulo = parseInt(prompt("Ingrese la base del triángulo n°" + i));
  superficie_triangulo = (base_triangulo * altura_triangulo) / 2;
  if (superficie_triangulo > 12) {
    superficies_mayor_12++;
  }
  document.write(
    "La base del triángulo ",
    i,
    " es de: ",
    base_triangulo,
    "<br>"
  );
  document.write(
    "La altura del triángulo ",
    i,
    " es de: ",
    altura_triangulo,
    "<br>"
  );
  document.write(
    "La superficie del triángulo ",
    i,
    " es de: ",
    superficie_triangulo,
    "<br>"
  );
}
document.write(
  "La cantidad de triangulos cuya superficie sea mayor a 12 es de: ",
  superficies_mayor_12
);
// 2.
sumaNumeros = 0;
for (let i = 0; i < 10; i++) {
  numero = parseInt(prompt("Ingrese un número."));

  if (i >= 5) sumaNumeros += numero;
}

document.write(`La suma de los últimos 5 números es ${sumaNumeros}<br>`);
// 3.
document.write("La tabla del 5 hasta el 50 es:");
for (let i = 5; i <= 50; i += 5) {
  document.write(" ", i);
}
document.write("<br>");
// 4.
numeroTabla = 0;
do {
  numeroTabla = parseInt(prompt("Ingrese un número del 1 al 10."));
} while (numeroTabla < 1 && numeroTabla > 10);
document.write(`Los primeros 12 números de la tabla del ${numeroTabla} es:`);
for (let i = 0, j = numeroTabla; i < 12; i++, j += numeroTabla) {
  document.write(" ", j);
}
document.write("<br>");

// 5.
cantidadEquilatero = 0;
cantidadIsosceles = 0;
cantidadEscaleno = 0;
for (let i = 0; i < 4; i++) {
  lado1 = parseInt(prompt("Ingrese el primer lado del triángulo."));
  lado2 = parseInt(prompt("Ingrese el segundo lado del triángulo."));
  lado3 = parseInt(prompt("Ingrese el tercer lado del triángulo."));

  if (lado1 == lado2 && lado2 == lado3) {
    cantidadEquilatero++;
    document.write(`El triángulo ${i} es equilátero<br>`);
  } else if (lado1 == lado2 || lado2 == lado3 || lado1 == lado3) {
    cantidadIsosceles++;
    document.write(`El triángulo ${i} es isósceles<br>`);
  } else {
    cantidadEscaleno++;
    document.write(`El triángulo ${i} es escaleno<br>`);
  }
}
document.write(
  `La cantidad de triángulos equiláteros es: ${cantidadEquilatero}<br>`
);
document.write(
  `La cantidad de triángulos isósceles es: ${cantidadIsosceles}<br>`
);
document.write(
  `La cantidad de triángulos escalenos es: ${cantidadEscaleno}<br>`
);

// 6.
cantidadCoordenadas = parseInt(
  prompt("¿Cuanta cantidad de puntos se ingresarán?")
);
cantidadPrimerCuadrante = 0;
cantidadSegundoCuadrante = 0;
cantidadTercerCuadrante = 0;
cantidadCuartoCuadrante = 0;
for (let i = 0; i < cantidadCoordenadas; i++) {
  x = parseInt(prompt("Ingrese la coordenada x"));
  y = parseInt(prompt("Ingrese la coordenada y"));
  if (x >= 0 && y >= 0) {
    cantidadPrimerCuadrante++;
  } else if (x <= 0 && y >= 0) {
    cantidadSegundoCuadrante++;
  } else if (x <= 0 && y <= 0) {
    cantidadTercerCuadrante++;
  } else if (x >= 0 && y <= 0) {
    cantidadCuartoCuadrante++;
  }
}

document.write(
  `La cantidad de coordenadas en el primer cuadrante es ${cantidadPrimerCuadrante}<br>`
);
document.write(
  `La cantidad de coordenadas en el segundo cuadrante es ${cantidadSegundoCuadrante}<br>`
);
document.write(
  `La cantidad de coordenadas en el tercer cuadrante es ${cantidadTercerCuadrante}<br>`
);
document.write(
  `La cantidad de coordenadas en el cuarto cuadrante es ${cantidadCuartoCuadrante}<br>`
);

// 7.
cantidadPositivos = 0;
cantidadNegativos = 0;
cantidadMultiplos15 = 0;
sumaPares = 0;
for (let i = 0; i < 10; i++) {
  numero = parseInt(prompt("Ingrese un número"));
  if (numero > 0) cantidadPositivos++;
  else if (numero < 0) cantidadNegativos++;

  if (numero % 15 == 0) cantidadMultiplos15++;

  if (numero % 2 == 0) sumaPares += numero;
}
document.write(`La cantidad de números positivos es ${cantidadPositivos}<br>`);
document.write(`La cantidad de números negativos es ${cantidadNegativos}<br>`);
document.write(
  `La cantidad de números multiplos de 15 es ${cantidadMultiplos15}<br>`
);
document.write(`La cantidad acumulada de números pares es ${sumaPares}<br>`);

// Funciones
function mostrarSecuencia() {
  const menor = parseInt(prompt("Ingrese el menor número"));
  const mayor = parseInt(prompt("Ingrese el mayor número"));

  if (mayor <= menor) {
    document.write("El valor mayor debe ser mayor al menor<br>");
    return;
  }

  document.write(`Secuencia de números, desde ${menor} hasta ${mayor}:`);
  for (let i = menor; i <= mayor; i++) document.write(" ", i);
  document.write("<br>");
}

mostrarSecuencia();
// Funciones con parámetros
// 1.
function menorDeTres(numero1, numero2, numero3) {
  let menor;
  if (numero1 < numero2) {
    if (numero1 < numero3) {
      menor = numero1;
    } else {
      menor = numero3;
    }
  } else {
    if (numero2 < numero3) {
      menor = numero2;
    } else {
      menor = numero3;
    }
  }

  document.write(`El menor número es ${menor}<br>`);
}

// 2.
function mostrarMenorAMayor(numero1, numero2, numero3) {
  let numeros = [numero1, numero2, numero3];
  numeros.sort((x, y) => x - y);
  document.write("Los números ordenados de menor a mayor son:");
  numeros.forEach((numero) => document.write(" ", numero));
  document.write("<br>");
}

mostrarMenorAMayor(20, 12, 5);
// Funciones que retornan un valor.
// 1.
function menorDeTres(numero1, numero2, numero3) {
  let menor;

  if (numero1 < numero2) {
    if (numero1 < numero3) {
      menor = numero1;
    } else {
      menor = numero3;
    }
  } else {
    if (numero2 < numero3) {
      menor = numero2;
    } else {
      menor = numero3;
    }
  }

  return menor;
}
// 2.
function perimetroCuadrado(lado) {
  return lado * 4;
}
// 3.
function cantidadDigitosNumEntero(numero) {
  let cantidadDigitos = 1;
  while (numero > 10) {
    numero /= 10;
    cantidadDigitos++;
  }
  return cantidadDigitos;
}
cantidadDigitos = cantidadDigitosNumEntero(
  parseInt(prompt("Ingrese un número"))
);
document.write(cantidadDigitos);
// 4.
function promedioTresPersonas(numero1, numero2, numero3) {
  return (numero1 + numero2 + numero3) / 3;
}
// 5.
function sumaCincoValores() {
  let suma = 0;
  for (let i = 0; i < 5; i++) {
    suma += parseInt(prompt(`Ingrese el número entero n°${i}`));
  }
  return suma;
}

document.write(sumaCincoValores());

// Clase Date
// 1.
mesActual = new Date().getMonth();
cuatrimestreActual = Math.floor(new Date().getMonth() / 4 + 1);
document.write(
  `El cuatrimestre en que nos encontramos es ${cuatrimestreActual} <br>`
);
// 2.
function obtenerStringDia(numeroDia) {
  let stringDia;
  switch (numeroDia) {
    case 1:
      stringDia = "Lunes";
      break;
    case 2:
      stringDia = "Martes";
      break;
    case 3:
      stringDia = "Miercoles";
      break;
    case 4:
      stringDia = "Jueves";
      break;
    case 5:
      stringDia = "Viernes";
      break;
    case 6:
      stringDia = "Sabado";
      break;
    case 0:
      stringDia = "Domingo";
      break;
  }
  return stringDia;
}

function obtenerStringMes(numeroDia) {
  let stringDia;
  switch (numeroDia) {
    case 0:
      stringDia = "Enero";
      break;
    case 1:
      stringDia = "Febrero";
      break;
    case 2:
      stringDia = "Marzo";
      break;
    case 3:
      stringDia = "Abril";
      break;
    case 4:
      stringDia = "Mayo";
      break;
    case 5:
      stringDia = "Junio";
      break;
    case 6:
      stringDia = "Julio";
      break;
    case 7:
      stringDia = "Agosto";
      break;
    case 8:
      stringDia = "Septiembre";
      break;
    case 9:
      stringDia = "Octubre";
      break;
    case 10:
      stringDia = "Noviembre";
      break;
    case 11:
      stringDia = "Diciembre";
      break;
  }
  return stringDia;
}

function mostrarFechaActual() {
  const fechaActual = new Date();
  let stringDia = obtenerStringDia(fechaActual.getDay());
  let dia = fechaActual.getDate();
  let stringMes = obtenerStringMes(fechaActual.getMonth());
  let año = fechaActual.getFullYear();

  return `Hoy es ${stringDia} ${dia} de ${stringMes} de ${año}`;
}

document.write(mostrarFechaActual());

// Clase Array
// 1.
let vector = Array(8);
for (let i = 0; i < vector.length; i++) {
  vector[i] = parseInt(
    prompt(`Ingrese un número para el vector, con índice ${i}`)
  );
}
valoresAcumuladosVector = 0;
valoresAcumuladosMayor36Vector = 0;
cantidadMayor50 = 0;

document.write("Valores del Vector:");
vector.forEach((valor) => {
  document.write(` ${valor}`);
  valoresAcumuladosVector += valor;
  if (valor > 36) valoresAcumuladosMayor36Vector += valor;
  if (valor > 50) cantidadMayor50++;
});
document.write("<br>");

document.write(`Valores Acumulados: ${valoresAcumuladosVector} <br>`);
document.write(
  `Valores Acumulados Mayor a 36: ${valoresAcumuladosMayor36Vector} <br>`
);
document.write(`Cantidad de Valores Mayores a 50: ${cantidadMayor50} <br>`);
// 2.
let cantidadElementosVector1 = parseInt(
  prompt("Ingrese la cantidad de elementos que tendrá vector 1")
);
let cantidadElementosVector2 = parseInt(
  prompt("Ingrese la cantidad de elementos que tendrá vector 2")
);
let array1 = new Array(cantidadElementosVector1)
  .fill()
  .map((_, i) => parseInt(prompt(`Ingrese el número ${i} para el vector 1`)));
let array2 = new Array(cantidadElementosVector2)
  .fill()
  .map((_, i) => parseInt(prompt(`Ingrese el número ${i} para el vector 2`)));

let menorLongitudVector =
  array1.length < array2.length ? array1.length : array2.length;
let mayorLongitudVector =
  array1.length > array2.length ? array1.length : array2.length;
let arrayMasLargo = array1.length > array2.length ? 1 : 2;

let sumaArray = new Array(mayorLongitudVector).fill().map((_, i) => {
  if (i < menorLongitudVector) {
    return array1[i] + array2[i];
  } else {
    if (arrayMasLargo == 1) {
      return array1[i];
    } else {
      return array2[i];
    }
  }
});

document.write(`Valores Array 1 de longitud ${array1.length}: `);
array1.forEach((valor) => {
  document.write(` ${valor}`);
});
document.write("<br>");
document.write(`Valores Array 2 de longitud ${array2.length}: `);
array2.forEach((valor) => {
  document.write(` ${valor}`);
});
document.write("<br>");
document.write(`Vector suma resultante: `);
sumaArray.forEach((valor) => {
  document.write(` ${valor}`);
});
document.write("<br>");

// Clase Math
// 1.
numero = parseInt(prompt("Ingrese un número"));
document.write(
  `El número ${numero} elevado a la tercer potencia es igual a ${Math.pow(
    numero,
    3
  )}`
);
// 2.
numero = parseInt(prompt("Ingrese un número"));
document.write(
  `La raiz cuadrada del número ${numero} es igual a ${Math.sqrt(numero)}`
);

// Clase String
// 1. 2.
stringTeclado = "";
strings = "";
do {
  stringTeclado = prompt("Ingrese un nombre. Para finalizar introduzca 'fin'.");
  if (stringTeclado.toLowerCase() !== "fin") strings += " " + stringTeclado;
} while (stringTeclado.toLowerCase() !== "fin");

document.write("Los nombres ingresados son:", strings);
// 3.
frase = prompt("Ingrese una frase");
palabraClave = prompt("Ingrese la palabra clave a buscar");
ubicacionPalabraClave = frase.search(palabraClave);
if (ubicacionPalabraClave === -1) {
  document.write(
    `La palabra clave '${palabraClave}' no se encuentra en la frase`
  );
} else {
  document.write(
    `La palabra clave '${palabraClave}' se encuentra en la posición '${ubicacionPalabraClave}'`
  );
}
// 4. Ej: Sé verlas al revés
frasePalindromo = prompt("Ingrese una palabra o frase");
cantidadBusqueda = Math.ceil(frasePalindromo.length / 2);
esPalindromo = true;
fasePalindromoMinuscula = frasePalindromo.toLowerCase();
for (
  let i = 0, j = frasePalindromo.length - 1;
  i < cantidadBusqueda;
  i++, j--
) {
  console.log(fasePalindromoMinuscula[i], fasePalindromoMinuscula[j]);
  if (fasePalindromoMinuscula[i] === " ") i++;
  if (fasePalindromoMinuscula[j] === " ") j--;
  if (fasePalindromoMinuscula[i] !== fasePalindromoMinuscula[j]) {
    esPalindromo = false;
    break;
  }
}
document.write(
  `La fase '${frasePalindromo}' ${esPalindromo ? "" : "no"} es palíndromo.<br>`
);
// 5.
email = prompt("Ingrese un email");

function tieneArroba(string) {
  return string.includes("@");
}

document.write(
  `La dirección ${email} ${tieneArroba(email) ? "" : "no"} contine '@' <br>`
);
// 6.
stringTeclado = prompt("Ingrese un texto");

function obtenerPrimeraMitadString(string) {
  return string.slice(0, string.length / 2);
}

function obtenerUltimoCaracterString(string) {
  return string.charAt(string.length - 1);
}

function invertirString(string) {
  let nuevoString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    nuevoString += string.charAt(i);
  }
  return nuevoString;
}

function separarGuionesString(string) {
  let nuevoString = "";
  for (let i = 0; i < string.length; i++) {
    nuevoString += string.charAt(i) + "-";
  }
  return nuevoString;
}

function cantidadVocalesString(string) {
  let cantidadVocales = 0;
  for (let i = 0; i < string.length; i++) {
    let caracter = string.charAt(i);
    if (caracter.match("[aeiou]")) cantidadVocales++;
  }
  return cantidadVocales;
}

document.write(`Del texto ${stringTeclado} se tiene:<br>`);
document.write("<ul>");
document.write(
  `<li>La primera mitad: ${obtenerPrimeraMitadString(stringTeclado)}</li>`
);
document.write(
  `<li>El último caracter: ${obtenerUltimoCaracterString(stringTeclado)}</li>`
);
document.write(
  `<li>El string invertido: ${invertirString(stringTeclado)}</li>`
);
document.write(
  `<li>Separar los carácteres por guiones: ${separarGuionesString(
    stringTeclado
  )}</li>`
);
document.write(
  `<li>Cantidad de vocales: ${cantidadVocalesString(stringTeclado)}</li>`
);
document.write("</ul><br>");
// 7.
stringTeclado = prompt("Ingrese una oración");
document.write("Se ingresó:<br>");
stringTeclado.split(" ").forEach((palabra) => {
  document.write(`${palabra}<br>`);
});
// Programación orientada a objetos en JavaScript
class suma {
  constructor() {
    this.valor1 = 0;
    this.valor2 = 0;
  }

  primerValor(valor) {
    this.valor1 = valor;
  }

  segundoValor(valor) {
    this.valor2 = valor;
  }

  retornarResultado() {
    return this.valor1 + this.valor2;
  }
}

let s = new suma();
s.primerValor(10);
s.segundoValor(20);
document.write("La suma de los valores es:" + s.retornarResultado());

// Definición de Varias Clases
class Persona {
  constructor() {
    this.obtenerDatosPorTeclado();
  }

  obtenerDatosPorTeclado() {
    this.nombre = prompt("Ingrese el nombre de la persona");
    this.edad = parseInt(prompt(`Ingrese la edad de ${this.nombre}`));
  }
}

class Empresa {
  constructor(edad_tope) {
    this.edad_tope = edad_tope;
  }

  personaEstaHabilitado(persona) {
    return persona.edad <= this.edad_tope;
  }

  mostrarMensajeInhabilitado(persona) {
    document.write(
      `${persona.nombre} no se encuentra habilitado para la empresa, supera la edad tope de ${this.edad_tope} <br>`
    );
  }
}

const listaPersonas = Array(3)
  .fill()
  .map(() => new Persona());

const empresa1 = new Empresa(60);
let cantidadInhabilitadas = 0;
listaPersonas.forEach((persona) => {
  if (!empresa1.personaEstaHabilitado(persona)) {
    empresa1.mostrarMensajeInhabilitado(persona);
    cantidadInhabilitadas++;
  }
});

if (cantidadInhabilitadas > 0) {
  document.write(`Hay ${cantidadInhabilitadas} personas no habilitadas <br>`);
}

// Vectores con componentes de tipo objeto.
vectorPersona = Array(4)
  .fill()
  .map(() => new Persona());

mayorEdad = 0;
cantidadMayorEdad = 0;
vectorPersona.forEach((persona) => {
  edad = persona.edad;
  if (edad > mayorEdad) {
    mayorEdad = edad;
    cantidadMayorEdad = 1;
  } else if (edad == mayorEdad) {
    cantidadMayorEdad++;
  }
});

document.write(`La mayor edad es ${mayorEdad}<br>`);
document.write(
  `La cantidad de personas con la mayor edad son: ${cantidadMayorEdad}<br>`
);
document.write("Las personas con la mayor edad son: ");
vectorPersona.forEach((persona) => document.write(persona.nombre + " "));
document.write("<br>");

// Creación de objetos literales
jugador = {
  nombre: "Lautaro",
  puntos: 0,
  imprimir: function () {
    document.write(`Nombre:${this.nombre}<br>`);
    document.write(`Puntos:${this.puntos}<br>`);
  },
  aumentarpuntos: function (cant) {
    this.puntos += cant;
  },
  verificarsigano: function () {
    if (this.puntos > 1000) {
      document.write("Ganó<br>");
    }
  },
};

jugador.imprimir();
jugador.verificarsigano();
jugador.aumentarpuntos(1001);
jugador.verificarsigano();
// Array: Diferentes formas de crearlos
diasSemanas = [
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
  "Domingo",
];
diasMes = new Array(
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre"
);
// Array: densos
arrayValoresAleatorios = new Array(10);

for (let i = 0; i < arrayValoresAleatorios.length; i++) {
  numero = Math.ceil(Math.random() * 500);
  arrayValoresAleatorios[i] = numero;
}

arrayMenores250 = new Array();
arrayMayorIgual250 = new Array();

arrayValoresAleatorios.forEach((numero) => {
  if (numero < 250) arrayMenores250.push(numero);
  else arrayMayorIgual250.push(numero);
});

document.write("Valores del array aleatorio:");
arrayValoresAleatorios.forEach((numero) => document.write(numero + " "));
document.write("<br>");
document.write("Valores del array de menores de 250:");
arrayMenores250.forEach((numero) => document.write(numero + " "));
document.write("<br>");
document.write("Valores del array de mayores o igual de 250:");
arrayMayorIgual250.forEach((numero) => document.write(numero + " "));
document.write("<br>");
// Array: no densos o dispersos
let listaPremios = [];
let cantidad = 0;
do {
  let premio = Math.round(Math.random() * 1000);
  listaPremios[premio] = 1000 * (cantidad + 1);
  cantidad++;
} while (cantidad != 11);
for (let i = 0; i < listaPremios.length; i++) {
  if (listaPremios[i] != undefined) {
    document.write(
      "El número " + i + " tiene un premio de " + listaPremios[i] + "<br>"
    );
  }
}
// Array: métodos push y pop
vectorNumeros = new Array();
for (let i = 0; i < 5; i++) {
  vectorNumeros.push(Math.ceil(Math.random() * 1000));
}

sumaUltimos = vectorNumeros.pop() + vectorNumeros.pop();
document.write(
  `La suma de las dos últimas componentes es: ${sumaUltimos} <br>`
);
document.write(`El tamaño final del vector es: ${vectorNumeros.length}<br>`);
document.write("Los elementos actuales del vector:");
vectorNumeros.forEach((numero) => {
  document.write(numero + " ");
});
document.write("<br>");
// Array: métodos sort y reverse
sueldosEmpleados = [];
do {
  sueldo = parseInt(
    prompt("Ingrese el sueldo del empleado. Ingrese 0 para finalizar.")
  );
  if (sueldo > 0) {
    sueldosEmpleados.push(sueldo);
  }
} while (sueldo != 0);

document.write("Los sueldos ordenados de menor a mayor:");
sueldosEmpleados.sort((a, b) => a - b);
sueldosEmpleados.forEach((numero) => {
  document.write(numero + " ");
});
document.write("<br>");
document.write("Los sueldos ordenados de mayor a menor:");
sueldosEmpleados.reverse();
sueldosEmpleados.forEach((numero) => {
  document.write(numero + " ");
});
document.write("<br>");
// Array: método splice
vectorNumeros = [1, 3, 5, 2, 3, 4, 2, 1, 2, 3, 5, 2];
document.write("Vector original:");
vectorNumeros.forEach((numero) => {
  document.write(numero + " ");
});
document.write("<br>");
for (let i = 0; i < vectorNumeros.length; i++) {
  if (vectorNumeros[i] == 2) {
    vectorNumeros.splice(i, 1, 1, 1);
  }
}
document.write("Vector Modificado:");
vectorNumeros.forEach((numero) => {
  document.write(numero + " ");
});
document.write("<br>");
// Array: método join
vectorNombresPersonas = new Array(5)
  .fill("")
  .map(() => prompt("Ingrese el nombre de la persona"));
document.write("Los nombres de las personas son:<br>");
console.log(vectorNombresPersonas);
document.write(vectorNombresPersonas.join("<br>"));
// Array: método toString
let vectorNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let cadena1 = vectorNumeros.toString();
let cadena2 = vectorNumeros.join();
if (cadena1 == cadena2) document.write("Son iguales los dos string<br>");
else document.write("No son iguales los dos string<br>");
// Funciones: objeto arguments
function mayorValorLista(lista) {
  mayorValor = lista[0];
  for (let i = 1; i < lista.length; i++) {
    if (lista[i] > mayorValor) mayorValor = lista[i];
  }
  return mayorValor;
}
lista = [23, 342, 543, 654, 456, 234];
document.write(`El mayor valor de la lista es: ${mayorValorLista(lista)}`);
// Funciones: anidadas
function funcionAnidada1(arg1) {
  let varLocal = 13;
  function funcionAnidada2(arg2) {
    document.write(`Valores: ${arg1} ${arg2} ${varLocal}<br>`);
  }
  funcionAnidada2(23);
}

funcionAnidada1(53);

// Funciones setInterval, clearInterval, setTimeout y clearTimeout
timeout = setTimeout(() => {
  window.location = "https://www.google.com";
}, 10000);

// Operador condicional ?
sueldoBruto = prompt("Ingrese un sueldo bruto de un trabajador");
descuento = sueldoBruto > 10000 ? 10 : 5;
document.write(
  `Al trabajador con un sueldo bruto de ${sueldoBruto} se le aplica un descuento de ${descuento}% <br>`
);
// Expresiones regulares: cuantificadores o repeticiones {x} {x,y} {x,}
string = prompt("Ingrese un número con 3 digitos enteros, y 2 decimales");
const regexDigito = /\d{3}\.\d{2}/g;
resultado = [...string.matchAll(regexDigito)];
if (resultado.length === 1) {
  document.write(
    "Se ingresó un número con 3 digitos enteros y 2 decimakes<br>"
  );
} else {
  document.write("La entrada no cumplió con los requisitos<br>");
}
