import React, { FunctionComponent } from 'react';

import { useNavigate } from 'react-router-dom';

import ArrowRightIcon from '../../assets/icons/arrow-right-icon.svg';
import { IBreadcrumb } from '../../declarations/interfaces';

import styles from './Header.module.scss';

interface IProps {
  breadcrumb: IBreadcrumb;
}

const Breadcrumb: FunctionComponent<IProps> = ({ breadcrumb }) => {
  const navigate = useNavigate();

  return (
    <>
      <span
        className={`${breadcrumb.disableClick ? '' : styles.breadcrumb}`}
        onClick={() => navigate(breadcrumb.url)}
      >
        {breadcrumb.label}
      </span>
      {!breadcrumb.disableClick && (
        <img className={styles.arrow_right} src={ArrowRightIcon} alt=">" />
      )}
    </>
  );
};

export default Breadcrumb;
