import { Field, InputType, ID } from '@nestjs/graphql';
import { IsString, IsOptional, IsArray } from 'class-validator';

@InputType()
export class CreatePromptInput {
  @Field()
  @IsString()
  title: string;

  @Field()
  @IsString()
  content: string;

  @Field(() => [String], { nullable: true })
  @IsOptional()
  @IsArray()
  tags?: string[];

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  language?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  framework?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  tool?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  visibility?: string;
}

@InputType()
export class UpdatePromptInput {
  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  title?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  content?: string;

  @Field(() => [String], { nullable: true })
  @IsOptional()
  @IsArray()
  tags?: string[];
}