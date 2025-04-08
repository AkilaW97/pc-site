import React from "react";

const BubbleFooter = () => {
  return (
    <>
      {/* Footer with Bubbles */}
      <footer className="relative z-10 mt-auto">
        <div className="bubbles absolute top-0 left-0 right-0 h-4 bg-[#ED5565]">
          {Array.from({ length: 128 }).map((_, i) => {
            const size = 2 + Math.random() * 4;
            const distance = 6 + Math.random() * 4;
            const position = -5 + Math.random() * 110;
            const time = 2 + Math.random() * 2;
            const delay = -1 * (2 + Math.random() * 2);

            return (
              <div
                key={i}
                className="absolute bg-[#ED5565] rounded-full"
                style={{
                  left: `${position}%`,
                  width: `${size}rem`,
                  height: `${size}rem`,
                  animation: `bubble-size ${time}s ease-in infinite ${delay}s, bubble-move ${time}s ease-in infinite ${delay}s`,
                  transform: "translate(-50%, 100%)",
                }}
              />
            );
          })}
        </div>

        <div className="content bg-[#ED5565] grid grid-cols-1 md:grid-cols-2 gap-16 p-8">
          {/* ... rest of your footer content ... */}
        </div>
      </footer>

      {/* SVG Filter for blob effect */}
      <svg className="fixed top-[100vh]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="blob">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="blob"
            />
          </filter>
        </defs>
      </svg>
    </>
  );
};

export default BubbleFooter;