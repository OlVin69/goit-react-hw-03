import css from './Options.module.css';

// const Options = ({
//   values: { good, neutral, bad },
//   onUpdate,
//   total,
//   resetTotal,
// }) => {
//   return (
//     <div className={css.container}>
//       <button type="button" onClick={() => onUpdate('good')}>
//         Good
//       </button>
//       <button type="button" onClick={() => onUpdate('neutral')}>
//         Neutral
//       </button>
//       <button type="button" onClick={() => onUpdate('bad')}>
//         Bad
//       </button>
//       {total > 0 && (
//         <button type="button" onClick={resetTotal}>
//           Reset
//         </button>
//       )}
//     </div>
//   );

export default function Options({ values, onUpdate, total, resetTotal }) {
  const options = Object.keys(values);

  return (
    <div className={css.container}>
      {options.map((option, index) => {
        return (
          <button
            className={css.button}
            type="button"
            onClick={() => onUpdate(option)}
            key={index}
          >
            {option}
          </button>
        );
      })}
      {total > 0 && (
        <button className={css.button} type="button" onClick={resetTotal}>
          Reset
        </button>
      )}
    </div>
  );
}
