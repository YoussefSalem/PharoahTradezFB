import React from "react";

function Footer() {
  const date = new Date();
  const currentYear = date.getFullYear();

  // expected output: 1969

  return (
    <div className="footeradj">
      <footer className="text-center mb-2">
        <big>&copy; Copyright {currentYear} PharoahTradez | Team 6</big>
      </footer>
    </div>
  );
}

export default Footer;
