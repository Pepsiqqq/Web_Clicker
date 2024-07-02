using WebGameApi.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;
using MongoDB.Bson;

namespace WebGameApi.Services;

public class RecordService
{
    private readonly IMongoCollection<Record> _RecordCollection;

    public RecordService(
        IOptions<WebGameDBSettings> webgameDBSettings)
    {
        MongoClient mongoClient = new MongoClient(
            webgameDBSettings.Value.ConnectionString);

        IMongoDatabase mongoDatabase = mongoClient.GetDatabase(
            webgameDBSettings.Value.DatabaseName);

        _RecordCollection = mongoDatabase.GetCollection<Record>(
            webgameDBSettings.Value.RecordCollectionName);
    }

    public async Task<List<Record>> GetAsync() =>
        await _RecordCollection.Find(_ => true).ToListAsync();

    public async Task<List<Record>> GetAsync(string Name) =>
        await _RecordCollection.Find(x => x.account_name == Name).ToListAsync();

    public async Task CreateAsync(Record newRecord) =>
        await _RecordCollection.InsertOneAsync(newRecord);

    public async Task UpdateAsync(string id, Record updatedRecord) =>
        await _RecordCollection.ReplaceOneAsync(x => x.Id == id, updatedRecord);

    public async Task RemoveAsync(string id) =>
        await _RecordCollection.DeleteOneAsync(x => x.Id == id);
}