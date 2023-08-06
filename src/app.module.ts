import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule as NestConfigModule } from '@nestjs/config';
import { DatabaseModule } from './shared/database/database.module';
import { ConfigModule } from './shared/config/config.module';

@Module({
  imports: [
    NestConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    ConfigModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
