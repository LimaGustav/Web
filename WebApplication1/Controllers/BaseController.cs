using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    public class BaseController : ApiController
    {
        public ModuloWebEntities ctx = new ModuloWebEntities();
    }
}
