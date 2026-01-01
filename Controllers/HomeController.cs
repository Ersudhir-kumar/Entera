using System.Diagnostics;
using Entera.Models;
using Microsoft.AspNetCore.Mvc;

namespace Entera.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

		public IActionResult chanda()
		{
			return View();
		}


		public IActionResult raj()
		{
			return View();
		}

        public IActionResult rajbhar()
        {
            return View();
        }
    }
}
