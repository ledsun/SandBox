using System.ServiceModel;
using System.ServiceModel.Activation;
using System.ServiceModel.Web;
using System.Runtime.Serialization;
using System.Collections.Generic;

namespace AjaxForWebApplicationSample
{
    [ServiceContract(Namespace = "")]
    [AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Allowed)]
    public class HelloWorld
    {
        [OperationContract]
        public string Hello()
        {
            return "Hello World!";
        }

        [OperationContract, WebGet]
        public Data Data()
        {
            var ret = new Data();
            ret.name = "テスト太郎";
            ret.value = 100;
            return ret;
        }

        [OperationContract, WebGet]
        public IEnumerable<Data> Datas()
        {
            var a = new Data();
            a.name = "テスト太郎";
            a.value = 100;

            var b = new Data();
            b.name = "テスト次郎";
            b.value = 50;

            return new Data[]{a, b};
        }

        [OperationContract, WebGet]
        public string Echo(string str)
        {
            return str;
        }

        [OperationContract]
        public string PostEcho(Req req)
        {
            return req.str;
        }
    }

    [DataContract]
    public class Data
    {
        [DataMember]
        public string name { get; set; }
        [DataMember]
        public int value { get; set; }
    }

    [DataContract]
    public class Req
    {
        [DataMember]
        public string str { get; set; }
    }
}
