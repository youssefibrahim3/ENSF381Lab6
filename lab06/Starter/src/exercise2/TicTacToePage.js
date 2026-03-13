function TicTacToePage() {
  return (
    <>
      <section className="panel">
        <h1>Tic-Tac-Toe</h1>
      </section>

      <section className="panel">
        <div className="ttt-board">{/* Build Square, Board, and calculateWinner in this file. */}</div>
      </section>
    </>
  );
}
// making tic tac toe
// square react component to render one button
function Square() {

  return (
    <div>
      <button className="square"></button>
    </div>
  );
}

// board react component that displays

export default TicTacToePage;
