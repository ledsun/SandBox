using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace TupleSample
{
    class Program
    {
        static void Main(string[] args)
        {
            var myBag = Tuple.Create("お名前", 42, DateTime.Now);

            //値が取れる
            Console.WriteLine(myBag.Item1);
            Console.WriteLine(myBag.Item2);
            Console.WriteLine(myBag.Item3);

            //型も取れる
            Console.WriteLine(myBag.Item3.GetType());

            //インスタンス生成パターン
            var myBag2 = Tuple.Create<string, int, DateTime>("name", 42, DateTime.Now);
            var myBag3 = new Tuple<string, int, DateTime>("name", 42, DateTime.Now);
        }
    }
}
