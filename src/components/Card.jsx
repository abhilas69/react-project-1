import React from "react";

const Card = (prop) => {
  return (
    <>
      <div className="card">
        <div className="header">
          <img src={prop.image} alt={prop.name} />
          <h2 className="age">AGE - {prop.age}</h2>
          <h2   className="sex">SEX - {prop.sex}</h2>
        </div>
        <div className="middle">
          <h1>{prop.name}</h1>
          <h3>
            Employee - <span className="span-1">{prop.Employee}</span>
          </h3>
          <h3>
            Role : <span className="span-2">{prop.Role}</span>
          </h3>
          <p>
            Skills : <span className="span-3">{prop.about}</span>
          </p>
        </div>
        <div className="footer">
          <button>View Profile</button>
        </div>
      </div>
    </>
  );
};

export default Card;
