import React, {
  Dispatch,
  FunctionComponent,
  useCallback,
  useEffect,
  useState,
} from 'react';

import GlassIcon from '../../../../assets/icons/glass-icon.svg';
import { IFilters } from '../../../../declarations/interfaces';

import styles from './FilterPanel.module.scss';

interface IProps {
  filters: IFilters;
  setFilters: Dispatch<React.SetStateAction<IFilters>>;
}

const FilterPanel: FunctionComponent<IProps> = ({ filters, setFilters }) => {
  const [filtersState, setFiltersState] = useState<IFilters>(filters);

  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFiltersState((prev) => ({
        ...prev,
        search: e.target.value,
      }));
    },
    [],
  );

  const handleShowPiiChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFiltersState((prev) => ({
        ...prev,
        showPiiOnly: e.target.checked,
      }));
    },
    [],
  );

  const onApplyFilters = useCallback(() => {
    setFilters(filtersState);
  }, [filtersState]);

  const onResetFilters = useCallback(() => {
    setFilters({
      search: '',
      showPiiOnly: false,
    });
  }, [setFilters]);

  useEffect(() => {
    setFiltersState(filters);
  }, [filters]);

  return (
    <div className={styles.filter_panel}>
      <div className={styles.search_section}>
        <img className={styles.glass_icon} src={GlassIcon} alt="Search" />
        <input
          className={styles.input}
          type="text"
          placeholder="Search"
          value={filtersState.search}
          onChange={handleSearchChange}
        />
        <div className={styles.show_pii}>
          <input
            id="pii"
            type="checkbox"
            checked={filtersState.showPiiOnly}
            onChange={handleShowPiiChange}
          />
          <label htmlFor="pii">Show PII Only</label>
        </div>
      </div>
      <div className={styles.buttons}>
        <button className={styles.apply_button} onClick={onApplyFilters}>
          Apply Filters
        </button>
        <button className={styles.reset_button} onClick={onResetFilters}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default FilterPanel;
