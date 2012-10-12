using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace T4Sample
{
    public class ClassData
    {
        public string ClassName { get; set; }
        public List<PropertyData> Properties { get; set; }

        public ClassData()
        {
            Properties = new List<PropertyData>();
        }

        public string ConstructorPalameters
        {
            get
            {
                return string.Join(
                    ", ",
                    Properties.Select(p => p.ParameterDeclare)
                );
            }
        }

        public string EqualsProcess
        {
            get
            {
                return string.Join(
                    " && ",
                    Properties.Select(p => p.Name + " == other." + p.Name)
                );
            }
        }

        public string GetHashCodeProcess
        {
            get
            {
                return string.Join(
                    " ^ ",
                    Properties.Select(p => p.Name + ".GetHashCode()")
                );
            }
        }

        public int CountID
        {
            get
            {
                return Properties
                    .Where(p => p.IsID)
                    .Count();
            }
        }

        public string GetDummyParameters(int count)
        {
            return string.Join(
                ", ",
                Properties
                    .Where(p => p.IsID)
                    .Take(count)
                    .Select(p => p.ParameterDeclare)
            );
        }

        public string GetDummyConstructorParameters(int count)
        {
            return string.Join(
                ", ",
                Properties.Select(p => p.GetDummyConstructorParameter(count))
            );
        }
    }

    public class PropertyData
    {
        public string Name { get; set; }
        public string Type { get; set; }
        public bool IsID { get; set; }

        public PropertyData(string name, Type type, bool isId)
        {
            Name = name;
            Type = type.Name;
            IsID = isId;

            DummyDict[typeof(int).Name] = new Dictionary<int, string>();
            DummyDict[typeof(int).Name][0] = "1";
            DummyDict[typeof(int).Name][1] = "2";
            DummyDict[typeof(string).Name] = new Dictionary<int, string>();
            DummyDict[typeof(string).Name][0] = "\"a\"";
            DummyDict[typeof(string).Name][1] = "\"b\"";
        }

        public string Declare
        {
            get { return Type + " " + Name; }
        }

        public string ParameterDeclare
        {
            get { return Type + " " + ParameterName; }
        }

        private string ParameterName
        {
            get { return Name.Substring(0, 1).ToLower() + Name.Substring(1); }
        }

        public string ConstructorProcess
        {
            get { return Name + " = " + ParameterName + ";"; }
        }

        public string GetDummyConstructorParameter(int count)
        {
            return DummyDict[Type][count];
        }

        private Dictionary<string, Dictionary<int, string>> DummyDict = new Dictionary<string, Dictionary<int, string>>();
    }

    public partial class MakeClassSampleTemplate
    {
        private ClassData _classData;
        public MakeClassSampleTemplate(ClassData data) { _classData = data; }
    }
}
