package main

import "fmt"

// ２つの値を返せます。
func swap(x, y string) (string, string) {
	return y, x
}

func main() {
	// 代入は:=なの？
	a, b := swap("hello", "world")
	fmt.Println(a, b)
}
