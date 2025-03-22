import { Body, Controller, Param, Post } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentsDto } from './dto/create-comments.dto';
import { UpdateCommentsDto } from './dto/update-comments.dto';
import { Comments } from './entities/comments.entity';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Post('/:productId')
  async create(
    @Param('productId') productId: string,
    @Body() createCommentsDto: CreateCommentsDto,
  ): Promise<Comments> {
    return await this.commentsService.createComments(
      productId,
      createCommentsDto,
    );
  }
}
