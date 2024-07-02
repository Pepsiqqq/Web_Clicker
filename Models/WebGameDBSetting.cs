namespace WebGameApi.Models;

public class WebGameDBSettings
{
    public string ConnectionString { get; set; } = null!;
    public string DatabaseName { get; set; } = null!;
    public string AccountCollectionName { get; set; } = null!;
    public string SavesCollectionName { get; set; } = null!;
    public string UpgradesCollectionName { get; set; } = null!;
    public string RecordCollectionName { get; set;} = null!;
}