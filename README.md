# reduxTiny

这是一个关于 react、redux 小案例!

#### 快速开始

```
> # 克隆项目到本地
> git clone https://github.com/Yevvb/reduxTiny.git

> # 进入到文件夹内，下载安装依赖
> cd reduxTiny
> npm install

> # 执行开发环境 webpack 编译和打包、浏览器预览
> npm start

> # localhost:8080/
```

#### 应用基本原型

![一个简单的书架页面](http://7xt64j.com1.z0.glb.clouddn.com/simplebooklist.jpg)

#### 需要 Redux 管理的状态

 - books：书籍列表，点击时右侧显示详情
 - activeBook：当前显示的书籍

#### 拥有这些状态对应的组件

 - book-list:
   - books
   - reducer_books
   - action: selectBook
   - reducer_active_book
 - book-detail: 
   - 接收 activeBook

#### Redux 状态管理流程

![redux workflow](http://7xt64j.com1.z0.glb.clouddn.com/reactreduxworkflow.png)

#### 连接 react 与 redux 的 react-redux

 - react是状态对应的视图view
 - redux管理的是组件对应的状态
 - react-redux 则是连接两者的桥梁 { connect }

react-redux 做的事情相当于是一个容器组件 container，它将 react 管理的视图与 redux 管理的状态转化为 container 的内容，连接了react与redux。

容器组件
 - 负责管理数据和业务逻辑，不负责 UI 的呈现
 - 带有内部状态
 - 使用 Redux 的 API

#### connect() 方法

例如将 BookList UI组件转换成容器组件

```javascript
  import { connect } from 'react-redux';
  export default connect()(BookList);
```

上面的 BookList 就是一个UI组件，通过 react-redux 的connect方法自动生成容器组件。但是并没有逻辑和数据，所以只是单纯的包装。

```javascript
  import { connect } from 'react-redux';
  export default connect(mapStateToProps, mapDispatchToProps)(BookList);
```

 - mapStateToProps: 将 state 对象转换为组件的参数（输入逻辑）
 - mapDispatchToProps: 将事件变成 action 对象，从组件传出去（输出逻辑）

#### redux-promise 中间件的工作流

此例子中并未用到该中间件，下面的例子中有使用到：

使用 redux 管理的一个[气温查询应用](https://giihub.com/Yevvb/weather)

![redux-promise](http://7xt64j.com1.z0.glb.clouddn.com/reduxpromisemiddleware.jpg)

### 参考阅读

[推荐阅读:你可能并不需要Redux](https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367)

[Redux 入门教程（三）：React-Redux 的用法（阮一峰）](http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_three_react-redux.html)
