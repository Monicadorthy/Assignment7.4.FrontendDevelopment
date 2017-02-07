
function outerfunction(innerfunction){
    //It is a good practice to check if the parameter is actually not null and that it is a function.
    if(innerfunction && (typeof innerfunction =="function")){
        innerfunction();
    }
}
//this calls the outerfunction and sends function to it
outerfunction(function(){
console.log("Hello World from InnerFunction");
});
