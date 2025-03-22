import { Column, Entity, ManyToOne } from 'typeorm';
import { Product } from '../../product/entities/product.entity';
import { BaseEntity } from '../../common/base.entity';

@Entity()
export class Comments extends BaseEntity {
  @Column()
  content: string;

  @ManyToOne(() => Product, (product: Product) => product.comments, {
    eager: false,
  })
  public product: Product;
}
