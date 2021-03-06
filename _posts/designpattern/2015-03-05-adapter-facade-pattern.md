---
layout: post
title: "第七章：适配器模式与外观模式 - Head First 设计模式"
categories:
- 设计模式
tag: [设计模式]
---

## 适配器模式

##### `适配器模式`将一个类的接口，转换成客户期望的另一个接口。适配器让原本接口不兼容的类可以合作无间。

1. 客户通过目标接口调用适配器的方法对适配器发出请求。
2. 适配器使用被适配者接口把请求转换成被适配者的一个或多个调用接口。
3. 客户记得会后到调用的结果，但并未察觉这一切是适配器在起转换作用。

这可以让客户从实现的接口解耦。如果以后想改变接口，适配器可以将改变的部分封装起来，客户就不必为了应对不同的接口而每次跟着修改。

当需要使用一个现有的类而其接口不符合你的期望时，使用适配器。

##### 模式类图(对象适配器)，使用的"组合"：p243图

![p243图](/images/design-pattern/p243.png)

##### 模式类图(类适配器)，使用的多重继承：p244图

![p244图](/images/design-pattern/p244.png)

### 比较装饰者和适配器模式：p252

某些交流电适配器需要改变接口，使用`适配器模式`；<br/>
如果不改变接口，只增加诸如电涌保护、报警等特性，使用`装饰者模式`。

1. 装饰者：不改变接口，但加入责任。
2. 适配器：将一个接口转换成另一个接口。
3. 外观模式： 让接口更简单。

### 例子1：鸭子的例子

#### 适配器模式的设计：p246图，p238代码，p239代码

![p246图](/images/design-pattern/p246_1.png)
![p246图](/images/design-pattern/p246_2.png)
![p238图](/images/design-pattern/p238.png)
![p239图](/images/design-pattern/p239.png)

### 例子2：将枚举适配到迭代器：p249图，p250代码

![p249图](/images/design-pattern/p249.png)

## 外观模式

##### `外观模式`提供了一个统一接口，用来访问子系统中的一群接口。外观定义了一个高层接口，让子系统更容易使用。

1. 改变接口的原因是为了简化接口，
2. 还将客户从组件的子系统中解耦（每项任务都委托子系统相应组件处理）/客户与子系统之间避免紧耦合。

当需要简化并统一一个很大的接口或者一群复杂的接口时，使用外观。

##### 模式类图：p264图
![p264图](/images/design-pattern/p264.png)

### 比较外观模式和适配器模式：

2者的差异不在于它们“包装”了几个类，而在于意图不同。<br/>
1. 适配器模式的意图：改变接口以符合客户期望。
2. 外观模式的意图：提供子系统的一个简化接口。

### 例子1：家庭影院的例子

外观模式的设计：p258图<br/>
![p258图](/images/design-pattern/p258.png)<br/>
其中watchMovie()要做很多事情：p262代码<br/>
![p262图](/images/design-pattern/p262.png)


## 比较适配器/装饰者/外观

- 适配器将一个对象包装起来以改变接口
- 装饰者将一个对象包装起来以增加新的行为和责任
- 外观将一个对象包装起来以简化接口


## 设计原则

#### 设计原则n：最少知识原则：要减少对象之间的交互，只留下几个密友。

在设计中，不要让太多的类耦合在一起，以免修改系统中一部分，会影响到其他部分。如果许多类之间相互依赖，那么这个系统就会变成一个易碎的系统，需要花许多成本维护，也会因为太复杂而不容易被他人理解。

就任何对象而言，在该对象的方法内，我们只应该调用属于一下范围的方法：
1. 该对象本身
2. 被方法参数传递进来的对象
3. 此方法所创建或实例化的任何对象
4. 对象的任何组件

如果调用从另一个调用中返回的对象的方法，如果这样做，相当于向另一个对象的子部分(组件)发请求，而增加我们直接认识的对象梳理。此情况下，原则要我们改为要求该对象为我们做出请求，这样我们就不需要认识该对象的组件。比如：p266代码，p267代码。

缺点：p267问<br/>
![p267图](/images/design-pattern/p267.png)




