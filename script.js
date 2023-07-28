async function fetchDataFromAPI() {
  try {
    const response = await fetch("https://catfact.ninja/fact");
    if (!response.ok) {
      throw new Error("API verileri alınamadı.");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}

let texts = document.querySelectorAll(".factList .factItem .factDesription ");

texts.forEach((e) => {
    fetchDataFromAPI().then((data) => {
        if (data) {
            e.innerHTML = data.fact;
        }
      });
  
});
