import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Prompt, PromptSchema } from './prompt.entity';
import { PromptsService } from './prompts.service';
import { PromptsResolver } from './prompts.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Prompt.name, schema: PromptSchema }]),
  ],
  providers: [PromptsService, PromptsResolver],
  exports: [PromptsService],
})
export class PromptsModule {}