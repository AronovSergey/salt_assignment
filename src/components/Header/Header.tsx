import React, { FunctionComponent } from 'react';

import { useNavigate } from 'react-router-dom';

import ArrowLeftIcon from '../../assets/icons/arrow-left-icon.svg';
import { IBreadcrumb } from '../../declarations/interfaces';
import Divider from '../UI/Divider';
import Breadcrumb from './Breadcrumb';

import styles from './Header.module.scss';

interface IProps {
  title: string;
  previousPage?: string;
  breadcrumbs?: IBreadcrumb[];
}

const Header: FunctionComponent<IProps> = ({
  title,
  previousPage,
  breadcrumbs,
}) => {
  const navigate = useNavigate();

  return (
    <div className="section">
      <div className={styles.header}>
        {previousPage && (
          <img
            className={styles.previous_button}
            src={ArrowLeftIcon}
            alt="<"
            onClick={() => navigate(previousPage)}
          />
        )}

        <div>
          <h1>{title}</h1>
          <div className={styles.breadcrumbs}>
            {breadcrumbs &&
              breadcrumbs.map((breadcrumb, index) => {
                return (
                  <React.Fragment key={index}>
                    <Breadcrumb breadcrumb={breadcrumb} />
                  </React.Fragment>
                );
              })}
          </div>
        </div>
      </div>
      <Divider className="no_margin_bottom" />
    </div>
  );
};

export default Header;
