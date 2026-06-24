let min = 0; // Initial index for fetching users
let max = 12;

async function fetchUsers() {
  try {
    const res = await fetch("/api/users");
    const users = await res.json();
    console.log("Fetched users data:", users);

    const grid = document.getElementById("users-grid");

    grid.innerHTML = users
      .slice(min, max)
      .map(
        (user) => `
    <div class="col-md-4 mb-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Name: ${user.name}</h5>
        <p class="card-text">Username: ${user.username}</p>
        <p class="card-text">Email: ${user.email}</p>
        <p class="card-text">Industry Tags: ${user.industry_tags.join(", ")}</p>
        <p class="card-text">Location: ${user.location}</p>
        <p class="card-text">Bio: ${user.bio}</p>
        <!-- <a href="/profile.html?username=${user.username}" class="btn btn-primary">View Profile</a> -->
      </div>
    </div>
  </div>
  `,
      )
      .join("");
  } catch (err) {
    console.error("Failed to fetch users data:", err);
    throw err;
  }
}

fetchUsers();

async function loadMoreUsers() {
  min = max;
  max += 12;
  await fetchUsers();
}

async function loadPrevUsers() {
  if (min > 0) {
    max = min;
    min -= 12;
    await fetchUsers();
  }
}

if (document.getElementById("loadMoreBtn")) {
  document
    .getElementById("loadMoreBtn")
    .addEventListener("click", loadMoreUsers);
}

if (document.getElementById("loadPrevBtn")) {
  document
    .getElementById("loadPrevBtn")
    .addEventListener("click", loadPrevUsers);
}
