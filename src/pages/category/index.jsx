import React,{ Component } from 'react';
import { Card, Button, Icon, Table } from 'antd';

import MyButton from '../../components/my-button';
import './index.less'
export default class Category extends Component {
  state = {
    categories:[] //一级分类列表
  }

  render() {
    const columns = [
      //决定表头内容
      {
        title: '品类名称',
        dataIndex: 'categoryName',
      },
      {
        title: '操作',
        dataIndex: 'operation',
        className:'categpry-operation',
        render: text => <div>
          <MyButton>修改名称</MyButton>
          <MyButton>查看其子品类</MyButton>
        </div>
      },
    ];
    //决定表格的数据
    const data = [
      {
        key: '1',
        categoryName: '手机',
        // operation: 'xxx',
      },
      {
        key: '2',
        categoryName: '电脑',
        // operation: 'yyy',
      },
      {
        key: '3',
        categoryName: '耳机',
        // operation: 'zzz',
      },
      {
        key: '4',
        categoryName: '鼠标',
        // operation: 'zzz',
      },
    ];

    return <Card title="一级分类列表" extra={<Button type="primary"><Icon type="plus"/>添加品类</Button>}>
      <Table
        columns={columns}
        dataSource={data}
        bordered
        pagination={{
          showSizeChanger: true,
          pageSizeOptions: ['3', '6', '9', '12'],
          defaultPageSize: 3,
          showQuickJumper: true
        }}

      />
    </Card>
  }
}