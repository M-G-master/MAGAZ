import React from 'react';
import styles from './Characteristics.module.scss';

export const characteristicsText =
  'Вид-Отвертка стандартная;  Длина-100 мм; Материал рукоятки-Пластик, резина, двухкомпонентный; Тип-SL (шлицевая); Тип шлица-SL; Артикул производителя-1951845; Штрих-код-5706919518456; Торговая марка-IRWIN; Страна производителя-Дания';

function Characteristics() {
  const [open, setOpen] = React.useState(false);
  return (
    <div className={styles.sort}>
      <div className={styles.sortLabel}>
        <span onClick={() => setOpen(!open)}>
          <img className={styles.imgIcon} src={'./img/icon1.png'} alt={'images'} />
          Характеристики
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

export default Characteristics;
