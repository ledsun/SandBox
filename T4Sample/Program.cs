using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace T4Sample
{
    class Program
    {
        static void Main(string[] args)
        {
            //htmlの生成
            var page = new MakeHtmlSampleTemplate();
            var pageContent = page.TransformText();
            System.IO.File.WriteAllText("outputPage.html", pageContent);

            //クラスファイルの生成
            var data = new ClassData();
            data.ClassName = "QuestionAbout1";
            data.Properties.Add(new PropertyData("Value", typeof(int), false));
            data.Properties.Add(new PropertyData("Name", typeof(string), false));
            data.Properties.Add(new PropertyData("Id1", typeof(int), true));
            data.Properties.Add(new PropertyData("Id2", typeof(int), true));
            var classGenerator = new MakeClassSampleTemplate(data);
            var classContent = classGenerator.TransformText();
            System.IO.File.WriteAllText("outputClass.cs", classContent);
        }
    }
}
