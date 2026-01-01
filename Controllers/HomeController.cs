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



        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]

		public IActionResult Dashboard()
		{
			return View();
		}

		public IActionResult Sudhir()
		{
			return View();
		}

        public IActionResult LLS()
        {
            return View();
        }

 ROHIT
        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]

		public IActionResult Gora()
		{
			return View();
		}

		[ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)] master

        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
        public IActionResult Book()
        {
            return View();
        }
        public IActionResult KALALAND()
        {
            return View();
        }
    }
}
