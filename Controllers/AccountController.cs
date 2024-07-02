using WebGameApi.Models;
using WebGameApi.Services;
using Microsoft.AspNetCore.Mvc;
using System.Text;
using System.Security.Cryptography;
namespace WebGameApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AccountController : ControllerBase
{
    private readonly AccountService _accountService;

    public AccountController(AccountService accountService) =>
        _accountService = accountService;

    [HttpGet]
    public async Task<List<Account>> Get() =>
        await _accountService.GetAsync();

    [HttpGet("{name}/{password}")]
    public async Task<ActionResult<bool>> Get(string name,string password)
    {
        var account = await _accountService.GetAsync(name);

        if (account is null)
        {
            return NotFound();
        }
        Console.WriteLine(account.password + "   " + getHashSha256(password));
        if(account.password != getHashSha256(password)){
            return BadRequest();
        }
        return true;

    }
    [HttpGet("{name}")]
    public async Task<ActionResult<Account>> Get(string name)
    {
        var account = await _accountService.GetAsync(name);

        if (account is null)
        {
            return NotFound();
        }

        return account;

    }
    public static string getHashSha256(string text)
    {
        byte[] bytes = Encoding.Unicode.GetBytes(text);
        SHA256 sha = SHA256.Create();
        byte[] hash = sha.ComputeHash(bytes);
        string hashString = string.Empty;
        foreach (byte x in hash)
        {   
            hashString += x;
        }
        return hashString;
    }
    [HttpPost]
    public async Task<IActionResult> Post(Account newAccount)
    {
        var account = await _accountService.GetAsync(newAccount.name);

        if (account != null)
        {
            return NotFound();
        }
        newAccount.password = getHashSha256(newAccount.password); 
        await _accountService.CreateAsync(newAccount);

        return CreatedAtAction(nameof(Get), new { id = newAccount.Id }, newAccount);
    }
}