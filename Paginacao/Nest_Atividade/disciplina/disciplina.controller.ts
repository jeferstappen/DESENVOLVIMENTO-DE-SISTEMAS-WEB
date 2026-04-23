import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { DisciplinaService } from './disciplina.service';
import { Disciplina } from './entities/disciplina.entity';

@Controller('rest/sistema/disciplinas')
export class DisciplinaController {
  constructor(private readonly disciplinaService: DisciplinaService) {}

  @Post('criar')
  create(@Body() disciplina: Disciplina) {
    return this.disciplinaService.create(disciplina);
  }

  @Get('listar')
  findAll(
    @Query('page') page: string = '1',
    @Query('limit') limit: string = '10'
  ) {
    return this.disciplinaService.findAll(+page, +limit);
  }
}