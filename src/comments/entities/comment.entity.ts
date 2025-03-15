import { Column, Entity } from 'typeorm';

@Entity()
export class Comment {
  @Column()
  content: string;
}
