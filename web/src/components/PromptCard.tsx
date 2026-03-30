'use client';

import { Card, CardContent, Typography, Chip, IconButton, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

interface Prompt {
  id: string;
  title: string;
  content: string;
  tool: string;
  language: string;
  tags: string[];
  createdAt: string;
}

interface PromptCardProps {
  prompt: Prompt;
  onDelete: (id: string) => void;
}

export default function PromptCard({ prompt, onDelete }: PromptCardProps) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(prompt.content);
  };

  return (
    <Card sx={{ mb: 2, '&:hover': { boxShadow: 4 } }}>
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="start">
          <Typography variant="h6" component="div" fontWeight={600}>
            {prompt.title}
          </Typography>
          <Box>
            <IconButton size="small" onClick={copyToClipboard}>
              <ContentCopyIcon fontSize="small" />
            </IconButton>
            <IconButton size="small" onClick={() => onDelete(prompt.id)} color="error">
              <DeleteIcon fontSize="small" />
            </IconButton>
          </Box>
        </Box>
        
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1, mb: 2 }}>
          {prompt.content.substring(0, 200)}...
        </Typography>
        
        <Box display="flex" gap={1} flexWrap="wrap">
          <Chip label={prompt.tool} size="small" color="primary" variant="outlined" />
          <Chip label={prompt.language} size="small" variant="outlined" />
          {prompt.tags?.map((tag) => (
            <Chip key={tag} label={tag} size="small" variant="outlined" />
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}
