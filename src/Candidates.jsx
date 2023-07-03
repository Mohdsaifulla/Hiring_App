import React, { useState, useEffect } from "react";
import data from "./candidatesData.json";
import { Link } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
function Candidates() {
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <>
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <ClipLoader color={"#a8329d"} loading={loading} size={100} />
        </div>
      ) : (
        <div className="wholeTemplate">
          <div className="templateContainer">
            <div className="searchInput_Container">
              <input
                id="searchInput"
                type="text"
                placeholder="Search Candidate by Profession or Place..."
                onChange={(event) => {
                  setSearchTerm(event.target.value);
                }}
              />
            </div>
            <div className="template_Container">
              {data
                .filter((val) => {
                  if (searchTerm == "") {
                    return val;
                  } else if (
                    val.work.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    val.place.toLowerCase().includes(searchTerm.toLowerCase())
                  ) {
                    return val;
                  }
                })
                .map((val) => {
                  return (
                    <div className="template" key={val.id}>
                      <img src={val.image} alt="" />
                      <h3>{val.title}</h3>
                      <p className="work">{val.work}</p>
                      <p className="work">{val.place}</p>
                    </div>
                  );
                })}
            </div>
          </div>
          <div className="BackToHome">
            <p>Back to Home Page</p>
            <Link to="/">Home</Link>
          </div>
        </div>
      )}
      )
    </>
  );
}

export default Candidates;
