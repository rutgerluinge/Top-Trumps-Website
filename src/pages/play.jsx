import { Body } from "../components/Body";
import s1 from "../images/state1.jpg";
import s2 from "../images/state2.jpg";
import s3 from "../images/state3.jpg";
import s4 from "../images/state4.jpg";
import s5 from "../images/state5.jpg";
import s6 from "../images/state6.jpg";

export const Play = () => {
  const A = ["Agent A", "Agent B", "Agent C"];
  const C = [
    "Joey",
    "Rachel",
    "Ross",
    "Monica",
    "Phoebe",
    "Chandler",
    "Janice",
    "Gunther",
    "Mr. Heckles",
  ];

  return (
    <div className="content fill">
      <h1>Playtrough including the Kripke model</h1>

      <div className="paragraph vw80">
        <h3>Consider the following scenario:</h3>
        <ul>
          <li>A = {A.join(", ")}</li>
          <li>C = {C.join(", ")}</li>
        </ul>
        <p>
          The Kripke Model for the start of the game would look as shown in
          figure 1. Each card is abbreviated with the first 2 letters of the
          card name. At the start each possible world contains three sets of
          cards, since everyone knows that all players will have exactly 3
          cards, but no one knows which particular cards the players have.
          Therefore, all players consider every world to be possible. The first
          set relates to the hand of agent A and the second set to the hand of
          agent B and the third hand to agent C. We chose this complexity of 3
          agents with 3 cards to show how the complexity of the kripke model can
          expode. In the images below an example game is shown, where the winner
          wins the cards of a round:
        </p>
        <div className="image_container">
          <img className="image2" src={s1} alt="" />
          <p>
            The first initial Kripke model existing of 1680 worlds with 1.4
            million relations. We can observe that the Kripke model is very
            large, thus the agents are not aware of any knowledge in the current
            game.
          </p>
        </div>
        <div className="image_container">
          <img className="image2" src={s2} alt="" />
          <p>
            After 1 round of playing the Kripke model already reduces
            drastically to ~90 worlds with 4095 relations.
          </p>
        </div>
        <div className="image_container">
          <img className="image2" src={s3} alt="" />
          <p>
            After the second round we are left with only 12 different worlds of
            belief, resulting in 78 relations.
          </p>
        </div>
        <div className="image_container">
          <img className="image2" src={s4} alt="" />
          <p>
            After the third round we see that there are only 3 worlds left. We
            can observe that the following cards have not been played yet:
            Rachel, Janice, and Joey.{" "}
          </p>
        </div>
        <div className="image_container">
          <img className="image2" src={s5} alt="" />
          <p>
            The fourth round look similar to the previous round, this happened
            because of our simplification of deck shuffling after each round,
            therefore player A and B still have unreaveled cards.
          </p>
        </div>
        <div className="image_container">
          <img className="image2" src={s6} alt="" />
          <p>
            And in the final model we see that all agents know exactly where
            every card should be when they would have been tracking the cards.
          </p>
          <p>
            As a result in this given example, agent A will win the game as it
            will receive all cards after the next round of the Kripke model
            above. When using more cards/agents/stats the result of a round will
            take longer and are less one-sided.
          </p>
        </div>
      </div>
    </div>
  );
};
