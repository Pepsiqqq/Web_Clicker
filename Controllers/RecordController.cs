using WebGameApi.Models;
using WebGameApi.Services;
using Microsoft.AspNetCore.Mvc;

namespace WebGameApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class RecordController : ControllerBase
{
    private readonly RecordService _recordService;

    public RecordController(RecordService recordService) =>
        _recordService = recordService;

    [HttpGet]
    public async Task<List<Record>> Get() =>
        await _recordService.GetAsync();

    [HttpGet("{name}")]
    public async Task<ActionResult<List<Record>>> Get(string name)
    {
        var record = await _recordService.GetAsync(name);

        if (record is null)
        {
            return NotFound();
        }

        return record;
    }
    [HttpPost]
    public async Task<IActionResult> Post(Record newRecord)
    {
        await _recordService.CreateAsync(newRecord);

        return CreatedAtAction(nameof(Get), new { id = newRecord.Id }, newRecord);
    }
     [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(string id)
    {
        var record = await _recordService.GetAsync(id);

        if (record is null)
        {
            return NotFound();
        }

        await _recordService.RemoveAsync(id);

        return NoContent();
    }
}