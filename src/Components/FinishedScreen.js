function FinishedScreen({ points, maxPoints, highscore, dispatch }) {
  const percentage = ((points / maxPoints) * 100).toFixed(2);

  return (
    <>
      <p className="result">
        You scored <strong>{points}</strong> out of {maxPoints} ({percentage}%)
      </p>
      <p className="highscore"> Highscore: {highscore} points</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: 'restart' })}
      >
        Restart Quiz
      </button>
    </>
  );
}

export default FinishedScreen;
