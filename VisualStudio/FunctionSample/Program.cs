using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Function
{
    class Program
    {
        //デリゲート
        delegate void SimpleFunctionType();

        static void HelloWorld()
        {
            Console.WriteLine("Hello World!1");
        }

        static void Main(string[] args)
        {
            //デリゲート型の変数に関数を代入
            SimpleFunctionType func = HelloWorld;
            func.Invoke();

            //匿名メソッド式
            func = delegate() { Console.WriteLine("Hello World!2"); };
            func.Invoke();

            //ラムダ式
            func = () => Console.WriteLine("Hello World!3");
            func.Invoke();

            //定義済みデリゲート
            Action func1 = () => Console.WriteLine("Hello World!4");

            //即時実行
            new Action(() => Console.WriteLine("Hello World!5")).Invoke();

            //引数あり
            new Action<string>(message => Console.WriteLine(message)).Invoke("Hello World!6");

            //戻り値あり
            new Func<string>(() => "Hello World!7").Invoke();

            //Comparisionデリゲート
            Comparison<int> comp = (x, y) => y - x;
            Console.WriteLine(comp(1, 2));
            var list = new[] { 1, 2 }.ToList();
            list.Sort((x, y) => y - x);
            list.ForEach((i) => Console.WriteLine(i));
        }
    }
}
