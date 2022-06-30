using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    [RoutePrefix("api/modalidades")]
    public class ModalidadesController : BaseController
    {
        [HttpGet]
        public IHttpActionResult Get()
        {
            var query = @"select * 
                        from DataNacional D, Modalidade M
                        where D.idModalidade = M.idModalidade";
            var list = ctx.Database.SqlQuery<Mod>(query);
            return Ok(list.ToList());

        }
    }

    public class Mod
    {
        public string idModalidade { get; set; }
        public string nomeModalidade { get; set; }
        public string localCompeticao { get; set; }
        public DateTime iniCompeticao { get; set; }

    }
}
