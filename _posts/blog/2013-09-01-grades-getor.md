---
layout: post
title: GradesGetor:学院成绩查询应用
description: 受够了学院的URP系统？GradesGetor帮助童鞋们从移动终端快速方便的查询本学期成绩！
category: blog
---

##成绩查询

每学期期末过后，考试成绩也要陆续出来了。遗憾的是，不同科目的老师是在不同且不确定的日期把成绩录入学院的URP系统的。也就是说，如果我们要想及时知道自己的成绩，就只有频繁的登陆URP系统了。非常麻烦。但，你以为这就是最糟糕的事了吗？

**不是。**

秉承了体制内机构网站一贯的风格，URP系统对移动设备支持极不友好，从登陆到查询需要多次点击才能查询到本学期成绩，更受不了的是，非IE内核的浏览器点击菜单无响应，而且时不时一定要清空浏览器所有的记录、缓存才能登陆成功。

于是，童鞋们宝贵又龟速的流量，浪费的时间，焦灼的等待，殷切的目光……

**够了！**

为什么不解决这个问题呢？

于是，[*GradesGetor*][GradesGetor]诞生了。

##GradesGetor

[GradesGetor][GradesGetor]是一个可以帮助本院童鞋们在任何终端快捷方便的查询本学期成绩的Web应用。相较学院URP系统，它的优势在于:

1. 对手机、平板等移动终端的访问非常友好。
2. 更快捷方便， 传输的数据量更小 。输入账号密码即可直接显示本期成绩。
3. 登陆成功率更高。因为应用不需要像浏览器一样清空历史记录或开“隐身模式”。

[GradesGetor][GradesGetor] 采用了[Bootstrap3][Bootstrap]前端框架和[Struts2](http://struts.apache.org/development/2.x/) web应用框架。最近在学习[Struts2](http://struts.apache.org/development/2.x/)，其灵活、优雅的设计令人赞叹。[Bootstrap3][Bootstrap]不兼容[Bootsstrap2][Bootstrap]，其设计思路也从版本2时代的适应PC优先转变为了适应移动设备优先，非常适合用于快速构建令人赏心悦目的网站。

##核心业务逻辑

那么，[GradesGetor][GradesGetor]是怎样从URP获得成绩的呢？

首先，用HTTP数据分析工具抓取分析浏览器与URP的通信，我用的是Google Chrome自带的分析调试工具，你也可以用自己喜欢的别的同类工具，eg:HTTP Analyzer。同时，结合查看网页源码。

经分析发现，URP登陆表单通过POST方式提交参数，参数名为`zjh`和`mm`。其中，`zjh`值为账号名，`mm`参数值为账号密码。另外，URP依靠设置的名为`JSSESIONID`的Cookie来标记用户，所以登陆过后，保存在本地的`JSESSIONID`就像通行证，可以向其请求获得本学期成绩。只要向显示成绩的url发送请求即可获得显示成绩的网页代码。

那么，如何解析获得到的包含了成绩数据的网页代码呢？

##Jsoup！

###Jsoup是什么？

[Jsoup][Jsoup]是一款强大的开源 Java HTML解析神器，其官方介绍道：

> Jsoup is a Java library for working with real-world HTML. It provides a very convenient API for extracting and manipulating data, using the best of DOM, CSS, and jquery-like methods.

[Jsoup][Jsoup]能够：

>- scrape and parse HTML from a URL, file, or string
>- find and extract data, using DOM traversal or CSS selectors
>- manipulate the HTML elements, attributes, and text
>- clean user-submitted content against a safe white-list, to prevent XSS attacks
>- output tidy HTML

###输入HTML

Jsoup解析HTML字符串

    String html = "<html><head><title>First parse</title></head>"  + "<body><p>Parsed HTML into a doc.</p></body></html>";
    Document doc = Jsoup.parse(html);

Jsoup解析body片段

    String html = "<div><p>Lorem ipsum.</p>";
    Document doc = Jsoup.parseBodyFragment(html);
    Element body = doc.body();

Jsoup从URL加载Document

    Document doc = Jsoup.connect("http://example.com/").get();
    String title = doc.title();

Jsoup从文件加载Document

    File input = new File("/tmp/input.html");
    Document doc = Jsoup.parse(input, "UTF-8", "http://example.com/");

###解析网页

这是解析网页的一个例子：

    File input = new File("D:/test.html"); 
    Document doc = Jsoup.parse(input, "UTF-8", "http://example.com/"); 

    Element content = doc.getElementById("content"); 
    Elements links = content.getElementsByTag("a"); 
    for (Element link : links) { 
        String linkHref = link.attr("href"); 
        String linkText = link.text(); 
    }

###更多

想了解更多关于Jsoup的信息，可以访问[Jsoup官网][Jsoup]和[Jsoup Cookbook(中文版)][Jsoup Cookbook(中文版)]。另外，这篇文章也介绍了一些使用方法：[jsoup抓取网页+详细讲解][jsoup抓取网页+详细讲解]。

##结语

[GradesGetor][GradesGetor]已经部署在了Red Hat的 [OpenShift](https://www.openshift.com/) 云平台，欢迎使用和反馈:)。

Enjoy~

感兴趣？[GradesGetor]()已经在Github开源，来使它Greater吧！

***

参考资料：

- [Bootstrap中文网][Bootstrap中文网]
- [Jsoup][Jsoup]
- [Jsoup Cookbook(中文版)][Jsoup Cookbook(中文版)]
- [jsoup抓取网页+详细讲解][jsoup抓取网页+详细讲解]


[GradesGetor]: https://urp-xylsh.rhcloud.com "GradesGetor"
[Bootstrap中文网]: http://www.bootcss.com/
[Bootstrap]: http://getbootstrap.com/
[Jsoup]: http://jsoup.org/
[Jsoup Cookbook(中文版)]: http://www.open-open.com/jsoup/load-document-from-file.htm
[jsoup抓取网页+详细讲解]: http://my.oschina.net/bigyuan/blog/98115


