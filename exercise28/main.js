function fetchuserdata (){
  return new Promise((resolve,reject))(
    setTimeout(()=>{
      const success = true;
      if(success){
        resolve({id:3 , name:"mohamed"})
      }else{
        reject("failed to fetch user data")
      }
    },3000)
  )
};

async function displayUserData() {
  try{
    const user = fetchuserdata();
  console.log(user); 
  }catch(err){
    console.log("failed to fetch user data")
  }
}
displayUserData()