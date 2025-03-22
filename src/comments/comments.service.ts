import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comments } from './entities/comments.entity';
import { CreateCommentsDto } from './dto/create-comments.dto';
import { ProductService } from '../product/product.service';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comments)
    private readonly commentsRepository: Repository<Comments>,
    private readonly productService: ProductService,
  ) {}

  async createComments(
    productId: string,
    createCommentsDto: CreateCommentsDto,
  ): Promise<any> {
    const { content } = createCommentsDto;

    // ✅ productId로 상품 찾기
    const product = await this.productService.getProductById(productId);

    console.log(product);

    if (!product) {
      throw new NotFoundException('Product not found');
    }

    const newComments = this.commentsRepository.create({ content, product });
    const savedComments = await this.commentsRepository.save(newComments);
    // ✅ 반환하기 전에 `product` 필드를 ID만 남기도록 변경
    (savedComments as any).product = { id: savedComments.product.id };

    return savedComments;
  }

  // async getComments(id: string): Promise<any> {}
  //
  // async updateComment(
  //   id: string,
  //   updateCommentDto: UpdateCommentDto,
  // ): Promise<any> {}
  //
  // async deleteComment(id: string): Promise<any> {
  //   return await this.commentRepository.delete(id);
  // }
}
