import { useEffect, useState } from "react";

function Quiz({ data, setStop, setQNo, qNo }) {
  const [questions, setQuestions] = useState(null);
  const [selectedAns, setSelectedAns] = useState(null);
  const [className, setClassName] = useState("answer");

  useEffect(() => {
    setQuestions(data[qNo - 1]);
  }, [data, qNo]);

  const delay = (duration, callBck) => {
    setTimeout(() => {
      callBck();
    }, duration);
  };

  const handleClick = (a) => {
    setSelectedAns(a);
    setClassName("answer active");
    delay(3000, () => {
      setClassName(a.correct ? "answer correct" : "answer worng");
    });

    delay(6000, () => {
      if (a.correct) {
        setQNo((prev) => prev + 1);
        setSelectedAns(null);
      } else {
        setStop(true);
      }
    });
  };
  return (
    <div className="quiz">
      <div className="questions">{questions?.question}</div>
      <div className="answers">
        {questions?.answer.map((a) => {
          return (
            <>
              <div
                className={selectedAns === a ? className : "answer"}
                onClick={() => handleClick(a)}
              >
                {a.text}
              </div>
              ;
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Quiz;
