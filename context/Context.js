import React, { createContext, useEffect, useState } from "react";
import Axios from "axios";

const AppContext = createContext({});

const AppQuestions = [
  {
    id: "1",
    title: "Have you experienced any of the following symptoms:",
    body: "Fever, Cough, Sneezing, Sore Throat, Difficulty in Breathing",
    response: undefined,
    responded: false,
  },
  {
    id: "2",
    title: "Do you have a fever?",
    body: "Are you currently experiencing a high temperature?",
    response: undefined,
    responded: false,
  },
  {
    id: "3",
    title: "Do you have a persistent cough?",
    body:
      "Coughing a lot for more than an hour or 3 episodes in the past 24 hours",
    response: undefined,
    responded: false,
  },
  {
    id: "4",
    title: "Social distancing?",
    body:
      "Have you come into close contact (within 6 feet) with someone who has a laboratory confirmed COVID – 19 diagnosis in the past 14 days?",
    response: undefined,
    responded: false,
  },
  {
    id: "5",
    title: "Work History?",
    body:
      "Are you a first responder, healthcare worker, or employee or attendee of a child or adult care facility?",
    response: undefined,
    responded: false,
  },
];

const AppContextProvider = ({ children }) => {
  const [country, setCountry] = useState({
    Country: "Ghana",
    Slug: "ghana",
    ISO2: "GH",
  });
  const [countries, setCountries] = useState([]);
  const [summary, setSummary] = useState([]);
  const [questions, mutateQuestions] = useState(AppQuestions);

  useEffect(() => {
    getAllCountryStats();
  }, []);

  useEffect(() => {
    getAllCountryStats();
  }, []);

  useEffect(() => {
    getSummary();
  }, []);

  return (
    <AppContext.Provider
      value={{
        country,
        summary,
        setIndividualCountry,
        questions,
        respondToQuestion,
      }}
    >
      {children}
    </AppContext.Provider>
  );

  function respondToQuestion(id, response) {
    mutateQuestions(
      questions.map((question, index) => {
        if (question.id === id) {
          return {
            ...question,
            response,
            responded: true,
          };
        } else {
          return { ...question };
        }
      })
    );
  }

  function getAllCountryStats() {
    Axios.get("https://api.covid19api.com/countries")
      .then((response) => {
        setCountries(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  function setIndividualCountry(countryName) {
    let countrySelected = countries.find((country) => {
      return country["Country"].toLowerCase() === countryName.toLowerCase();
    });

    if (countrySelected) {
      setCountry(countrySelected);
    }
  }

  function getSummary() {
    Axios.get("https://api.covid19api.com/summary")
      .then((response) => {
        setSummary(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }
};

export { AppContext, AppContextProvider };
