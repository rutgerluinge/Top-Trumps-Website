import { Body } from "../components/Body";
import logo from "../images/TopTrumpsLogo.png";
export const Home = () => {
  return (
    <div className="content fill">
      <h1>HomePage TopTrumps Lamas</h1>
      <div className="div_span">
        <div className="paragraph half_vw">
          <div class="paragraph">
            On this website information is given about our implementation of the
            game Top-Trumps a very easy to play card game where we explored the
            possibilities and exploits using epistemic logic. This project has
            been inspired by the Logical Aspects of Multi Agent Systems course
            of the University of Groningen in the Netherlands. Using this
            epistemic knowledge of the agents that are playing the game, we will
            do some different analysis to see whether this knowledge can effect
            the outcomes of the game to be more preferable for the target agent.
            We will compare the winrates and show the states in the form of a
            Kripke model to see how the belief changes.
          </div>

          <div className="paragraph">
            On this website we will explain the game of Top-Trumps, we will show
            the simplifications necessary to complete our task
          </div>
        </div>

        <div className="center">
          <img src={logo} alt="top trumps logo" />
        </div>
      </div>
    </div>
  );
};
