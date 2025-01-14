namespace ServiceBusManagedIdentityConsoleListener;

using System;
using System.Threading.Tasks;
using Azure.Identity;
using MassTransit;
using MassTransit.AzureServiceBusTransport.Configuration;
using Microsoft.Extensions.Hosting;

public class Program
{
    public static async Task Main(string[] args)
    {
        await Host.CreateDefaultBuilder(args)
            .ConfigureServices((hostContext, services) =>
            {
                services.AddMassTransit(x =>
                {
                    x.UsingAzureServiceBus((context, cfg) =>
                    {
                        var settings = new HostSettings
                        {
                            ServiceUri = new Uri("sb://your-service-bus-namespace.servicebus.windows.net"),
                            TokenCredential = new DefaultAzureCredential() // From Azure.Identity.dll
                        };
                        cfg.Host(settings);
                    });
                });
            })
            .Build()
            .RunAsync();
    }
}
