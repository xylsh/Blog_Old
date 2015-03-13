---
layout: post
title: "第二章：观察者模式 - Head First 设计模式"
categories:
- 设计模式
tag: [设计模式]
---

## 观察者模式

##### `观察者模式`定义了对象之间的一对多依赖，这样依赖，当一个对象改变状态时，它的所有依赖者都会收到通知并自动更新。

1. 观察者模式提供了一种对象设计，让主题和观察者之间松耦合。当两个对象之间松耦合，它们依然可以交互，但是不太清楚彼此的细节。

2. 程序的正确性不应该依赖于观察者被通知的顺序。

##### 模式类图：p52

![p52图](/images/design-pattern/p52.png)

##### 典型应用：

1. 许多GUI框架大量使用观察者模式，比如Swing API，JButton的事件绑定，jbutton.addActionListener(...).
2. 此模式也被用在许多地方，比如JavaBeans,RMI.

### 例子：气象监测应用

#### 不好的设计1：p42代码

![p42图](/images/design-pattern/p42.png)

1. 针对具体实现编程，这会导致以后增删布告板时需要修改代码。
2. 如果以后增删监测项，连方法参数都要改。
3. 不能做到在运行时动态增删布告板。

#### 观察者模式的设计1：自己实现p56

![p56图](/images/design-pattern/p56.png)

#### 观察者模式的设计2：java内置p64

![p64图](/images/design-pattern/p64.png)

### java内置的观察者模式:p64

图同[观察者模式的设计2：java内置p64]

代码示例：p67
![p67图](/images/design-pattern/p67.png)

*PS：在调用notifyObservers(...)前要调用setChanged()来标记状态已改变。*

#### java.util.Observable的黑暗面

1. Observable是一个类，导致子类不能再继承别的类了。
2. Observable的setChanged()是protected修饰的，这意味着，你不能创建Observable实例组合到你自己的对象中(除非继承自Observable)。


## 设计原则

#### 设计原则4：为了交互对象之间的松耦合设计而努力。

松耦合的设计之所以能让我们建立有弹性的OO系统，能够应对变化，是因为对象之间的依赖降到了最低。





