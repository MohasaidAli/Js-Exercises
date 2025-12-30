function fetchUserData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;

            if (success) {
                resolve({ id: 6, name: "mathey", city: "afgooye" });
            } else {
                reject("failed to fetch user data");
            }
        }, 3000);
    });
}

fetchUserData()
  .then((data) => console.log("user data", data))
  .catch((error) => console.log("Error:", error));
