---
layout: post
title: 小写金额转换为大写
description: 
categories: project
---

## 背景
在有些软件系统中，可能需要把数字形式的金额以中文大写的形式展示，比如说，ERP系统,记账系统等。那么就需要将数字金额转换成中文大写的模块，这非常适合以一个工具类的形式在多个软件系统中复用。

## MoneyCovertor

于是，作为编程练习，我制作了一个Web应用：*[MoneyConvertor][MoneyConvertor]*。它采用*MVC模式（Model-View-Controller）*， 前面说的工具类就是其中的*M(Model)*，实现了核心业务逻辑：将小写的数字金额转换为中文大写金额。功能方面，**整数部分最大支持12位，小数部分最大支持3位**。服务器方面，MoneyConvertor部署于[Redhat][OpenShift]的[OpenShift][OpenShift]云平台。

<截图>

感兴趣？*[MoneyConvertor][MoneyConvertor]*已经在[GitHub][GitHub]开源，来让它更棒吧！


[MoneyConvertor]: https://project-xylsh.rhcloud.com/money_convertor/
[GitHub]: https://github.com/
[OpenShift]: https://www.openshift.com/
[MVC]: http://zh.wikipedia.org/wiki/MVC
