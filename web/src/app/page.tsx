'use client';

import { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { 
  Container, Grid, Typography, Button, TextField, 
  Select, MenuItem, FormControl, InputLabel, Box, Chip,
  AppBar, Toolbar
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import PromptCard from './PromptCard';
import { GET_PROMPTS, CREATE_PROMPT, DELETE_PROMPT } from '@/lib/queries';

const TOOLS = ['Codex', 'Claude Code', 'Stitch', 'AI Studio', 'Cursor', 'Windsurf'];
const LANGUAGES = ['JavaScript', 'TypeScript', 'Python', 'Go', 'Rust', 'Java'];

export default function Home() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tool, setTool] = useState('');
  const [language, setLanguage] = useState('');
  const [tags, setTags] = useState('');
  const [showForm, setShowForm] = useState(false);

  const { data, loading, error, refetch } = useQuery(GET_PROMPTS);
  const [createPrompt] = useMutation(CREATE_PROMPT);
  const [deletePrompt] = useMutation(DELETE_PROMPT);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createPrompt({
      variables: {
        input: {
          title,
          content,
          tool,
          language,
          tags: tags.split(',').map(t => t.trim()).filter(Boolean),
        },
      },
    });
    setTitle('');
    setContent('');
    setTool('');
    setLanguage('');
    setTags('');
    setShowForm(false);
    refetch();
  };

  const handleDelete = async (id: string) => {
    await deletePrompt({ variables: { id } });
    refetch();
  };

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <Typography variant="h5" fontWeight={700} color="primary">
            PromptPack
          </Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
          <Typography variant="h4" fontWeight={700}>
            My Vibe Coding Prompts
          </Typography>
          <Button 
            variant="contained" 
            startIcon={<AddIcon />}
            onClick={() => setShowForm(!showForm)}
          >
            Add Prompt
          </Button>
        </Box>

        {showForm && (
          <Box component="form" onSubmit={handleSubmit} sx={{ mb: 4, p: 3, bgcolor: 'white', borderRadius: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Prompt Content"
                  multiline
                  rows={4}
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  required
                />
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth>
                  <InputLabel>Tool</InputLabel>
                  <Select value={tool} onChange={(e) => setTool(e.target.value)} label="Tool">
                    {TOOLS.map(t => <MenuItem key={t} value={t}>{t}</MenuItem>)}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth>
                  <InputLabel>Language</InputLabel>
                  <Select value={language} onChange={(e) => setLanguage(e.target.value)} label="Language">
                    {LANGUAGES.map(l => <MenuItem key={l} value={l}>{l}</MenuItem>)}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Tags (comma separated)"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                  placeholder="react, hooks, frontend"
                />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" color="primary">
                  Save Prompt
                </Button>
              </Grid>
            </Grid>
          </Box>
        )}

        {loading && <Typography>Loading prompts...</Typography>}
        {error && <Typography color="error">Error loading prompts</Typography>}
        
        {data?.prompts?.length === 0 && (
          <Typography color="text.secondary" textAlign="center" py={4}>
            No prompts yet. Add your first vibe coding prompt!
          </Typography>
        )}

        {data?.prompts?.map((prompt: any) => (
          <PromptCard key={prompt.id} prompt={prompt} onDelete={handleDelete} />
        ))}
      </Container>
    </Box>
  );
}
