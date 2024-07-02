using WebGameApi.Models;
using WebGameApi.Services;
using Microsoft.AspNetCore.Mvc;

namespace WebGameApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class UpgradesController : ControllerBase
{
    private readonly UpgradesService _upgradesService;

    public UpgradesController(UpgradesService upgradesService) =>
        _upgradesService = upgradesService;

    [HttpGet]
    public async Task<List<Upgrades>> Get() =>
        await _upgradesService.GetAsync();

    [HttpGet("{type}")]
    public async Task<ActionResult<Upgrades>> Get(string type)
    {
        var upgrade = await _upgradesService.GetAsync(type);

        if (upgrade is null)
        {
            return NotFound();
        }

        return upgrade;
    }
    [HttpPut("{type}")]
    public async Task<IActionResult> Update(string type, Upgrades updatedUpgrade)
    {
        var upgrade = await _upgradesService.GetAsync(type);

        if (upgrade is null)
        {
            return NotFound();
        }

        updatedUpgrade.Id = upgrade.Id;

        await _upgradesService.UpdateAsync(type, updatedUpgrade);

        return NoContent();
    }
}