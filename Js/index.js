function suma ()
{
    A= parseInt(prompt("Ingrese el primer valor a sumar: "));
    B= parseInt(prompt("Ingrese el segundo valor a sumar: "));
    C=A+B;
    alert("La suma de los numeros es: " +C);
        
}

function triangulo ()
{
    A= parseInt(prompt("Ingrese la base de su triangulo: "));
    B= parseInt(prompt("Ingrese el alto del triangulo: "));
    R=(A*B)/2;
    alert("El Area del Triangulo es: " +R);
}
function operaciones ()
{
    N1= parseInt(prompt("Ingrese el primer numero: "));
    N2= parseInt(prompt("Ingrese el segundo numero: "));
    S=N1+N2 
    alert("El resultado de la suma es: " +S); 
    R=N1-N2
    alert("El resultado de la resta es: " +R);
    M=N1*N2
    alert("El resultado de la multiplicación es: " +M); 
	D=N1/N2
    alert("El resultado de la división es: " +D); 
}
function promedio()
{
    C1= parseInt(prompt("Ingrese la nota 1: "));
    C2= parseInt(prompt("Ingrese la nota 2: "));
    C3= parseInt(prompt("Ingrese la nota 3: "));
    C4= parseInt(prompt("Ingrese la nota 4: "));
    C5= parseInt(prompt("Ingrese la nota 5: "));
    C6= parseInt(prompt("Ingrese la nota 6: "));
    C7= parseInt(prompt("Ingrese la nota 7: "));
    P = (C1+C2+C3+C4+C5+C6+C7)/7
    if (P>=6.3) {
        alert("Aprobo: " +P);
    }   else {
        alert("No aprobo: " +P);
    }  
}
function menor ()
{
    N1= parseInt(prompt("Digite el primer numero: "));
    N2= parseInt(prompt("Digite el segundo numero: "));
    N3= parseInt(prompt("Digite el tercer numero: "));
    if (N1<N2 & N1<N3) {
        alert("El numero menor es: " +N1);
    }   else if (N2<N1 & N2<N3){
        alert("El numero menor es: " +N2);
    }   else {
        alert("El numero menor es: " +N3);
    }
}
function mayor ()
{
    N1= parseInt(prompt("Digite el primer numero: "));
    N2= parseInt(prompt("Digite el segundo numero: "));
    if (N1>N2) {
        alert("El numero mayor es: " +N1);
    }   else {
        alert("El numero mayor es: " +N2);
    }
}
function cuadrado ()
{
    C= parseInt(prompt("Ingrese un numero: "));
    R=C*C;
    alert("La raiz es: " +R);
}
function ganancia ()
{
    C= parseInt(prompt("Ingrese el valor del capital invertido: "));
    A= parseInt(prompt("Ingrese la cantidad de años: "));
    G= 0.023 * 12
	R= (G*A)*C
	RT= R+C
    alert("La ganancia es: " + R + " El total es: " +RT)
}
function kilos ()
{
    K= parseInt(prompt("¿Cuantos kilos de manzana compro? "));
    if (K<=2) {
        T=K*4500
        alert("El descuento es de 0% el total a pagar es: " +T);
       
    }   else if (K>=3 & K<=5){
        P=K*4500
		D=P*10/100
		T=P-D
        alert("Su descuento es de 10% "+ D +" El total a pagar es: " +T);

    }   else if (K>=6 & K<=9) {
        P=K*4500
		D=P*15/100
		T=P-D
        alert("Su descuento es de 15% "+ D +" El total a pagar es: " +T);

    }   else if (K>=10) {
        P=K*4500
        D=P*20/100
        T=P-D
        alert("Su descuento es de 20% "+ D +" El total a pagar es: " +T);
    }
}
function medidas ()
{
    C= 2.54
    M= 0.0254
    K= 0.00025
    N1= parseInt(prompt("Ingrese el valor: "));
    R=C*N1
    alert("El valor en centimetros es: " +R); 
    R=0
    R=M*N1
    alert("El valor en metros es: " +R);
    R=0
    R=K*N1
    alert("El valor en kilometros es: " +R); 
}
function par ()
{
    N1= parseInt(prompt("Ingrese un numero: "));
    if (N1 % 2 == 0){
        alert("El numero " +N1+ " es Par")
    }else {
        alert("El numero " +N1+ " es Impar");  
    }
}
function mtkt ()
{
    N1= parseInt(prompt("Ingrese la cantidad de metros a convertir: "));
    R= (N1 * 1)/1000;
    alert(N1+ " metros converidos a kilometros es: " +R+ " kilometros");  
}