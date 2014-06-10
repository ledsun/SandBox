package main

import (
	"fmt"
	"math/rand"
)

func main() {
	// Seedを変えない限り常に同じのが帰ってくるくさい
	// どうやって使うんだ？
	rand.Seed(100)

	// 負数を与えるとpanicを起こす
	// panicというのが例外のようだ
	fmt.Println("My favorite number is", rand.Intn(10))
}
