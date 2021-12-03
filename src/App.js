import "./app.css";
import { useEffect, useState, useMemo } from "react";
import Quiz from "./component/quiz";
import Timer from "./component/Timer";
function App() {
  const [qNo, setQNo] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("$ 0");

  const data = [
    {
      id: 1,
      question:
        "1. Which of the following is a server-side Java Script object?",
      answer: [
        {
          text: "Function",
          correct: false,
        },
        {
          text: "File",
          correct: true,
        },
        {
          text: "FileUpload",
          correct: false,
        },
        {
          text: "Date",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question:
        "Java script can be used for Storing the form's contents to a database file on the server",
      answer: [
        {
          text: " False ",
          correct: false,
        },
        {
          text: "False",
          correct: true,
        },
        {
          text: "Other",
          correct: false,
        },
        {
          text: "Undefine",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "To insert a JavaScript into an HTML page, which tag is used?",
      answer: [
        {
          text: "< script=’java’>",
          correct: false,
        },
        {
          text: "< script>",
          correct: true,
        },
        {
          text: "< javascript>",
          correct: false,
        },
        {
          text: "< js>",
          correct: false,
        },
      ],
    },
    {
      id: 4,
      question: "How does Java Script store dates in objects of Date type?",
      answer: [
        {
          text: "The number of days since January 1st, 1900",
          correct: false,
        },
        {
          text: "The number of seconds since January 1st, 1970",
          correct: false,
        },
        {
          text: "The number of milliseconds since January 1st, 1970",
          correct: true,
        },
        {
          text: "The number of picoseconds since January 1st, 1970",
          correct: false,
        },
      ],
    },
  ];
  const moneyPyramid = useMemo(
    () =>
      [
        {
          id: 1,
          Amount: "$ 100",
        },
        {
          id: 2,
          Amount: "$ 200",
        },
        {
          id: 3,
          Amount: "$ 300",
        },
        {
          id: 4,
          Amount: "$ 400",
        },
        {
          id: 5,
          Amount: "$ 500",
        },
        {
          id: 6,
          Amount: "$ 600",
        },
        {
          id: 7,
          Amount: "$ 700",
        },
        {
          id: 8,
          Amount: "$ 800",
        },
        {
          id: 9,
          Amount: "$ 900",
        },
        {
          id: 10,
          Amount: "$ 1000",
        },
        {
          id: 11,
          Amount: "$ 1100",
        },
        {
          id: 12,
          Amount: "$ 1200",
        },
        {
          id: 13,
          Amount: "$ 13000",
        },
        {
          id: 14,
          Amount: "$ 14000",
        },
        {
          id: 15,
          Amount: "$ 15000",
        },
      ].reverse(),
    []
  );

  useEffect(() => {
    qNo > 1 && setEarned(moneyPyramid.find((m) => m.id === qNo - 1).Amount);
  }, [moneyPyramid, qNo]);
  return (
    <div className="app">
      <div className="main">
        {stop ? (
          <h1 className="earnText">You Eared: {earned}</h1>
        ) : (
          <>
            <div className="top">
              <div className="timer">
                <Timer setStop={setStop} qNo={qNo} />
              </div>
            </div>
            <div className="bottom">
              <Quiz data={data} setStop={setStop} setQNo={setQNo} qNo={qNo} />
            </div>
          </>
        )}
      </div>
      <div className="pyramid">
        <ul className="moneyList">
          {moneyPyramid.map((elem) => {
            return (
              <>
                <li
                  className={
                    qNo == elem.id ? "moneyListItems active" : "moneyListItems"
                  }
                >
                  <span className="moneyListItemsNumber">{elem.id}</span>
                  <span className="moneyListItemsAmout">{elem.Amount}</span>
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
