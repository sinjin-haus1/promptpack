import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Prompt } from './prompt.entity';
import { CreatePromptInput, UpdatePromptInput } from './prompt.input';

@Injectable()
export class PromptsService {
  constructor(@InjectModel(Prompt.name) private promptModel: Model<Prompt>) {}

  async create(input: CreatePromptInput): Promise<Prompt> {
    const created = new this.promptModel({ ...input, userId: 'demo-user' });
    return created.save();
  }

  async findAll(filter?: { tags?: string[]; tool?: string; language?: string }): Promise<Prompt[]> {
    const query: any = {};
    if (filter?.tool) query.tool = filter.tool;
    if (filter?.language) query.language = filter.language;
    if (filter?.tags?.length) query.tags = { $in: filter.tags };
    return this.promptModel.find(query).sort({ createdAt: -1 }).exec();
  }

  async findOne(id: string): Promise<Prompt> {
    const prompt = await this.promptModel.findById(id).exec();
    if (!prompt) throw new NotFoundException(`Prompt ${id} not found`);
    return prompt;
  }

  async update(id: string, input: UpdatePromptInput): Promise<Prompt> {
    const updated = await this.promptModel.findByIdAndUpdate(id, input, { new: true }).exec();
    if (!updated) throw new NotFoundException(`Prompt ${id} not found`);
    return updated;
  }

  async remove(id: string): Promise<boolean> {
    const result = await this.promptModel.findByIdAndDelete(id).exec();
    return !!result;
  }
}