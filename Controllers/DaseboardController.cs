using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Entera.Controllers
{
    public class DaseboardController : Controller
    {
        // GET: DaseboardController
        public ActionResult Daseboard()
        {
            return View();
        }

    }
}
