import { useState } from "react";
// import TextInput from "./components/TextInput";
// import StyleOptions from "./components/StyleOptions";
// import StyledText from "./components/StyledText";
import "./styles/App.css";
import React from "react";

const styles = [
  { name: "Default", className: "default" },
  { name: "Rock Salt", className: "rock-salt" },
  { name: "Bold", className: "bold" },
  { name: "Italic", className: "italic" },
  { name: "WindSong", className: "windsong" },
  { name: "Neon", className: "neon" },
  { name: "Big Shoulders Stencil", className: "big-shoulders-stencil" },
  { name: "Tektur", className: "tektur" },
  { name: "Pacifico", className: "pacifico" },
  { name: "Monoton", className: "monoton" },
  { name: "Caveat", className: "caveat" },
  { name: "Barriecito", className: "barriecito" },
  { name: "Indie Flower", className: "indie-flower" },
  { name: "Yellowtail", className: "yellowtail" },
  { name: "Monsieur La Doulaise", className: "monsieur-la-doulaise" },
  { name: "Bilbo Swash Caps", className: "bilbo-swash-caps" },
  { name: "Eagle Lake", className: "eagle-lake" },
  { name: "Meddon", className: "meddon" },
];
const App: React.FC = () => {
  const [text, setText] = useState(
    "The opened package of potato chips held the answer to the mystery..."
  );
  const [selectedStyle, setSelectedStyle] = useState("default");

  return (
    <div className="container">
      <h1 className="title">Text Styler</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="text-input"
      />
      <div className="styles-container">
        {styles.map((style) => (
          <button
            key={style.className}
            className={`style-button ${
              selectedStyle === style.className ? "active" : ""
            }`}
            onClick={() => setSelectedStyle(style.className)}
          >
            {style.name}
          </button>
        ))}
      </div>
      <p className={`output-text ${selectedStyle}`}>{text}</p>
    </div>
  );
};

export default App;
