import { Body } from "../components/Body";
import logo from "../images/TopTrumpsLogo.png";
export const Home = () => {
  return (
    <>
      <div className="content fill">
        <h1>HomePage Top-Trumps Lamas</h1>
        <div className="div_span">
          <div className="paragraph vw50">
            <div class="paragraph">
              On this website information is given about our implementation of
              the game Top-Trumps a very easy to play card game where we
              explored the possibilities and exploits using epistemic logic.
              This project has been inspired by the Logical Aspects of Multi
              Agent Systems course of the University of Groningen in the
              Netherlands. Using this knowledge of the agents that are
              playing the game, we will do some different analysis to see
              whether this knowledge can effect the outcomes of the game to be
              more preferable for the target agent. We will compare the winrates
              and show the states in the form of a Kripke model to see how the
              belief changes.
            </div>

            <div className="paragraph">
              This website contains an in depth explanation of the game of
              Top-Trumps, a description of our modifications to the game for
              this project. Furthermore the game simplifications are described
              to prevent state explosion for the generated Kripke model. The
              website also includes an example game play trough showing the
              different outputs of our model. And at last the results of this
              research will be presented and discussed, including win
              percentages for different strategies, and the world representation
              of the states in the form of a Kripke model.
            </div>
          </div>

          <div className="center">
            <img src={logo} alt="top trumps logo" />
          </div>
        </div>
      </div>
    </>
  );
};
