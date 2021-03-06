---
layout: post
title: "第四章：工厂模式 - Head First 设计模式"
categories:
- 设计模式
tag: [设计模式]
---

## 工厂模式

1. 简单工厂
2. 静态工厂
3. 工厂方法模式：通过让子类决定该创建的对象是什么，来达到将对象创建过程封装的目的。
4. 抽象工厂模式

所有工厂模式都用来封装对象的创建。

应用工厂模式，客户在实例化对象时，只会依赖于接口，而不是具体类。这样针对接口编程，而不针对实现编程，让代码更有弹性，可以应对未来的扩展。

##### 静态工厂

静态工厂与简单工厂相比，不需要使用创建对象的方法来实例化，但不能通过继承来改变创建方法的行为。

##### `工厂方法模式`定义了一个创建对象的接口，但由子类决定要实例化的的类是哪一个。工厂方法让类把实例化推迟到子类。(所谓的"接口"这里指的是父类中的抽象的工厂方法，即PizzStore的orderPizza())

工厂方法模式通过让子类决定该创建的对象是什么，来达到将对象创建的过程封装的目的。

##### 工厂方法模式的类图：p134图

![p134图](/images/design-pattern/p134.png)

##### `抽象工厂模式`提供给一个接口，用于创建相关或依赖对象的家族，而不需要明确指定具体类。

##### 抽象工厂模式的类图：p156图

![p156图](/images/design-pattern/p156.png)

### 比较工厂方法模式和抽象工厂模式：p160图,p161图

工厂方法：<br />
![p160图](/images/design-pattern/p160.png)<br/>
抽象工厂：<br />
![p161图](/images/design-pattern/p161.png)

1. 抽象工厂的方法经常以工厂方法的方式实现。
2. 二者异同（对话形式）：p158.

### 例子：比萨商店(PizzStore,订购比萨)的例子

#### 1.简单工厂的设计：p115代码

![p115图](/images/design-pattern/p115.png)

#### 2.静态工厂的设计：把简单工厂的工厂方法设为static

跟简单工厂相比，静态工厂的优点是不需要创建SimplePizzaFactory对象，缺点是不能通过继承来改变创建方法的行为。

#### 3.工厂方法模式的设计：p132图

![p134图](/images/design-pattern/p134.png)

(PizzStore的orderPizza()是abstract方法。)

#### 4.抽象工厂模式的设计：p157图，p152代码，p147代码

![p147图](/images/design-pattern/p147.png)

![p152图](/images/design-pattern/p152.png)

![p157图](/images/design-pattern/p157.png)

(PizzStore的orderPizza()是abstract方法。)

引入了抽象工厂来创建比萨原料家族(产品家族)。通过抽象工厂所提供的接口，可以创建产品的家族，利用这个接口写代码，我们的代码将从实际工厂解耦，以便在不同上下文中实现各式各样的工厂，制造出各种不同的产品。例如：不同的区域、不同的操作系统、不同的外观及操作。

PS：上面的例子中，参数type应该改为常量或者枚举。

## 设计原则

在设计模式中，“实现一个接口”泛指“实现某个超类型(可以是类或接口)的某个方法”。

当你直接实例化一个对象时，就是在依赖它的具体类。

##### 设计原则6：依赖倒置原则，即要依赖抽象，不要依赖具体类。

1. 不能让高层组件依赖低层组件。
2. 不管高层或低层组件，两者都应该依赖于抽象。
3. 同很多原则一样，应该尽量达到，但不是随时都要遵守。详见p143.

这个原则比较抽象，原文解释比较长，在p139.



