﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WebApplication1.Controllers
{
    [RoutePrefix("api/parceiros")]
    public class ParceirosController : BaseController
    {
        [HttpGet]
        public IHttpActionResult Get()
        {
            return Ok(ctx.Parceiro.ToList());
        }
    }
}
