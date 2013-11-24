---
layout: post
title: "UVaOJ 10300 Ecological Premium"
category: OJ Problem
---

## 题目链接

[UVaOJ 10300 Ecological Premium](http://uva.onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&category=94&page=show_problem&problem=1241)

## 分析

按照题目的计算方法得出公式：

    单个农民奖金 = 农场面积 / 动物数量 * environmentfriendliness * 动物数量

化简后得：

    单个农民奖金 = 农场面积 * environmentfriendliness

得到输入数据后，计算即可。

## 题解

    #include <stdio.h>
    #include <string.h>
    
    int main(){ 
        int n,f,result[20],i,j;
        int a,b,c;
        memset(result,0,sizeof(result));
    
        scanf("%d",&n);
        for(i=0; i<n; i++){
            scanf("%d",&f);
            for(j=0; j<f; j++){
                scanf("%d %d %d",&a,&b,&c);
                result[i] += a*c;
            }
        }
    
        for(i=0; i<n; i++)
            printf("%d\n",result[i]);
        
        return 0;
    }
    
