using WebGameApi.Models;
using WebGameApi.Services;
using Microsoft.AspNetCore.Mvc;

namespace WebGameApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class SavesController : ControllerBase
{
    private readonly SavesService _savesService;

    public SavesController(SavesService savesService) =>
        _savesService = savesService;

    [HttpGet]
    public async Task<List<Saves>> Get() =>
        await _savesService.GetAsync();

    [HttpGet("{name}")]
    public async Task<ActionResult<Saves>> Get(string name)
    {
        var save = await _savesService.GetAsync(name);

        if (save is null)
        {
            return NotFound();
        }

        return save;
    }
    [HttpPost]
    public async Task<IActionResult> Post(Saves newSaves)
    {
        await _savesService.CreateAsync(newSaves);

        return CreatedAtAction(nameof(Get), new { id = newSaves.Id }, newSaves);
    }
    [HttpPut("{name}")]
    public async Task<IActionResult> Update(string name, Saves updatedSave)
    {
        var save = await _savesService.GetAsync(name);

        if (save is null)
        {
            return NotFound();
        }

        updatedSave.Id = save.Id;

        await _savesService.UpdateAsync(name, updatedSave);

        return NoContent();
    }
    [HttpDelete("{name}")]
    public async Task<IActionResult> Delete(string name)
    {
        var record = await _savesService.GetAsync(name);

        if (record is null)
        {
            return NotFound();
        }

        await _savesService.RemoveAsync(name);

        return NoContent();
    }
}