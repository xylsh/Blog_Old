---
layout: post
title: "UVaOJ 458 The Decoder"
category: OJ Problem
---

## 题目链接

[UVaOJ 458 The Decoder](http://uva.onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&category=94&page=show_problem&problem=399)

## 分析

解码方法：

    decoded character的ASCII码 = coded characterASCII码 - 7

## 题解

    #include <stdio.h>
    
    int main(){ 
       
        char c;
        while( (c = getchar()) != EOF ){  
            if( c == '\n' )
                printf("\n");
            else
                printf("%c",c-7);
        }
        return 0;
    }
    
    
