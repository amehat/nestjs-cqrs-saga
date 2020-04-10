import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './domain/product/produdct.module';
import { DatabaseModule } from './databases/database.module';
import { DatabaseProvider } from './databases/database.provider';

@Module({
  imports: [
    DatabaseModule,
    ProductModule,
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   host: 'localhost',
    //   port: 3333,
    //   username: 'nestuser',
    //   password: 'nestpwd',
    //   database: 'nest',
    //   entities: ['dist/**/**.entity.js'],
    //   // logging: true,
    //   synchronize: true,
    //   /*
    // dropSchema: true,
    // keepConnectionAlive: true,
    // retryAttempts: 2,
    // retryDelay: 1000,
    // */
    // }),
  ],
  controllers: [AppController],
  providers: [AppService, ...DatabaseProvider],
  exports: [...DatabaseProvider],
})
export class AppModule {}
