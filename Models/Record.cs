using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace WebGameApi.Models;

public class Record
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? Id { get; set; }

    public string account_name { get; set; } = null!;

    [BsonRepresentation(BsonType.Decimal128)]
    public decimal time { get; set; }

}