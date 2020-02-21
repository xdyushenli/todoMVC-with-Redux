# 踩坑记录
* 神奇的 css 属性: appearance: none; 该属性可以消除浏览器的默认样式, 常常在自定义 button、radio、checkbox 时使用。

* 在切换元素显示状态的时候, 可以通过切换上层元素的类名来改变下层元素的样式。前提是要使用父子选择器:
```css
.parent .son {
    /* 一些样式 */
}

/* 修改上层元素类名后 */
.parent2 .son {
    /* 不同的样式 */
}
```
下层元素类名不变, 但样式改变了。

* 使用 redux 的一个小技巧, 在编写容器组件时, 常常需要定义 mapDispatchToProps, 内部这些事件处理函数在执行的时候, 常常需要获取到函数执行时所在的组件的 props。
这时, 可以使用如下方式将函数执行时的 this 指向 props 对象:
```js
// 定义事件处理函数
function mapDispatchToProps (dispatch, ownProps) {
    return {
        toggleTodo: function (e) {
            // ...
        },
    }
}

// 绑定事件
<li onClick={(e) => this.props.toggleTodo(e)}>
```

* 使用 switch 语句的时候, 中间要加上 break, 不然会一直执行后面的代码。