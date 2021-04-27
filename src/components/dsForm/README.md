# dsForm


labelWidth 是必须的。可以设置text-align；

注意，text-align；justify； 在火狐浏览器是不生效的；想要兼容火狐浏览器的text-align；justify属性；
labelName 是需要写成静态的，不能动态传参；

（要么别提这种需求，要么不兼容火狐，要么自己手写别用组件）

 
 ### 验证功能
 
 #### 参考 Element UI 的 Form 表单， 触发验证流程为：
 1、输入组件（Input、Select 等）的 change 事件会通过封装的公共方法，emit 到 Form 组件
 2、Form 组件监听到事件后执行验证行为
 
 #### 对于dsForm 组件
 1、预定义的输入组件直接触发验证
 2、自定义组件，需要在封装组件的时候 增加 xxx 方法, 触发Form 组件进行验证 
 
 
 
 
  
 
 


