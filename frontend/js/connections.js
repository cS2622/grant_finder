function Connections() {
  const me = {};

  me.refreshConnections = async () => {
    try {
      const res = await fetch("/api/connections");
    } catch (err) {
      console.error("Failed to fetch connections data:", err);
      throw err;
    }
    const data = await res.json();
  };
  return me;
}

const myConnections = Connections();

myConnections.refreshConnections(); 
