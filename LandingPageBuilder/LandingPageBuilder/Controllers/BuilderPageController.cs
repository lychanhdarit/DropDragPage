using Microsoft.AspNetCore.Mvc;

namespace LandingPageBuilder.Controllers
{
    public class BuilderPageController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
