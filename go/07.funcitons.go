package main

import "fmt"

// 右と同じなら引数の型を省略できる！
func add(x, y int) int {
	return x + y
}

func main() {
	fmt.Println(add(42, 13))
}
