import { Body } from "../components/Body";
import { FormalDescription } from "../components/Formal";
import { CodeImplementation } from "../components/Code";

export const Implementation = () => {
  return (
    <>
      <div className="content fill">
        <div className="paragraph vw80">
          <h1>Game Simplification</h1>
          <div className="paragraph">
            <div className="paragraph">
              To create a model for our game and research the possibilities
              using epistemic logic and creating we had to simplify the game in
              order to prevent state-explosion. We made some simplifications to
              make it more suitable, especially for the representation of the
              different states.
            </div>
            <div className="paragraph">
              <h4 className="subtitle">Card crafting</h4>
              First of all we created a game state where we can provide the
              number of agents, the number of cards per agent, and the amount of
              stat categories on each card. Each of these variables has
              initially been set to 3, when not calculating the kripke model,
              the variables can be increased to see the effect of the
              experiment. Note that the cards are either handcrafted or randomly
              initialized, both options can be used with our system.
            </div>
            <div className="paragraph">
              <h4 className="subtitle">Rules simplifications</h4>
              Some game mechanic rules also had to be changed, these changes are
              stated below:
              <ul>
                <li className="list">
                  In case of a tie, the agent who started the round will win
                  directly instead of having to play another round with all tied
                  agents. This has been done to simplify the coding and focus on
                  the goal of the experiment.
                </li>
                <li className="list">
                  After each round every agent shuffles their cards, so there
                  will be a chance that the same card will be the top card in 2
                  consecutive rounds. This simplification has been made to
                  simplify the states that need to be remembered by different
                  agents, allowing to create a more efficient Kripke model.
                </li>
                <li className="list">
                  All agents are aware of the card count of all other agents.
                  This feature is used for strategizing for the "smart agents"
                  using some basic statistics.
                </li>
              </ul>
            </div>
          </div>
          <h1>Game Implementation</h1>
          <div className="paragraph">
            <div className="paragraph">
              <h4 className="subtitle">Anouncement rules and game rules</h4>
              Our implementation uses different methods of anouncing cards after
              a stat category has been selected by the starting agent. As well
              as different game rules. In the case of anouncing rules we have
              the following 2 rules:
              <ul>
                <li className="list">
                  Agents publicly announce the complete card.
                </li>
                <li className="list">
                  Agents publicly announce the value of the chosen stat
                  category, the winner gets to see the complete cards.
                </li>
              </ul>
              Our implementation also has 2 different game rules about card
              acquisition:
              <ul>
                <li className="list">
                  Agents keep their own cards after playing a round (this
                  version is used for creating the kripke models due to state
                  explosion).
                </li>
                <li className="list">
                  The agent who won the round, will receive the cards from the
                  other agents of the respective round.
                </li>
              </ul>
              Our game wil explore three different strategies to see the effect
              of epistemic logic and see whether this could help the win rate of
              the agent which implements the respective strategies. The
              strategies apply when an agent is allowed to choose a stat
              category:
              <ul>
                <li className="list">
                  <b>Random Stat:</b>
                  The agent randomly picks one of the stats.
                </li>
                <li className="list">
                  <b>Highest Stat:</b>
                  The agent picks the stat which has the highest value on his
                  current card.
                </li>
                <li className="list">
                  <b>Epistemic Stat:</b>
                  The agent will use its knowledge to do a pairwise stat
                  comparison with his top card and potential cards from the
                  other agents. The card with the highest propability gets
                  chosen.
                </li>
              </ul>
            </div>
            <h4 className="subtitle ">Formal Game Description</h4>
            <FormalDescription></FormalDescription>

            <h4 className="subtitle ">Code implementation</h4>
            <CodeImplementation></CodeImplementation>
          </div>
        </div>
      </div>
    </>
  );
};