const params = new URLSearchParams(window.location.search);
const uname = params.get("username"); // get the username from the URL query parameter

if (uname) {
  const res = await fetch(`/api/users/${uname}`);
  const user = await res.json();

  document.getElementById("username").value = user.username;
  document.getElementById("username").setAttribute("readonly", true);
  document.getElementById("name").value = user.name;
  document.getElementById("email").value = user.email;
  document.getElementsByName("inTags")[0].value = user.industry_tags[0];
  document.getElementsByName("inTags")[1].value = user.industry_tags[1];
  document.getElementsByName("inTags")[2].value = user.industry_tags[2];
  document.getElementsByName("inTags")[3].value = user.industry_tags[3];
  document.getElementById("location").value = user.location;
  document.getElementById("bio").value = user.bio;
}

// add/update user
document.getElementById("submitBtn").addEventListener("click", async (e) => {
  e.preventDefault();
  // DELETETHIS
  console.log("submitted button, uname:", uname);

  const payload = {
    name: document.getElementById("name").value.trim(),
    email: document.getElementById("email").value.trim(),
    industry_tags: [
      document.getElementsByName("inTags")[0].value.trim(),
      document.getElementsByName("inTags")[1].value.trim(),
      document.getElementsByName("inTags")[2].value.trim(),
      document.getElementsByName("inTags")[3].value.trim(),
    ],
    location: document.getElementById("location").value.trim(),
    bio: document.getElementById("bio").value.trim(),
  };

  if (uname) {
    // DELETETHIS
    console.log("payload:", payload);
    console.log("uname:", uname);

    await fetch(`/api/users/${uname}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    window.location.href = `/profile.html?username=${uname}`;

    console.log(`Updated user: ${uname}`);
  } else {
    const newUsername = document.getElementById("username").value.trim();
    await fetch(`/api/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...payload, username: newUsername }),
    });
    window.location.href = `/profile.html?username=${newUsername}`;

    console.log(`Created new user: ${newUsername}`);
  }
});

// delete user
document.getElementById("deleteBtn").addEventListener("click", async (e) => {
  e.preventDefault();

  await fetch(`/api/users/${uname}`, {
    method: "DELETE",
  });
  console.log(`Deleted user: ${uname}`);
  window.location.href = `/profile.html?username=${uname}`;
});
