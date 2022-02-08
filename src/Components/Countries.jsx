import React from "react";

const Countries = ({ countries, loading }) => {
  if (loading) {
    return <h2>loading...</h2>;
  }

  return (
    <ul className="list-group mb-2">
      {countries.map((country, i) => (
        <li key={i} className="list-group-item">
          {country.name}
          <img
            src={country.flag}
            alt={`${country.name} flag`}
            className="icon ml-2"
            style={{ width: 25 }}
          />
        </li>
      ))}
    </ul>
  );
};

export default Countries;
