import css from './Feedback.module.css';

export default function Feedback({ good, neutral, bad, totalValue, relation }) {
  return (
    <div className={css.feedback}>
      <p className={css.counter}>Good :{good}</p>
      <p className={css.counter}>Neutral :{neutral}</p>
      <p className={css.counter}>Bad :{bad}</p>
      <p className={css.counter}>Total :{totalValue}</p>
      <p className={css.counter}>Positive :{relation}%</p>
    </div>
  );
}
