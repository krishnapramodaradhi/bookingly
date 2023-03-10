import { Category } from '@prisma/client';
import { FC, useState } from 'react';
import styles from './CategoryFilter.module.css';

const CategoryFilter: FC<{
  categories: Category[];
  filterCategory: (category: string) => void;
}> = ({ categories, filterCategory }) => {
  if (!categories) {
    return <p>Loading...</p>;
  }
  const [category, setCategory] = useState('all');

  const onCategoryClickHandler = (category: string) => {
    setCategory(category);
    filterCategory(category);
  };
  return (
    <ul role='list' className={styles.categories}>
      <li
        value='all'
        className={category === 'all' ? styles.active : ''}
        onClick={() => onCategoryClickHandler('all')}
      >
        All
      </li>
      {categories.map((c) => {
        return (
          <li
            key={c.id}
            value={c.name.toLowerCase()}
            onClick={() => onCategoryClickHandler(c.name.toLowerCase())}
            className={category === c.name.toLowerCase() ? styles.active : ''}
          >
            {c.name}
          </li>
        );
      })}
    </ul>
  );
};

export default CategoryFilter;
