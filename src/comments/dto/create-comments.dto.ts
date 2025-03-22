import { ApiProperty } from '@nestjs/swagger';

export class CreateCommentsDto {
  @ApiProperty({ example: 'gooood' })
  content: string;
}
