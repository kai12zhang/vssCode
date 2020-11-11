package main

import (
	"fmt"
	"os"
)

func main() {
	who := "world!"
	if len(os.Args[1:]) > 0 {
		who = ""
		for _, arg := range os.Args[1:] {
			who += " " + arg
		}
	}
	fmt.Println("hello---", who)

	var ret int
	ret = max(12,16)
	fmt.Println("ret---", ret)
	fmt.Println("hello---", who)
	
	test1()
}

// for 语句
func test1(){
	var n [10]int /* n 是一个长度为 10 的数组 */
	var i,j int
 
	/* 为数组 n 初始化元素 */        
	for i = 0; i < 10; i++ {
	   n[i] = i + 100 /* 设置元素为 i + 100 */
	}
 
	/* 输出每个数组元素的值 */
	for j = 0; j < 10; j++ {
	   fmt.Printf("Element[%d] = %d\n", j, n[j] )
	}
}

/* 函数返回两个数的最大值 */
func max(num1, num2 int) int {
	/* 定义局部变量 */
	var result int
 
	if (num1 > num2) {
	   result = num1
	} else {
	   result = num2
	}
	return result
}