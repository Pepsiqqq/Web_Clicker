using WebGameApi.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace WebGameApi.Services;

public class UpgradesService
{
    private readonly IMongoCollection<Upgrades> _UpgradesCollection;

    public UpgradesService(
        IOptions<WebGameDBSettings> webgameDBSettings)
    {
        MongoClient mongoClient = new MongoClient(
            webgameDBSettings.Value.ConnectionString);

        IMongoDatabase mongoDatabase = mongoClient.GetDatabase(
            webgameDBSettings.Value.DatabaseName);

        _UpgradesCollection = mongoDatabase.GetCollection<Upgrades>(
            webgameDBSettings.Value.UpgradesCollectionName);
    }

    public async Task<List<Upgrades>> GetAsync() =>
        await _UpgradesCollection.Find(_ => true).ToListAsync();

    public async Task<Upgrades?> GetAsync(string Type) =>
        await _UpgradesCollection.Find(x => x.type == Type).FirstOrDefaultAsync();

    public async Task UpdateAsync(string Type, Upgrades updatedUpgrades) =>
        await _UpgradesCollection.ReplaceOneAsync(x => x.type == Type, updatedUpgrades);

}