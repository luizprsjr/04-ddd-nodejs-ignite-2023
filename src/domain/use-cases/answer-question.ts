import { Answer } from '../entities/answer'
import { AnswersRepository } from '../repositories/answers-repositories'

interface AnswerQuestionUseCaseRequest {
  instructorId: string
  questionId: string
  content: string
}

export class AnswerQuestion {
  constructor(private answersRepository: AnswersRepository) {}


  async execute({ instructorId, questionId, content }: AnswerQuestionUseCaseRequest) {
    const answer = new Answer({
      content,
      autorId: instructorId,
      questionId
    })

    await this.answersRepository.create(answer)

    return answer
  }
}
