using System;

namespace JavaScriptPostSample
{
    public partial class _Default : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                lblMessage.Text = "初回ロードだよ";
            }
            else
            {
                lblMessage.Text = "ポストバックだよ";
            }
        }
    }
}
