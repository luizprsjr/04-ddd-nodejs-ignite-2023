import { randomUUID } from 'crypto'

interface AnswerProps {
  content: string
  autorId: string
  questionId: string
}

export class Answer {
  public id: string
  public content: string
  public autorId: string
  public questionId: string

  constructor(props: AnswerProps, id?: string) {
    this.content = props.content
    this.autorId = props.autorId
    this.questionId  = props.questionId 
    this.id = id ?? randomUUID()
  }
}