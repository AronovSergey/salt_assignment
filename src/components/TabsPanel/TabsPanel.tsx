import React from 'react';

import Divider from '../UI/Divider';

import styles from './TabsPanel.module.scss';

interface IProps<T> {
  tabs: T[];
  activeTab: T;
  onTabChange: (tab: T) => void;
}

const TabsPanel = <T extends string>({
  tabs,
  activeTab,
  onTabChange,
}: IProps<T>) => {
  return (
    <div className="section">
      <div className={styles.tabs}>
        {tabs.map((tab) => (
          <div
            key={tab}
            className={`${styles.tab} ${tab === activeTab ? styles.active : ''}`}
            onClick={() => onTabChange(tab)}
          >
            {tab}
          </div>
        ))}
      </div>
      <Divider className="no_margin" />
    </div>
  );
};

export default TabsPanel;
