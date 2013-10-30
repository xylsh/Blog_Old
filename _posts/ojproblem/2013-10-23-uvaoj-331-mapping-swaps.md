---
layout: post
title: "UVaOJ 331 Mapping the Swaps"
category: OJ Problem
---

## 题目链接

[UVaOJ 331 Mapping the Swaps](http://uva.onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&category=108&page=show_problem&problem=267)

## 分析

1. 非常典型的用回溯法解决的题目。

2. 画出解答树分析发现，从左到右遍历元素，只交换 “大小”->“小大”，（大的往后移，小的往前移），这样交换的步数一定是最少步数。

3. 一个数组在交换过程中可能出现多个“大小”这样的相邻元素，每一组“大小”都对应这一条能到达答案结点的路径，多个“大小”意味着多个分支。每条路径都走一遍。

4. 举个例子

    5723->5273->2573->2537->2357
       |->5237->2537->2357</pre>
当到达5273时，出现了2组“大小”元素，分别为52和73,对应着解答树的2个分支。

## 题解

    #include <stdio.h>
    #include <stdlib.h>
    #include <string.h>
    #define MAX 8

    int array[MAX];
    int dest[MAX];   //排序结束想要的结果
    int count;       //计数

    //排序
    void sort(int *s,int s_length){  
        int i,j,tmp;
        for(i=0; i<s_length; i++)
            for(j=i; j<s_length; j++)
                if( s[i] > s[j] ){
                    tmp = s[i];
                    s[i] = s[j];
                    s[j] = tmp;
                }
    }
    //判断2个int数组的元素是否相等
    int isEqual(int *s,int *d,int length){  
        int i,is_equal=1;
        for(i=0; i<length; i++)
            if( s[i] != d[i] ){ 
                is_equal = 0;
                break;
            }

        return is_equal;
    }

    //交换2个数的值
    void swap(int *a,int *b){
        int tmp = *a;
        *a = *b;
        *b = tmp;
    }

    //深度优先遍历解答树
    void dfs(int length,int step_num){   //length保存的是array长度-1  
        int i;
        if( isEqual(array,dest,length+1) && step_num != 0 ){  //如果没有swap一次就equal了，就证明原始输入就是排好序的;递归边界
            count++;
        }else
            for(i=0; i<length; i++)                  //i只循环到n-2(最后一个元素的前一个元素)
                if( array[i] > array[i+1] ){
                    swap(&array[i], &array[i+1]);    //如果交换元素i和i+1
                    dfs(length,step_num+1);
                    swap(&array[i], &array[i+1]);    //如果不交换元素i和i+1
                }
    }

    int main(){
        int n,i,set_num = 0;
    
        while( scanf("%d",&n) && n != 0 ){  
            //initial
            count = 0;
            set_num++;

            for(i=0; i<n; i++){  
                scanf("%d",&array[i]);
                dest[i] = array[i];
            }

            sort(dest,n);

            dfs(n-1,0);

            printf("There are %d swap maps for input data set %d.\n",count,set_num);
        }

        return 0;
    }

