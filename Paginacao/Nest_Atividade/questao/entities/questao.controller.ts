import { Controller, Get, Post, Body } from '@nestjs/common';
import { QuestaoService } from './questao.service';
import { Questao } from './entities/questao.entity';

@Controller('rest/sistema/questoes')
export class QuestaoController {
  constructor(private readonly questaoService: QuestaoService) {}

  @Post('criar')
  create(@Body() questao: Questao) {
    return this.questaoService.create(questao);
  }

  @Get('listar')
  findAll() {
    return this.questaoService.findAll();
  }
}