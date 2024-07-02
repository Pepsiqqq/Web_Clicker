using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace WebGameApi.Models;

public class Saves
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? Id { get; set; }

    public string account_name { get; set; } = null!;

    [BsonRepresentation(BsonType.Decimal128)]
    public decimal time { get; set; }
    public int wood_count { get; set; }
    public int stone_count { get; set; }
    public int iron_count { get; set; }
    public List<int> wood_upgrades { get; set; } = null!;
    public List<int> stone_upgrades { get; set; } = null!;
    public List<int> iron_upgrades { get; set; } = null!;
}