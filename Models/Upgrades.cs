using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace WebGameApi.Models;

public class Upgrades
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? Id { get; set; }

    public string type { get; set; } = null!;
    public List<int> cost { get; set; } = null!;
    public List<double> multiplier { get; set; } = null!;
}