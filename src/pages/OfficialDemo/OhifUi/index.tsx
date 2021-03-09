/*
 * @Descripttion:
 * @Author: linkenzone
 * @Date: 2021-03-08 09:54:41
 */
import React, { useState } from 'react';
import { Select, Checkbox, LayoutButton, OverlayTrigger } from '@ohif/ui';

// eslint-disable-next-line @typescript-eslint/ban-types
const Example: React.FC<{}> = () => {
  const [select, setSelect] = useState('2');

  const [check, setCheck] = useState(true);

  const [selectedCell, setSelectedCell] = useState({ className: 'hover', col: 1, row: 1 });

  return (
    <div>
      <Select
        onChange={(e) => {
          console.log(e, 'e');
          setSelect(e);
        }}
        options={[
          {
            key: 'Option1',
            value: '1',
          },
          {
            key: 'Option2',
            value: '2',
          },
        ]}
        value={select}
      />

      <Checkbox
        checked={check}
        label={'Sample check'}
        onChange={(e) => {
          setCheck(e);
        }}
      />

      {/* <OverlayTrigger
        key={`example-right`}
        placement={'right'}
        overlay={
          //   <Tooltip placement={placement} className="in" id={`tooltip-right`}>
          //     Here I am!
          //   </Tooltip>
          233
        }
      >
        <button> Tooltip on right</button>
      </OverlayTrigger> */}

      {/* <LayoutButton selectedCell={selectedCell} onChange={(cell: any) => setSelectedCell(cell)} /> */}
    </div>
  );
};

export default Example;
