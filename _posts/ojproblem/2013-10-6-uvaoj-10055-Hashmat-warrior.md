---
layout: post
title: "UVaOJ 10055 Hashmat the brave warrior"
category: OJ Problem
---

## 题目链接

[UVaOJ 10055 Hashmat the brave warrior](http://uva.onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&category=94&page=show_problem&problem=996)

## 分析

1.这是一道简单题。

2.因为The input numbers are not greater than 2^32，所以要选long long类型.

## 题解

    #include <stdio.h>
    
    int main(){ 
        
        /* 因为The input numbers are not greater than 2^32，所以要选long long类型 */
        long long a,b;
        
        while( scanf("%lld %lld", &a, &b) != EOF ){  
            if(a>b)
                printf("%lld\n",a-b);
            else
                printf("%lld\n",b-a);
        }
        
        return 0;
    }

