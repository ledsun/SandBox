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

            //即時実行
            new Action(() => Console.WriteLine("Hello World!4")).Invoke();
        }
    }
}
