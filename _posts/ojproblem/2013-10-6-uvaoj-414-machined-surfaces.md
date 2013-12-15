---
layout: post
title: "UVaOJ 414 Machined Surfaces"
category: OJ Problem
---

## 题目链接

[UVaOJ 414 Machined Surfaces](http://uva.onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&category=94&page=show_problem&problem=355)

## 分析

该行空格数量 = xmax - 该行X数量，其中，xmax为该组数据中，最多'X'那一行的'X'数量.

## 题解

    #include <stdio.h>
    #include <string.h>
    #define MAX 100

    int main(){ 
    
        int n,xcount,xmax,i,x[MAX],result[MAX];   /* xmax表示，含'x'最多的那一行的'x'数量 */
                                                  /* 数组x表示，每一行的'x'数量 */
        int result_count = 0;   /* result_count表示输入了多少组数据（也就有多少个结果） */                              
        memset(result, 0, sizeof(result));
        char c;
        scanf("%d",&n);
        while( n != 0 ){  
            getchar();     /* 忽略输入n后的换行 */
            xcount = xmax = 0;
            for(i=0; i<n; i++){
                while( (c = getchar()) != '\n'){  /* 遍历当前行,获取该行'X'数量 */
                    if( c == 'X' ) xcount++;
                }
                x[i] = xcount;
                if( xcount > xmax ) xmax = xcount;
                xcount = 0;
            }
            for(i=0; i<n; i++){
                result[result_count] += (xmax - x[i]);
            }
            result_count++;
            scanf("%d",&n);
        }
    
        /* 输出结果 */
        for(i=0; i<result_count; i++){
            printf("%d\n",result[i]);
        }
       
        return 0;
    }

