import React,{ Component } from 'react';
import { Card, Button, Icon, Table, Modal,message } from 'antd';

import { reqCategories, reqAddCategory } from '../../api'
import MyButton from '../../components/my-button';
import AddCategoryForm from './add-category-form';
import './index.less'


export default class Category extends Component {
  state = {
    categories:[], //一级分类列表
    isShowAddCategory: false //显示添加品类
  };

  async componentDidMount() {
    const result = await reqCategories('0');
    // console.log(result);

    if(result){
      this.setState({categories:result});
    }
  }

  //显示添加品类
  showAddCategory = () =>{
    this.setState({
      isShowAddCategory:true
    })
  };

  //隐藏添加品类
  hideAddCategory = () =>{
    this.setState({
      isShowAddCategory: false
    })
  };

  //添加品类
  addCategory = () =>{
    //1.表单校验
    //2.收集表单数据
    this.addCategoryform.props.form.validateFields(async(err,values) =>{
       if(!err){
         //校验通过
         // console.log(values)
         const {parentId,categoryName} = values;
         const result = await reqAddCategory(parentId,categoryName);
         if(result){
           //添加分类成功
           message.success('添加分类成功~');
           this.setState({
             isShowAddCategory:false
           })
         }
       }
    })
    //3.发送请求
    // console.log(this.addCategoryform);//实例对象
  };

  render() {
    const {categories,isShowAddCategory} = this.state;
    const columns = [
      //决定表头内容
      {
        title: '品类名称',
        dataIndex: 'name',
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
   /* const data = [
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
    ];*/

    return <Card title="一级分类列表" extra={<Button type="primary" onClick={this.showAddCategory}><Icon type="plus"/>添加品类</Button>}>
      <Table
        columns={columns}
        dataSource={categories}
        bordered
        pagination={{
          showSizeChanger: true,
          pageSizeOptions: ['3', '6', '9', '12'],
          defaultPageSize: 3,
          showQuickJumper: true
        }}
        rowKey="_id"
      />
      <Modal
        title="添加分类"
        visible={isShowAddCategory }
        onOk={this.addCategory}
        onCancel={this.hideAddCategory}
        okText="确认"
        cancelText="取消"
      >
        {/*第一个form是AddCategoryForm 第二个form是当前Category的实例对象上 addCategoryform*/}
        <AddCategoryForm categories={categories} wrappedComponentRef={(form) => this.addCategoryform = form}/>
      </Modal>
    </Card>
  }
}