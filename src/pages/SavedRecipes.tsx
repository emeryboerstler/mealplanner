import { useMealPlanner } from '../context/MealPlannerContext';
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  IconButton,
  Chip,
  Paper,
  List,
  ListItem,
  ListItemText,
  Divider,
  Button,
} from '@mui/material';
import {
  Delete as DeleteIcon,
  AccessTime as TimeIcon,
  People as PeopleIcon,
  LocalFireDepartment as CaloriesIcon,
  Bookmark as BookmarkIcon,
} from '@mui/icons-material';

const SavedRecipes = () => {
  const { savedRecipes, removeRecipe } = useMealPlanner();

  if (savedRecipes.length === 0) {
    return (
      <Paper 
        sx={{ 
          p: 6, 
          textAlign: 'center',
          background: 'linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 100%)',
          borderRadius: 3,
        }}
      >
        <BookmarkIcon sx={{ fontSize: 80, color: '#4CAF50', mb: 2 }} />
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
          No Saved Recipes Yet
        </Typography>
        <Typography color="text.secondary" paragraph>
          Start generating recipes and save your favorites to see them here!
        </Typography>
      </Paper>
    );
  }

  return (
    <Box>
      <Box mb={4} textAlign="center">
        <Typography 
          variant="h3" 
          component="h1" 
          gutterBottom
          sx={{
            background: 'linear-gradient(135deg, #4CAF50 0%, #81C784 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 700,
          }}
        >
          📚 Your Saved Recipes
        </Typography>
        <Typography variant="h6" color="text.secondary">
          {savedRecipes.length} delicious recipe{savedRecipes.length !== 1 ? 's' : ''} saved
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {savedRecipes.map((recipe) => (
          <Grid item xs={12} key={recipe.id}>
            <Card 
              sx={{ 
                borderRadius: 3,
                boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                background: 'linear-gradient(135deg, #FFFFFF 0%, #F1F8E9 100%)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 12px 48px rgba(76, 175, 80, 0.2)',
                },
              }}
            >
              <CardContent>
                <Box display="flex" justifyContent="space-between" alignItems="start" mb={2}>
                  <Box flex={1}>
                    <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 700, color: '#2E7D32' }}>
                      {recipe.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" paragraph>
                      {recipe.description}
                    </Typography>
                  </Box>
                  <IconButton
                    onClick={() => removeRecipe(recipe.id)}
                    color="error"
                    sx={{ ml: 2 }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Box>

                <Box display="flex" gap={2} mb={3} flexWrap="wrap">
                  {recipe.tags.map((tag) => (
                    <Chip
                      key={tag}
                      label={tag}
                      size="medium"
                      sx={{ 
                        background: 'linear-gradient(135deg, #4CAF50 0%, #81C784 100%)',
                        color: 'white',
                        fontWeight: 600,
                      }}
                    />
                  ))}
                </Box>

                <Divider sx={{ my: 2 }} />

                <Button
                  variant="contained"
                  size="large"
                  fullWidth
                  href={recipe.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    background: 'linear-gradient(135deg, #2196F3 0%, #64B5F6 100%)',
                    color: 'white',
                    fontWeight: 700,
                    fontSize: '1rem',
                    py: 1.5,
                    '&:hover': {
                      background: 'linear-gradient(135deg, #64B5F6 0%, #2196F3 100%)',
                      transform: 'scale(1.02)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  🔗 View Recipes on Google
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SavedRecipes;
