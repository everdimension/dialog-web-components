/**
 * Copyright 2016 Dialog LLC <info@dlg.im>
 * @flow
 */

import React, { PureComponent } from 'react';
import Trigger from '../Trigger/Trigger';
import Icon from '../Icon/Icon';
import styles from './SidebarHeader.css';

export type Props = {
  appName: string,
  logo: React.Element<any>,
  children?: React.Element<any>
};

class SidebarHeaderMenu extends PureComponent {
  props: Props;

  // $FlowFixMe: children are required, actually
  getChildren = (): React.Element<any> => {
    return this.props.children;
  };

  renderLogo(): ?React.Element<any> {
    const { logo } = this.props;

    if (!logo) {
      return null;
    }

    return (
      <div className={styles.logo}>{logo}</div>
    );
  }

  render(): React.Element<any> {
    const { appName } = this.props;
    const options = {
      attachment: 'top left',
      targetAttachment: 'bottom left',
      constraints: [{
        to: 'scrollParent',
        attachment: 'together'
      }],
      targetOffset: '10px 24px'
    };

    return (
      <Trigger
        options={options}
        renderChild={this.getChildren}
        openHandler={['onClick']}
        closeHandler={['onClick']}
        closeOnDocumentClick
        closeOnDocumentScroll
      >
        <a className={styles.menu}>
          {this.renderLogo()}
          <div className={styles.appName}>{appName}</div>
          <Icon glyph="arrow_drop_down" className={styles.arrow} />
        </a>
      </Trigger>
    );
  }
}

export default SidebarHeaderMenu;
