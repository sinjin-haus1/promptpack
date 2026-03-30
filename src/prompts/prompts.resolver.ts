import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { PromptsService } from './prompts.service';
import { Prompt } from './prompt.entity';
import { CreatePromptInput, UpdatePromptInput } from './prompt.input';

@Resolver(() => Prompt)
export class PromptsResolver {
  constructor(private readonly promptsService: PromptsService) {}

  @Query(() => [Prompt])
  async prompts(
    @Args('tool', { nullable: true }) tool?: string,
    @Args('language', { nullable: true }) language?: string,
    @Args('tags', { type: () => [String], nullable: true }) tags?: string[],
  ): Promise<Prompt[]> {
    return this.promptsService.findAll({ tool, language, tags });
  }

  @Query(() => Prompt)
  async prompt(@Args('id', { type: () => ID }) id: string): Promise<Prompt> {
    return this.promptsService.findOne(id);
  }

  @Mutation(() => Prompt)
  async createPrompt(@Args('input') input: CreatePromptInput): Promise<Prompt> {
    return this.promptsService.create(input);
  }

  @Mutation(() => Prompt)
  async updatePrompt(
    @Args('id', { type: () => ID }) id: string,
    @Args('input') input: UpdatePromptInput,
  ): Promise<Prompt> {
    return this.promptsService.update(id, input);
  }

  @Mutation(() => Boolean)
  async deletePrompt(@Args('id', { type: () => ID }) id: string): Promise<boolean> {
    return this.promptsService.remove(id);
  }
}