import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestaoService } from './questao.service';
import { QuestaoController } from './questao.controller';
import { Questao } from './entities/questao.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Questao])],
  controllers: [QuestaoController],
  providers: [QuestaoService],
})
export class QuestaoModule {}