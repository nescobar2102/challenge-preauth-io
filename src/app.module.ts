import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GildedRoseService } from './game-02/gilded-rose.service';
import { Game01Service } from './game-01/game-01.service';
import { GildedRoseController } from './game-02/gilded-rose.controller';
import { Game01Controller } from './game-01/game-01.controller';

@Module({
  imports: [],
  controllers: [AppController, GildedRoseController, Game01Controller],
  providers: [AppService, GildedRoseService, Game01Service],
})
export class AppModule {}
