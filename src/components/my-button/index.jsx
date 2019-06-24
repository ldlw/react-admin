import React from 'react';
import './index.less';

/*export default function MyButton() {
  return <button className="my-button">退出</button>
}*/
export default function MyButton(props) {
  // console.log(props);//{children: "退出"}
  //组件内包含的内容会挂载到组件的props.clildren
  return <button className="my-button" {...props}/>
}