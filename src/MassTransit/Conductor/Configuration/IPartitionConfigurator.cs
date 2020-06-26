namespace MassTransit.Conductor
{
    using System;


    public interface IPartitionConfigurator
    {
        void Message<T>(Action<IMessagePartitionConfigurator<T>> configure)
            where T : class;
    }
}
