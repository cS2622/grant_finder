import { MongoClient } from "mongodb";

// MONGO DB CONNECTION

function MyMongoDB() {
  // helper function to connect to the database and return the client and users collection
  async function getClient() {
    const client = await MongoClient.connect("mongodb://localhost:37017/"); // PLACEHOLDER URL
    const users = client.db("user_management").collection("users");

    return { client, users };
  }
  const me = {};

  me.getUser = async function (filter = {}, { sort = { _id: -1 } } = {}) {
    const { client, users } = await getClient();

    try {
      const cursor = users.find(filter, { sort });
      return await cursor.toArray();
    } catch (err) {
      console.error("myMongoDB: Error fetching user matches:", err);
      throw err;
    } finally {
      await client.close();
    }
  };

  // function to add a user to the user collection -- called when profile form is submitted
  async function addUser(name, username, email, industryTags, location, bio) {
    const { client, users } = await getClient();

    const existingUser = await users.findOne({ username });
    if (existingUser) {
      // user exists, call updateUser instead
      updateUser(
        (name = ""),
        username,
        (email = ""),
        (industryTags = []),
        (location = ""),
        (bio = ""),
      );
    } else {
      const newUser = {
        name: name,
        username: username,
        email: email,
        industryTags: industryTags,
        location: location,
        bio: bio,
      };

      const result = await users.insertOne(newUser);
      console.log(`User created with id: ${result.insertedId}`);
    }

    // function to update a user in the user collection
    async function updateUser(
      name = "",
      username,
      email = "",
      industryTags = [],
      location = "",
      bio = "",
    ) {
      const { client, users } = await getClient();
      const existingUser = await users.findOne({ username });

      const result = await users.updateOne(
        { username: username },
        {
          $set: {
            name: name,
            email: email,
            industryTags: industryTags,
            location: location,
            bio: bio,
          },
        },
      );
      console.log(`User ${result._id} updated`);
    }

    return me;
  }

  const myMongoDB = MyMongoDB();

  export default myMongoDB;
}
