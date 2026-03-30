import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { GraphQLJSON } from 'graphql-type-json';

@ObjectType()
@Schema({ timestamps: true })
export class Prompt {
  @Field(() => ID)
  _id: string;

  @Field()
  @Prop({ required: true })
  title: string;

  @Field()
  @Prop({ required: true })
  content: string;

  @Field(() => [String])
  @Prop({ type: [String], default: [] })
  tags: string[];

  @Field()
  @Prop()
  language: string;

  @Field()
  @Prop()
  framework: string;

  @Field()
  @Prop()
  tool: string; // codex, claude-code, stitch, ai-studio, etc.

  @Field()
  @Prop({ default: 'public' })
  visibility: 'public' | 'private' | 'team';

  @Field(() => GraphQLJSON, { nullable: true })
  @Prop({ type: Object })
  metadata: Record<string, any>;

  @Field(() => String, { nullable: true })
  @Prop({ type: String, ref: 'User' })
  userId: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}

export const PromptSchema = SchemaFactory.createForClass(Prompt);