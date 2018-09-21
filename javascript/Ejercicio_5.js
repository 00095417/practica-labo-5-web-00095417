function areaCirculo(radio){
    let area;
    if (radio>0){
        area=(Math.sqrt(radio)*Math.PI);
        console.log("radio: "+radio);
        console.log("area: "+ area);
    }else{
        console.log("ERROR: El radio debe ser mayor que cero")
    }
}