import style from './SearchBox.module.css'
export default function SearchBox({ filter, filterChange }) {
  return (
    <div className={style.serchContainer}>
      <p>Find contacts by name</p>
      <input type="text" value={filter} onChange={filterChange} />
    </div>
  );
}
