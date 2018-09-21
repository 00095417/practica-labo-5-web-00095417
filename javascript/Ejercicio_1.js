function palindromo(cadena=""){
    let x = cadena.length;
    let cadenaInvertida ="";

    while (x>=0){
        cadenaInvertida += cadena.charAt(x);
        x--;
    }
    
    if(cadena === cadenaInvertida){
        console.log("true");
    }else{
        console.log("false");
    }
}