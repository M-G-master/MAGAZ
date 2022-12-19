import React from 'react';
import styles from './ProductDescription.module.scss';

export const characteristicsText =
  'Отвертки Irwin Pro Comfort имеют высокие показатели долговечности и удобства. Эти отвертки имеют эргономичную трехгранную ручку со скругленными углами из двух материалов, магнитный наконечник с черным фосфатным покрытием и стержень с хромо-ванадиевой стали с коррозионной защитой. Шестигранная шейка оптимизирует передачу крутящего момента при использовании ключа.';

function ProductDescription() {
  let [open, setOpen] = React.useState(false);
  return (
    <div className={styles.sort}>
      <div className={styles.sortLabel}>
        <span onClick={() => setOpen(!open)}>
          <img className={styles.imgIcon} src={'./img/icon1.png'} alt={'images'} />
          Опис товару
        </span>
      </div>
      {open && (
        <div className={styles.sort__popup}>
          <ul>
            <li className={styles.active}>{characteristicsText}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default ProductDescription;
