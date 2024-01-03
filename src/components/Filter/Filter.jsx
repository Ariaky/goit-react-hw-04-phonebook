import css from './Filter.module.css';

export const Filter = ({ filter, onChangeFilter }) => (
    <label className={css.label}>
      Find contacts by name:
      <input className={css.input} type="text" value={filter} onChange={(e) => onChangeFilter(e.target.value)} />
    </label>
  );
 