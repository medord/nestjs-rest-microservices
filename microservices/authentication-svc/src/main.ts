import { NestFactory } from '@nestjs/core';
import { Transport, ClientOptions } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { join } from 'path'
import * as fs from 'fs'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  Logger.log(fs.existsSync(join(__dirname,'../_proto/authentication.proto')))
  app.connectMicroservice({
    transport: Transport.GRPC,
    package: 'auth',
    protoPath: join(__dirname,'../_proto/authentication.proto'),
      loader: {
        enums: String,
        objects: true,
        arrays: true
      }
  })

  await app.startAllMicroservices();
  await app.listen(3000);
  Logger.log('Auth microservice running');
}
bootstrap();
