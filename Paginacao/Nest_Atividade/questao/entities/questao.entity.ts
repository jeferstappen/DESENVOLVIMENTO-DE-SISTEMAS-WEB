import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('questions')
export class Questao {
  @PrimaryGeneratedColumn({ name: 'QUESTION_ID' })
  questionId: number;

  @Column({ name: 'SUBMODULE_ID' })
  submoduleId: number;

  @Column({ name: 'QUESTION_TEXT', type: 'text' })
  questionText: string;

  @Column({ name: 'OPTIONS', type: 'json' }) 
  options: any;

  @Column({ name: 'CORRECT_ANSWER' })
  correctAnswer: number;
}