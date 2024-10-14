function fizzbuz() {
   let cont=0;
   const numero=Number(prompt("Ingrese numero"))
   
    for(let i=0;cont<numero;i++){
    cont=cont+1;

    if (cont%3==0 && cont%5==0){ 
        console.log("Fizz buzz")}

    if(cont%3==0){
        console.log("Fizz")}

        if(cont%5==0){
        console.log("buzz")}

        else{ console.log(cont)
    }}}
fizzbuz();