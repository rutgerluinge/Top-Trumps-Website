import { Body } from "../components/Body";
import result_img from "../images/results.jpg";
export const Results = () => {
  return (
    <div className="content fill">
      <h1>Results of the Lamas Game</h1>
      <div className="paragraph vw80">
        <h4 className="subtitle">Results</h4>
        <div className="paragraph">
          For our experimental setup we explored the winrates as a function of
          the following parameters:
          <ul>
            <li className="list">2/3/4 Players</li>
            <li className="list">2/3/4 stats on every card</li>
            <li className="list">3/4/5/6 cards per player</li>
            <li className="list">
              random stat strategy/highest stat strategy/smart strategy for the
              non-smart player (player 1)
            </li>
          </ul>
          These parameters yielded the following results, where each table shows
          a combination of the parameters above and each combination has been
          run for 10 000 games to calculate an average win-rate. The values are
          in win percentage so take into account the number of players when
          evaluating these results. In the tables, the first row denotes the
          variable for cards per player. Note that when the other (non player 1)
          agents use the "smart" strategy, this functions as a control group and
          the win percentages in the respective row should be equal to 1/n,
          where n is the number of players.
          <img src={result_img} alt="" />
        </div>
      </div>
      <div className="paragraph vw80">
        <h4 className="subtitle">Discussion</h4>
        <p>
          To conclude we can say that we made an simplified implementation for
          the Top-Trumps game using logic and multiple agents. When taking a
          look at the result we see that our initial predictions are true; using
          the advanced knowledge of what cards other people have, can help you
          to get a higher succes rate than simply picking a random stat or your
          highest stat.
        </p>

        <p>
          However there are a few issues that should be addressed. First of all
          we see a strange set of winrates in table 6, 8 and 9, these are the
          only tables where player 1 (smart player) has a negative winrate.
          Apparently this is due to the increase in players and especially the
          number of stats per card. We didn't expect this to happen, as we
          thought that more cards and stats would increase the performance of
          our knowledge strategy.
        </p>
        <p>
          Secondly, the epistemic logic. When starting this project we believed
          that the game of Top-Trumps could be exploited using epistemic logic.
          However when working on the project we found out that the game might
          be to simple for this, as we can see from the results, picking just
          the highest stat already competes very well with a strategy based on
          knowledge. Furthermore it should be addressed that we are only using
          epistemic logic in the form of "i know that you have", we are lacking
          a deeper use of epistemic logic in the sense of "i know that you
          know". We found that it simply doesn't matter that you would know what
          other players know, the best strategy when you can decide the card
          category, is just to optimize that singular trick. This is due to the
          fact that the winner can start again next round. A way we would think
          make the game more "epistemic proof" is by generating the cards
          differently in a more unfair way, therefore you might want to loose
          when you have a very bad card.
        </p>
      </div>
    </div>
  );
};
