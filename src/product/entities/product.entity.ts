import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from '../../common/base.entity';
import { Comments } from '../../comments/entities/comments.entity';

@Entity()
export class Product extends BaseEntity {
  @Column({ unique: true })
  name: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @Column()
  productImg: string;

  @OneToMany(() => Comments, (comments: Comments) => comments.product)
  public comments: Comments;
}
