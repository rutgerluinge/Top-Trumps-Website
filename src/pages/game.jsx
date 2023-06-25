import { Body } from "../components/Body";
import card_image from "../images/card.png";
import card_2_image from "../images/card_2.png";

export const Game = () => {
  return (
    <div className="content fill">
      <h1>The game of toptrumps</h1>

      <div className="div_span">
        <div className="paragraph">
          <div className="paragraph vw80">
            The game of Top-Trumps is a very simple card game, where a deck of
            unique cards get shuffled and is splitted between players. The main
            objective of the game is to play duels with other players to
            eventually try to gain all cards of the deck, then the player has
            won.
          </div>

          <div className="paragraph vw80">
            When playing the game all players can view only view the top card of
            their deck, using this card the player who is allowed to start the
            round can name one of the categories on the card. All players should
            then name their respective value of their top card. The player with
            the highest value wins the round, and receives all other players
            cards and puts them at the bottom of the deck. When a player has no
            cards left, the player is eliminated from the game.
          </div>

          <div className="paragraph vw80">
            The next player who can start the round is decided by the winner of
            the previous round. Furthermore an extra rule is used when a tie
            arises, meaning 2 or more players named the same value for a stat.
            In the case of a tie, the respective players will play another
            round, where the winner will also receive the cards of the
            previously tied round.
          </div>

          <div className="paragraph vw80">
            The game should roughly look like the following:
            <ol>
              <b>Repeat till 1 player has all cards:</b>
              <li className="list">
                Decide the round start player (last round winner)
              </li>
              <li className="list">Round start player picks category</li>
              <li className="list">
                All players name the value of the picked category
              </li>
              <li className="list">
                The player with the highest value of the respective stat
                category wins the top card of all other players.
              </li>
              <li className="list">
                In case of a tie, the tied players will repeat step I, II, and
                III, where the winner will receive the cards from this round as
                well as the tied round.
              </li>
              <li className="list">
                The winning player puts the won cards at the bottom of his deck.
              </li>
            </ol>
          </div>
        </div>

        <div className="paragraph">
          <div className="div_span">
            <img className="image" src={card_image} alt="card example" />
            <img className="image" src={card_2_image} alt="card example" />
          </div>
          <div className="paragraph vw80">
            In these example cards we can see the "Giganotosaurus", and
            "Coelophysis" 2 dinosaurs, each card has 6 different stat categories
            which the players whose turn it is can choose out of. In the current
            case we see that the Giganotosaurus is highly advantagous with
            respect to Coelophysis in almost all stats.
          </div>
        </div>
      </div>
    </div>
  );
};
