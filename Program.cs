using WebGameApi.Models;
using WebGameApi.Services;
using Microsoft.Extensions.FileProviders;

var builder = WebApplication.CreateBuilder(args);

builder.Services.Configure<WebGameDBSettings>(
    builder.Configuration.GetSection("MongoDB"));

builder.Services.AddSingleton<AccountService>();
builder.Services.AddSingleton<RecordService>();
builder.Services.AddSingleton<SavesService>();
builder.Services.AddSingleton<UpgradesService>();

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();










var app = builder.Build();

app.UseSwagger();
app.UseSwaggerUI();

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();

//PhysicalFileProvider fileProvider = new PhysicalFileProvider(
    //Path.Combine(Directory.GetCurrentDirectory(), @"game"));
DefaultFilesOptions defoptions = new DefaultFilesOptions();
defoptions.DefaultFileNames.Clear();
//defoptions.FileProvider = fileProvider;
defoptions.DefaultFileNames.Add("index.html");
app.UseDefaultFiles(defoptions);

app.UseStaticFiles();
/*
app.UseStaticFiles(new StaticFileOptions()
{
    //FileProvider = fileProvider,
    RequestPath = new PathString("")
});
*/
app.Run();
