import { Module } from '@nestjs/common';
import { LoggerModule } from 'nestjs-pino';
import { AdressesModule } from './adresses/adresses.module';
import { AppController } from './app.controller';
import { AuthenticationModule } from './authentication/authentication.module';
import { CashOpsModule } from './cash-ops/cash-ops.module';
import { CustomersModule } from './customers/customers.module';
import { HealthCheckModule } from './health-check/health-check.module';
import { ItemsModule } from './items/items.module';
import { LoyaltyModule } from './loyalty/loyalty.module';
import { NotificationsModule } from './notifications/notifications.module';
import { RegistryOpsModule } from './registry-ops/registry-ops.module';
import { SalesModule } from './sales/sales.module';
import { ServiceCatalogModule } from './service-catalog/service-catalog.module';
import { WorkerProcessModule } from './worker-process/worker-process.module';

@Module({
  imports: [
    AdressesModule,
    AuthenticationModule,
    CashOpsModule,
    CustomersModule,
    HealthCheckModule,
    ItemsModule,
    LoyaltyModule,
    NotificationsModule,
    RegistryOpsModule,
    SalesModule,
    ServiceCatalogModule,
    WorkerProcessModule,
    LoggerModule.forRoot({
      pinoHttp: {
        safe: true,
        prettyPrint: process.env.NODE_ENV === 'development'
      }
    }),
  ],
  controllers: [AppController],
})
export class AppModule {}
