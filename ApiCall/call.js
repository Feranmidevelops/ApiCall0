
async function fetchAPI() {
  try {
    const response = await fetch("http://localhost:3000/");
    const data = await response.json();

    document.getElementById("email").textContent = data.email;
    document.getElementById("datetime").textContent = data.current_datetime;
    document.getElementById("github").href = data.github_url;
    document.getElementById("github").textContent = "View GitHub Repo";
  } catch (error) {
    console.error("Error fetching API data:", error);
  }
}

fetchAPI();
