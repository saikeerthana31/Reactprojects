import React from "react";

interface Props {
  setStyle: (style: string) => void;
}

const styles = [
  "default",
  "cursive",
  "bold",
  "italic",
  "fancy",
  "neon",
  "Big Shoulders Stencil",
  "Tektur",
  "Pacifico",
  "Monoton",
  "caveat",
  "Barriecito",
  "Indie Flower",
  "Yellowtail",
];

const StyleOptions: React.FC<Props> = ({ setStyle }) => {
  return (
    <div className="styles-container">
      {styles.map((style) => (
        <button
          key={style}
          className={`btn btn-style ${style}`}
          onClick={() => setStyle(style)}
        >
          {style.charAt(0).toUpperCase() + style.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default StyleOptions;
