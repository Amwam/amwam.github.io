import React from "react";

const liStyle = { paddingBottom: 10 };
function Home() {
  return (
    <div>
      <div>
        <ul>
          <li style={liStyle}>
            Software Engineer @{" "}
            <a href="https://www.wegotpop.com/">We Got POP Ltd</a>
          </li>
          <li style={liStyle}>
            Mentor @ <a href="https://codeyourfuture.co/">Code Your Future</a>
          </li>
          <li style={liStyle}>
            Committer @ <a href="https://github.com/Amwam/">GitHub</a>
          </li>
          <li style={liStyle}>
            Tweeter @ <a href="https://twitter.com/Amwam/">Twitter</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
