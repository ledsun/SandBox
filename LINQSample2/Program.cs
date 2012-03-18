using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Ledsun.Alhambra.Db.Helper;
using Ledsun.Alhambra.Db;

namespace LINQSample2
{
    class Program
    {
        static void Main(string[] args)
        {
            //とりあえず1対1パターン
            Console.WriteLine("SQLでjoin");
            var joined = DBHelper.Select(@"
                SELECT 
                    U.ID
                    ,U.NAME
                    ,S.SEX
                FROM M_USER U
                INNER JOIN M_SEX S
                ON U.SEX = S.ID
                ");

            var ret1 = joined.GroupBy(c => c["ID"]).Select(c =>
            {
                return c.First();
            });
            foreach (var a in ret1)
                Console.WriteLine(a["NAME"] + a["SEX"]);
            //×SQL自体がミスりやすい。
            //GroupByは今回は要らないけど1対nだと必要。そして難しい。
            
            Console.WriteLine("LINQでjoin");
            var users = DBHelper.Select(@"SELECT * FROM M_USER");
            var sexs = DBHelper.Select(@"SELECT * FROM M_SEX");

            var ret2 = users.Join(sexs, c => c["SEX"].Int, c => c["ID"].Int, (par1, par2) => new { NAME = par1["NAME"], SEX = par2["SEX"] });
            foreach (var a in ret2)
                Console.WriteLine(a.NAME + a.SEX);
            //現時点で一番簡単なのはこれ。
            //△JOINはちょっと難しい。エラーの原因が分かりずらい。
            //DBHelperからはIEnumrableで帰ってくるけど、SQL自体は実行されているので全行取得しちゃう
            //DBHelperからはyeild return使ってほんとにクエリを返すという技も可能。だがWERER句は後からつかないので絞りこみはあくまでシーケンシャル
            //つなげるテーブルを取得する際にサブクエリぶつけて最小限だけ取るという手はある。チューニングテクニックだわな。

            
            Console.WriteLine("再帰的にSELECT");
            var ret3 = users.Select(c =>
            {
                var sex = DBHelper.SelectOne(new SqlStatement(@"SELECT SEX FROM M_SEX WHERE ID = @SEX@").Replace("SEX", c["SEX"].String)).String;
                return new { NAME = c["NAME"], SEX = sex };
            });
            foreach (var a in ret3)
                Console.WriteLine(a.NAME + a.SEX);
            //微妙にSQLが面倒臭い
            //ユーザ数分SQLが実行されるのはダサい
        }
    }
}
