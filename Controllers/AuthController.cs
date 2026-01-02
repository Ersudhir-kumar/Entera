using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Entera.Controllers
{
    public class AuthController : Controller
    {
        // GET: AuthController
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult Admin()
        {
            return View();
        }

		public ActionResult Dashboard()
		{
			return View();
		}

	}
}
