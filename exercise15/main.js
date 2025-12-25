 const people = [
    {name:"mohamed", age:20 ,city:"afgooye" },
    {name:"mohamed", age:20 ,city:"afgooye" },
    {name:"mohamed", age:20 ,city:"afgooye" }
 ];

 for (const person of people){
    console.log("person")
 }
 for (const key in person){
    console.log(key + ": " + person[key]);
 }