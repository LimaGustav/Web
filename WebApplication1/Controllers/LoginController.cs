using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    [RoutePrefix("api/Login")]
    public class LoginController : BaseController
    {
        [HttpPost]
        public IHttpActionResult Login([FromBody] Acesso a)
        {
            Acesso user = ctx.Acesso.FirstOrDefault(x => x.email == a.email && x.senhaAcesso == a.senhaAcesso);

            if (user == null) return NotFound();

            return Ok(user);
        }
    }
}
