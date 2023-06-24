export const FormalDescription = () => {
  return (
    <div className="fill formal">
      <div className="formal font">
        A formal definition of our game implementation can be written as the
        following:
        <ol>
          <li>
            A = &#123;1, 2, ..., m&#125; represents the set of m agents which
            play the game.
          </li>
          <li>
            C = &#123;c1, c2, ..., cl&#125; represents the set of l cards which
            are in play.
          </li>
          <li>
            For each agent i, s.t. i &#x2208; A, Di &#8834; C is the subset of
            cards that belongs to agent i (their hand).
          </li>
          <li>
            D = &#123;D1, D2, ..., Dm&#125; is the set of all hands of cards for
            each agent.
          </li>
        </ol>
        <p>
          For the set of all decks (hands) D the following two rules must hold:
        </p>
        <ul>
          <li className="list">
            It is the case that &#8746;D = C. I.e. each card in C is part of
            some player’s deck Di.
          </li>
          <li className="list">
            It must hold that for each card cj, cj &#x2208; C and all pairs of
            agents a, b &#x2208; A if cj &#x2208; Da, then cj &#x2209; Db. That
            is to say, each card is only ever present in one deck.
          </li>
        </ul>
        <p>
          The true state of the game can then be summarized as D, with each card
          in play accounted for as part of one player’s deck. At the start of
          the game, the set of possible worlds are all legal permutations of D
          given C and A.
        </p>
        <p>
          Given that the number of possible states scales with the number of
          players and cards in the game, it is useful to be able to summarise
          related states into a single notation. For this, we use the following
          to represent an agent’s knowledge of the game:
        </p>
        <p>
          For each agent i, i ∈ A, Si = &#123;Sc1, Sc2, ..., Scl&#125; where ∀j,
          j ∈ l, Scj = 0 &#8744; Scj ⊆ A
        </p>
        <p>
          That is to say, any agent’s knowledge of the state Si can be expressed
          as a set of numbers associated with each card (assuming that agents
          know all cards), where the number indicates either the agent who has
          that card in their deck or if it is zero (0) it indicates that it
          could be in the deck of any agent. This generalizes to Scj = &#123;a1,
          a2, ...&#125; where a1, a2 ∈ A, i.e. Scj is the set of agents for
          which it is still possible that card cj is in their deck. Then Scj = 0
          implies Scj = A, i.e. it could be in any player’s deck.
        </p>
        <p>
          The motivation for this notation is that it allows encoding an agent’s
          knowledge of the game state as a sequence of integers (or sequence of
          sets of integers) where the length of the sequence is equal to the
          number of cards in the game l and the maximum value of the integers is
          the number of agents in the game m.
        </p>
        <p>
          In practice, it is even the case that with the rules as given for this
          model for any card and any, it is the case that it is either known
          that the card is in the deck of any particular agent or that it could
          be in any agent’s deck. That is to say, the knowledge state can be
          encoded fully in a sequence of integers in the range [0, m] of length
          l if there are at least as many cards as there are players.
        </p>
        <p>
          For example: At the start of the game, say we have a game with up to
          four agents and four cards (l = 4), then ∀i, i ∈ A, Si = &#123;0, 0,
          0, 0&#125; is the case at the start of the game, and intuitively it
          means that no agent knows where any card in the game is currently. If
          a round is played where player 1 wins the trick, the knowledge state
          becomes Si = &#123;1, 1, 1, 1&#125; for all agents (assuming they are
          paying attention). In this case, the knowledge state is complete and
          directly models the true state (D).
        </p>
      </div>
    </div>
  );
};
