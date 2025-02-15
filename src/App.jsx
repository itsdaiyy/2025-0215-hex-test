import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(`https://randomuser.me/api/?results=10`);
      setData(res.data.results);
    };
    getData();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="row">
        {data?.map((el) => {
          const { picture, name, email } = el;
          return (
            <div className="col-md-4" key={email}>
              <div className="bg-light p-3">
                <img
                  src={picture.large}
                  alt="頭像"
                  className="img-fluid rounded-circle"
                />
                <h2 className="mb-0">{`${name.first} ${name.last}`}</h2>
                <p className="mb-0">{email}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
