import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateBookmarkDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsString()
  link: string;

  @IsString()
  @IsOptional()
  description?: string;
}
