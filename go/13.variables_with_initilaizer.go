package main

import "fmt"

// 型推論してる！
var i, j int = 1, 2
var c, python, java = true, false, "no!"

func main() {
	// 大文字メソッドうざいなー。命名規約どうなってんだろう？？
	fmt.Println(i, j, c, python, java)
}
