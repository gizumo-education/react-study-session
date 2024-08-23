import "./App.css";
import { cards } from "./constants/index.js";
import "./style.css";
import { useState, useEffect } from "react";
import Luffy from "./assets/onepiece01_luffy.png";

function App() {
  const [result, setResult] = useState("");
  const [showFullScreen, setShowFullScreen] = useState("");
  const [timeLeft, setTimeLeft] = useState(8);
  const [isGameActive, setIsGameActive] = useState(true);
  const [showGameOver, setShowGameOver] = useState(false);

  useEffect(() => {
    if (!isGameActive) return;

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          setIsGameActive(false);
          setShowFullScreen("ハズレ");
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isGameActive]);

  const handleClick = (event, cardId) => {
    if (!isGameActive) return;

    const frontImage = event.currentTarget.querySelector(".back");
    if (frontImage) {
      frontImage.style.display = "none";
    }

    if (cardId === "luffy") {
      setResult("あたり");
      setShowFullScreen("ルフィ");
      setIsGameActive(false);
    } else {
      setResult("ハズレ");
    }
  };

  return (
    <>

      {showFullScreen === "ルフィ" && (
        <div className="fullscreen-message">
          <h1 className="atari">当たり</h1>
          <img src="src/assets/bingo.jpg" alt="" className="bingo" />
        </div>
      )}

      {showFullScreen === "" && (
        <>
          <ul className="cards">
            {cards.map((card, index) => (
              <li key={index} className="card">
                <button onClick={(event) => handleClick(event, card.id)}>
                  {card.name}
                    <img
                      src="src/assets/usagi.png"
                      alt="裏面"
                      className="back"
                    />
                    <p className="judge">{card.judge}</p>
                    <img src={card.imgPath} alt={card.name} className="front" />
                </button>
              </li>
            ))}
          </ul>

          <hr className="line" />

          <div className="question">
            <img src={Luffy} alt="" />
            <p className="explain">← ルフィを見つけてね！</p>
          </div>
        </>
      )}

      {isGameActive && <div className="timer">残り時間: {timeLeft}秒</div>}

      {showFullScreen === "ハズレ" && (
        <div className="fullscreen-message">
          <h1 className="atari">ゲームオーバー</h1>
          <img src="src/assets/gameover.png" alt="" className="bingo" />
        </div>
      )}
    </>
  );
}

export default App;
