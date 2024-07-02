using WebGameApi.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;
using MongoDB.Bson;

namespace WebGameApi.Services;

public class SavesService
{
    private readonly IMongoCollection<Saves> _SavesCollection;

    public SavesService(
        IOptions<WebGameDBSettings> webgameDBSettings)
    {
        MongoClient mongoClient = new MongoClient(
            webgameDBSettings.Value.ConnectionString);

        IMongoDatabase mongoDatabase = mongoClient.GetDatabase(
            webgameDBSettings.Value.DatabaseName);

        _SavesCollection = mongoDatabase.GetCollection<Saves>(
            webgameDBSettings.Value.SavesCollectionName);
    }
    public async Task<List<Saves>> GetAsync() =>
        await _SavesCollection.Find(_ => true).ToListAsync();

    public async Task<Saves?> GetAsync(string Name) =>
        await _SavesCollection.Find(x => x.account_name == Name).FirstOrDefaultAsync();

    public async Task CreateAsync(Saves newSaves) =>
        await _SavesCollection.InsertOneAsync(newSaves);

    public async Task UpdateAsync(string name, Saves updatedSaves) =>
        await _SavesCollection.ReplaceOneAsync(x => x.account_name == name, updatedSaves);

    public async Task RemoveAsync(string name) =>
        await _SavesCollection.DeleteOneAsync(x => x.account_name == name);
}