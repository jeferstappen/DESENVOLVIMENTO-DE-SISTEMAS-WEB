
export class Question {
  QUESTION_ID: number;
  SUBMODULE_ID: number; 
  QUESTION_TEXT: string;
  OPTIONS: string; 
  CORRECT_ANSWER: number;

  constructor(id: number, submoduleId: number, text: string, options: string, correctAnswer: number) {
    this.QUESTION_ID = id;
    this.SUBMODULE_ID = submoduleId;
    this.QUESTION_TEXT = text;
    this.OPTIONS = options;
    this.CORRECT_ANSWER = correctAnswer;
  }
}