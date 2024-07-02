using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace WebGameApi.Models;

public class Account
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? Id { get; set; }

    public string name { get; set; } = null!;

    public string password { get; set; } = null!;

}