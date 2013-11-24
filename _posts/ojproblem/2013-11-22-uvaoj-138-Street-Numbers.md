---
layout: post
title: "UVaOJ 138 Street Numbers"
category: OJ Problem
tag: [数论]
---

## 题目链接

[UVaOJ 138 Street Numbers](http://uva.onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&category=115&page=show_problem&problem=74)

## 分析

1. 设主人公的house编号为k,街道最大house编号为n，

    <pre>题目要求为：
    1+2+3+..+(k-1) = (k+1)+(k+2)+...+n
两边用等差数列求和公式化简，得：
    (k-1+1)(k-1)/2 = (k+1+n)[n-(k+1)+1]/2
两边打开化简，得：
    2 * k^2 = n^2 +n
即：
    k = sqrt( (n^2+n)/2 )
      = sqrt( n(n-1)/2 )</pre>

2. 方法1 暴力法: 因为k必须为整数，所以依次枚举n,凡是使k为整数的n，就是所要求的解。

3. 方法2 解上面的方程：[这里](http://www.cnblogs.com/devymex/archive/2010/09/07/1818983.html)有详细论述。

4. 参考资料：
    * [UVa OJ 138 - Street Numbers (门牌号)](http://www.cnblogs.com/devymex/archive/2010/09/07/1818983.html)  
    * [佩尔方程](http://baike.baidu.com/view/686733.htm)

## 题解

    #include <stdio.h>
    #include <math.h>
    #include <time.h>
    
    int main(){
        long long street;
        int count = 0;
        double house;
        //暴力法
        for(long long street=8; count<10; street++){  
            house = sqrt( street*(street+1)/2 );
            if( house == (long long)house ){  
                printf("%10lld%10lld\n",(long long)house,street);
                count++;
            }
        
        }
        //printf("time used = %f\n", (double)clock()/CLOCKS_PER_SEC);
        return 0;
    }
    
