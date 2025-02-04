async function fetchAPI() {
  try {
    const response = await fetch("/.netlify/functions/api");
    const data = await response.json();

    const emailElement = document.getElementById("email");
    const datetimeElement = document.getElementById("current_datetime");
    const githubElement = document.getElementById("github_url");

    if (emailElement) {
      emailElement.href = `mailto:${data.email}`;
      emailElement.textContent = "feranmioyetunde@gmail.com";
    }
    if (datetimeElement) {
      datetimeElement.textContent = data.current_datetime;
    }
    if (githubElement) {
      githubElement.href = data.github_url;
      githubElement.textContent = "View GitHub Repo";
    }
  } catch (error) {
    console.error("Error fetching API data:", error);
  }
}

fetchAPI();
