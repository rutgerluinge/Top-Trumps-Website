import "../styling/footer.css";
import "../styling/essentials.css";

import NormalLink from "./NormalLink";

export const Footer = () => {
  return (
    <div className="footer-container font">
      <footer className="footer">
        <div className="footer-column">
          <h3>LAMAS</h3>
          <ul>
            <li>Univeristy of Groningen</li>
            <li>Faculty of Science and Engineering</li>
            <li>Logical Aspects of Multi Agent Systems</li>
            <li>Msc Artificial Intelligence 2022-2023</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Pages</h3>
          <ul>
            <li>
              <NormalLink href={"/Top-Trumps-Website/"}>Home</NormalLink>
            </li>
            <li>
              <NormalLink href={"/Top-Trumps-Website/game"}>Game</NormalLink>
            </li>
            <li>
              <NormalLink href={"/Top-Trumps-Website/implementation"}>
                Implementation
              </NormalLink>
            </li>
            <li>
              <NormalLink href={"/Top-Trumps-Website/play"}>Play</NormalLink>
            </li>
            <li>
              <NormalLink href={"/Top-Trumps-Website/results"}>
                Results
              </NormalLink>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Contact</h3>
          <ul>
            <li>Marnix Jansma; m.a.jansma@student.rug.nl</li>
            <li>Ben van der Laan: b.van.der.laan.4@student.rug.nl</li>
            <li>Thomas Vos; t.j.vos@student.rug.nl</li>
            <li>Rutger Luinge; r.luinge@student.rug.nl</li>
            <li>
              <a
                href="https://github.com/rutgerluinge/Top-Trumps-LAMAS"
                target="blank"
                className="github_link"
              >
                Github page link
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};
