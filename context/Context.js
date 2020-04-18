import React, { createContext, useEffect, useState } from "react";
import Axios from "axios";

const AppContext = createContext({});

const AppContextProvider = ({ children }) => {
  const [country, setCountry] = useState("Ghana");
  const [countryData, setCountryData] = useState();

  useEffect(() => {
    getCountryData();
  }, [country]);

  useEffect(() => {
    getAllCountryStats();
  }, []);

  return (
    <AppContext.Provider value={{ country, countryData }}>
      {children}
    </AppContext.Provider>
  );

  function getCountryData() {
    Axios.get("https://api.thevirustracker.com/free-api?countryTotal=GH")
      .then((response) => {
        setCountryData(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  function getAllCountryStats() {
    let ob = [];
    Axios.get("https://api.thevirustracker.com/free-api?countryTotals=ALL")
      .then((response) => {
        // console.log(Object.keys(response.data.countryitems[0]).length);
        for (
          let i = 0;
          i < Object.keys(response.data.countryitems[0]).length;
          i++
        ) {
          console.log(
            Object.keys(Object.keys(response.data.countryitems[0])[i][0])[0]
          );
          // response.data.countryitems[0][
          //   Object.keys(response.data.countryitems[i])
          // ]
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }
};

export { AppContext, AppContextProvider };
