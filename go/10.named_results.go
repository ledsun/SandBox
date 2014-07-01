package main

import "fmt"

// 戻り値に使う変数を宣言できる
// refやoutとはちょっと違うっぽい
func split(sum int) (x, y int) {
	x = sum * 4 / 9
	y = sum - x
	return
}

func main() {
	fmt.Println(split(17))
}
