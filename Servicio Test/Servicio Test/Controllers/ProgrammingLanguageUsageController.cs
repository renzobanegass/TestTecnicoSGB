using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Servicio_Test.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProgrammingLanguageUsageController : ControllerBase
    {
        private static readonly string[] Languages = new[]
        {
            "Javascript", "HTML/CSS", "SQL", "Python", "C++",
        };

        private readonly ILogger<ProgrammingLanguageUsageController> _logger;

        public ProgrammingLanguageUsageController(ILogger<ProgrammingLanguageUsageController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<ProgrammingLanguageUsage> Get()
        {
            var rng = new Random();

            return Languages.Select(x => new ProgrammingLanguageUsage {
                users = rng.Next(0, 1000),
                language = x
            })
            .ToArray();            
        }
    }
}
