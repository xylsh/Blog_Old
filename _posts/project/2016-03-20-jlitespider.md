---
layout: post
title: JLiteSpider-轻量级的java爬虫接口
description: 
categories: project
---


前几天在开发者头条上看到了[JLiteSpider](https://github.com/luohaha/JLiteSpider)这个项目，是一个轻量java爬虫接口，抽象了编写爬虫程序中常见的结构和动作，作者是[luohaha](https://github.com/luohaha).我觉得这个项目还可以改进下，于是[fork后](https://github.com/xylsh/JLiteSpider)，花了点时间修改，下面是更新的内容。

1. 按照原版的设计,有2个缺点:
  * 如果要爬取的url很多,加起来的网页总大小很大,会撑爆内存
  * 如果要爬取的url是从分布式队列/数据库/文件等获取的,当前设计不够适应  
所以新版引入了迭代器模式(Iterator),既解决了上面2个问题,而且以"懒加载"的形式,避开巨大数据量时一次性读入内存的负担,Saver在使用爬取结果时才真正发出请求,延迟了爬取动作,带来了性能提升.
2. Saver.save(K,V)作为存储api,只抽象了存储K/V形式的情况,感觉还是太局限了,改成save(Entry)形式.
3. 增加异常处理器ErrorProcessor,客户可以控制遇到异常时的处理策略,比如把爬取失败的任务放到队列末尾
4. 强迫症:
  - 去掉代码中所有`TODO Auto-generated catch block`
  - 所有tab改成空格


