

using Microsoft.EntityFrameworkCore;
var configuration = new ConfigurationBuilder()
	.AddJsonFile("appsettings.json")
.Build();

var builder = WebApplication.CreateBuilder(args);



//builder.Services.AddDbContext<ApplicationDbContext>(options =>
//    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));
//Add services to the container.
builder.Services.AddControllersWithViews();
builder.Services.AddMvc();
//dependancy injection register



var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseRouting();

app.UseAuthorization();

app.MapStaticAssets();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Auth}/{action=Dashboard}/{id?}")
    .WithStaticAssets();


app.Run();
