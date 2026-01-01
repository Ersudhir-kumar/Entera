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

        public IActionResult admin()
        {
            return View();
        }

        public IActionResult chandrabhan()
        {
            return View();
        }

        public IActionResult raju()
        {
            return View();
        }

        public IActionResult ra()
        {
            return View();
        }

        public IActionResult rajjjjjjaaa()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

		public IActionResult RohitChaudhari()
		{
			return View();
		}

	




		public IActionResult newrecords()
		{
			return View();
		}


	

        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    
    }
}
