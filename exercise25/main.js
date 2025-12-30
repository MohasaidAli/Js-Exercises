 function blckingcode(){
    alert("click ok");
    return("just you there is no blocking")
};
const result = blckingcode();
console.log(result);
function nonBlockingcode(callback){
    setTimeout(()=>{
        return state ("there is no blocking")
        callback(state)
    },2000);
}
console.log("this code is non blocking")
nonBlockingcode(function(state){
    console.log(state)
})
console.log("again this code is non blocking");