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
            var page = new MakeHtmlSampleTemplate();
            var pageContent = page.TransformText();
            System.IO.File.WriteAllText("outputPage.html", pageContent);
        }
    }
}
