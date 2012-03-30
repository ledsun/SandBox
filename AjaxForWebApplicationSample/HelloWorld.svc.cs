using System.ServiceModel;
using System.ServiceModel.Activation;
using System.ServiceModel.Web;

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
    }
}
