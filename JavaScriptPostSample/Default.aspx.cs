using System;

namespace JavaScriptPostSample
{
    public partial class _Default : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                lblMessage.Text = "���񃍁[�h����";
            }
            else
            {
                lblMessage.Text = "�|�X�g�o�b�N����";
            }
        }
    }
}
