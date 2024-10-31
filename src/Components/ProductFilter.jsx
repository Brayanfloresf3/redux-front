import { SET_CATEGORY, SET_SEARCH,FilterStateContext,FilterDispatchContext } from '../context/FilterContext';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory, setSearch } from '../store/actions/productActions';

const ProductFilter = () => {
  const {category,search} = useSelector((state) => state.productsStore);
  const dispatch = useDispatch();

  return (
    <div style={styles.container}>
      <label style={styles.label}>
        Categoría:
        <select value={category} onChange={(e)=>dispatch(setCategory(e.target.value))} style={styles.select}>
          <option value="Todas">Todas</option>
          <option value="Zapatos">Zapatos</option>
          <option value="Camisetas">Camisetas</option>
          <option value="Accesorios">Accesorios</option>
          <option value="Abrigos">Abrigos</option>
        </select>
      </label>
      <label style={styles.label}>
        Buscar:
        <input
          type="text"
          value={search}
          onChange={(e)=>dispatch(setSearch(e.target.value))}
          placeholder="Buscar productos..."
          style={styles.input}
        />
      </label>
    </div>
  );
};

const styles = {
  container: {
    marginBottom: '20px',
    display: 'flex',
    gap: '20px',
    alignItems: 'center',
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    fontSize: '14px',
  },
  select: {
    padding: '5px',
    fontSize: '14px',
    marginTop: '5px',
  },
  input: {
    padding: '5px',
    fontSize: '14px',
    marginTop: '5px',
    width: '200px',
  },
};

export default ProductFilter;
