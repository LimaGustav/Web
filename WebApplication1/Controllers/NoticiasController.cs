using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WebApplication1.Controllers
{
    [RoutePrefix("api/noticias")]
    public class NoticiasController : BaseController
    {
        [HttpGet]
        public IHttpActionResult Get()
        {
            return Ok(ctx.Noticia.ToList().OrderBy(x => x.data).Reverse());
        }

        [HttpGet]
        [Route("five")]
        public IHttpActionResult GetFive()
        {
            return Ok(ctx.Noticia.ToList().OrderBy(x => x.data).Reverse().Take(5));
        }
    }
}
