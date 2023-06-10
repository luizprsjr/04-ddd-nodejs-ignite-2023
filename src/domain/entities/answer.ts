import { Entity } from '../../core/entities/entity'

interface AnswerProps {
  content: string
  autorId: string
  questionId: string
}

export class Answer extends Entity<AnswerProps> {
  get content() {
    return this.props.content
  }
}