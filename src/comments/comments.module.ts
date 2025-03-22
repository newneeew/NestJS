import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsController } from './comments.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModule } from '../product/product.module';
import { Comments } from './entities/comments.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Comments]), ProductModule],
  controllers: [CommentsController],
  providers: [CommentsService],
})
export class CommentsModule {}
