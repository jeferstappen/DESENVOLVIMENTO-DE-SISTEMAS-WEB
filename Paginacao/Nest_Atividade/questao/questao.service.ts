import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Questao } from './entities/questao.entity';

@Injectable()
export class QuestaoService {
  constructor(
    @InjectRepository(Questao)
    private questaoRepository: Repository<Questao>,
  ) {}

  async create(questao: Questao) {
    return this.questaoRepository.save(questao);
  }

  async findAll() {
    const dados = await this.questaoRepository.find();
    return { dados };
  }
}