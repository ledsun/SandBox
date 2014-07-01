package main

// このカッコはグループ化だそうだ
import (
	"fmt"
	"math"
)

func main() {
	// Printlnと微妙に違う関数が出てきたぞ
	fmt.Printf("Now you have %g problems.",
		math.Nextafter(2, 3))
}
