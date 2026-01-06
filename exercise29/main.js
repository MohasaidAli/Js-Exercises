async function fetchjsonData() {
    const response = await fetch("./data.json")
    const data = await response.json()
    console.log("fetched json data", data)
};
fetchjsonData();