import { Body } from "../components/Body";
import s1 from "../images/state1.png" 
import s2 from "../images/state2.png" 
import s3 from "../images/state3.png" 
import s4 from "../images/state4.png" 


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
          figure 1. Each card is abbreviated with the first 2 letters of the card
          name. Each possible world contains three sets of cards, since
          everyone knows that all players will have exactly 2 cards, but no one
          knows which particular cards the players have. Therefore, all players consider
          every world to be possible. The first set relates to the hand of
          agent A and the second set to the hand of agent B and the third hand to agent 3. The complexity of
          the model is already quite high, considering how few cards are used in
          this example, but this complexity dwindles down very fast as will be
          seen in the next step.
        </p>
        <div className="image_container">
          <img src={s1} alt="" />
        </div>
        <div className="image_container">
          <img src={s2} alt="" />
        </div>
        <div className="image_container">
          <img src={s3} alt="" />
        </div>
        <div className="image_container">
          <img src={s4} alt="" />
        </div>

      </div>
    </div>
  );
};
