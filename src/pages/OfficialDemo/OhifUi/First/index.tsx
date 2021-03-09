/*
 * @Descripttion:
 * @Author: linkenzone
 * @Date: 2021-03-08 09:23:39
 */

import React from 'react';
import { LayoutButton } from '@ohif/ui';

class Example extends React.Component {
  constructor(props: any) {
    super(props);

    this.state = {
      selectedCell: {
        className: 'hover',
        col: 1,
        row: 1,
      },
    };
  }

  render() {
    return (
      <div>
        <LayoutButton
        //   selectedCell={this.state.selectedCell}
        //   onChange={(cell: any) => this.setState({ selectedCell: cell })}
        />
      </div>
    );
  }
}

export default Example;
