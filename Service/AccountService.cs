using WebGameApi.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace WebGameApi.Services;

public class AccountService
{
    private readonly IMongoCollection<Account> _AccountCollection;

    public AccountService(
        IOptions<WebGameDBSettings> webgameDBSettings)
    {
        MongoClient mongoClient = new MongoClient(
            webgameDBSettings.Value.ConnectionString);

        IMongoDatabase mongoDatabase = mongoClient.GetDatabase(
            webgameDBSettings.Value.DatabaseName);

        _AccountCollection = mongoDatabase.GetCollection<Account>(
            webgameDBSettings.Value.AccountCollectionName);
    }

    public async Task<List<Account>> GetAsync() =>
        await _AccountCollection.Find(_ => true).ToListAsync();

    public async Task<Account?> GetAsync(string Name) =>
        await _AccountCollection.Find(x => x.name == Name).FirstOrDefaultAsync();

    public async Task CreateAsync(Account newAccount) =>
        await _AccountCollection.InsertOneAsync(newAccount);

    public async Task UpdateAsync(string id, Account updatedAccount) =>
        await _AccountCollection.ReplaceOneAsync(x => x.Id == id, updatedAccount);

    public async Task RemoveAsync(string id) =>
        await _AccountCollection.DeleteOneAsync(x => x.Id == id);
}