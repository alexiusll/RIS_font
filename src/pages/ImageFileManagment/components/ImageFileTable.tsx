/*
 * @Descripttion: Do not edit
 * @Author: linkenzone
 * @Date: 2021-03-23 23:17:42
 */
import ProTable, { ProColumns } from '@ant-design/pro-table';
import { Button, Pagination, Result } from 'antd';
import React from 'react';
import { history } from 'umi';
import style from './style.less';

type ImageFileTableProps = {};

// TableList 类型
export type TableListItemType = {
  key: number;
  Description: string;
  Series: string;
  Dimension: string;
  Modality: string;
  ImportTime: string;
};

const tableListDataSource: TableListItemType[] = [
  {
    key: 0,
    Description: '233',
    Series: '233',
    Dimension: '233',
    Modality: '233',
    ImportTime: '233',
  },
  {
    key: 1,
    Description: '233',
    Series: '233',
    Dimension: '233',
    Modality: '233',
    ImportTime: '233',
  },
  {
    key: 2,
    Description: '233',
    Series: '233',
    Dimension: '233',
    Modality: '233',
    ImportTime: '233',
  },
];

const columns: ProColumns<TableListItemType>[] = [
  {
    title: 'Description',
    width: 120,
    dataIndex: 'Description',
    render: (text) => {
      return text;
    },
  },
  {
    title: 'Series #',
    width: 120,
    dataIndex: 'Series',
    render: (text) => {
      return text;
    },
  },
  {
    title: 'Dimension W*H*D*N',
    width: 120,
    dataIndex: 'Dimension',
    render: (text) => {
      return text;
    },
  },
  {
    title: 'Modality',
    width: 120,
    dataIndex: 'Modality',
    render: (text) => {
      return text;
    },
  },
  {
    title: 'Import Time',
    width: 120,
    dataIndex: 'ImportTime',
    render: (text) => {
      return text;
    },
  },
];

const expandedRowRender = () => {
  const data: TableListItemType[] = [
    {
      key: 0,
      Description: '233',
      Series: '233',
      Dimension: '233',
      Modality: '233',
      ImportTime: '233',
    },
    {
      key: 1,
      Description: '233',
      Series: '233',
      Dimension: '233',
      Modality: '233',
      ImportTime: '233',
    },
    {
      key: 2,
      Description: '233',
      Series: '233',
      Dimension: '233',
      Modality: '233',
      ImportTime: '233',
    },
  ];
  return (
    <ProTable
      className={style.custom_table}
      tableStyle={{ margin: 0 }}
      columns={columns}
      headerTitle={false}
      search={false}
      options={false}
      dataSource={data}
      pagination={false}
      expandable={{
        expandedRowRender: () => {
          return 233;
        },
      }}
    />
  );
};

const ImageFileTable: React.FC<ImageFileTableProps> = () => {
  return (
    <>
      <ProTable<TableListItemType>
        bordered // 显示边框
        pagination={false} // 不显示自带的分页器
        columns={columns}
        request={(params, sorter, filter) => {
          // 表单搜索项会从 params 传入，传递给后端接口。
          console.log(params, sorter, filter);
          return Promise.resolve({
            data: tableListDataSource,
            success: true,
          });
        }}
        rowKey="key"
        expandable={{ expandedRowRender }}
        search={false}
        dateFormatter="string" // 转化 moment 格式数据为特定类型，false 不做转化
        headerTitle="影像文件管理"
        toolBarRender={() => [<Button key="show">查看日志</Button>]}
      />

      <Pagination
        style={{ marginTop: '18px', textAlign: 'center' }}
        showSizeChanger
        // onShowSizeChange={onShowSizeChange}
        defaultCurrent={3}
        total={500}
      />
    </>
  );
};

export default ImageFileTable;
