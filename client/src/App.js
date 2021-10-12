import React from "react";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/test")
      .then((res) => res.json())
      .then((data) => console.log(data.message));
  }, []);

  return (
    <div className="App">
      <p>App be loadded</p>
      <p>{!data ? "Loading..." : data}</p>
    </div>
  );
}

export default App;
