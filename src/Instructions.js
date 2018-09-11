const Instructions = ({ steps }) => (
  <section className="instructions">
    <h2>조리 절차</h2>
    {steps.map((step, i) => (
      <p key={i}>{step}</p>
    ))}
  </section>
);

export default Instructions;