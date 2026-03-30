import { gql } from '@apollo/client';

export const GET_PROMPTS = gql`
  query GetPrompts($tool: String, $language: String, $tags: [String]) {
    prompts(tool: $tool, language: $language, tags: $tags) {
      id
      title
      content
      tool
      language
      tags
      createdAt
    }
  }
`;

export const CREATE_PROMPT = gql`
  mutation CreatePrompt($input: CreatePromptInput!) {
    createPrompt(input: $input) {
      id
      title
      content
      tool
      language
      tags
      createdAt
    }
  }
`;

export const DELETE_PROMPT = gql`
  mutation DeletePrompt($id: ID!) {
    deletePrompt(id: $id)
  }
`;
