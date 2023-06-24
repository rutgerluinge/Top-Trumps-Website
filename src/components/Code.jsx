export const CodeImplementation = () => {
  return (
    <div className="fill">
      <div className="paragraph">
        For coding the state, we implemented a "memory buffer" for all agents,
        in this buffer the announced cards are remembered based on the picked
        announcement rules above. The following coding dependencies have been
        used:
        <ul>
          <li>Python: programming language</li>
          <li>Mesa: mesa model for displaying the game rounds</li>
          <li>GraphicsX: graphing tool for generating Kripke models</li>
        </ul>
        The full code implementation including a more in depth descripiton can
        be found on our Github repository:
        <a
          href="https://github.com/rutgerluinge/Top-Trumps-LAMAS"
          target="blank"
          className="github_link"
        >
          Github page link
        </a>
      </div>
    </div>
  );
};
