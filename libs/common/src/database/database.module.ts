import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: (configService: ConfigService) => {
        console.log('mongodb uri,', configService.get<string>('MONGODB_URI'));
        return {
          uri: configService.get<string>('MONGODB_URI'),

          useUnifiedTopology: true,
        };
      },
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}
