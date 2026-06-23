function Profile() {
  const me = {};

  me.saveProfile = async function (username, industryTags) {
    try {
      const res = await fetch("/api/profile");
    } catch (err) {
      console.error("Failed to fetch profile data:", err);
      throw err;
    }
    const data = await res.json();
  };

  return me;
}

const myProfile = Profile();

myProfile.saveProfile("janedoe", ["technology", "software development"]); //SAMPLE
