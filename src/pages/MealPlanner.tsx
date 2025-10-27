import { useState } from 'react';
import { useMealPlanner } from '../context/MealPlannerContext';
import {
  Box,
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
  CardActions,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Chip,
  CircularProgress,
  Alert,
  Paper,
  IconButton,
  Divider,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import {
  Restaurant as RestaurantIcon,
  Bookmark as BookmarkIcon,
  BookmarkBorder as BookmarkBorderIcon,
  AccessTime as TimeIcon,
  People as PeopleIcon,
  LocalFireDepartment as CaloriesIcon,
  Close as CloseIcon,
} from '@mui/icons-material';

const MealPlanner = () => {
  const { recipes, loading, error, searchRecipes, saveRecipe, savedRecipes } = useMealPlanner();
  
  const [mealType, setMealType] = useState('dinner');
  const [servings, setServings] = useState(4);
  const [prepTime, setPrepTime] = useState('30 minutes');
  const [cuisine, setCuisine] = useState('');
  const [dietaryRestrictions, setDietaryRestrictions] = useState<string[]>([]);

  const dietaryOptions = [
    'Vegetarian',
    'Vegan',
    'Gluten-Free',
    'Dairy-Free',
    'Nut-Free',
    'Low-Carb',
    'Keto',
    'Paleo',
  ];

  const handleSearchRecipes = () => {
    searchRecipes({
      mealType,
      servings,
      prepTime,
      cuisine,
      dietaryRestrictions,
    });
  };

  const handleToggleDietary = (option: string) => {
    if (dietaryRestrictions.includes(option)) {
      setDietaryRestrictions(dietaryRestrictions.filter(r => r !== option));
    } else {
      setDietaryRestrictions([...dietaryRestrictions, option]);
    }
  };

  const isRecipeSaved = (recipeId: string) => {
    return savedRecipes.some(r => r.id === recipeId);
  };

  return (
    <Box>
      {/* Header */}
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
          🍽️ Healthy Meal Ideas for Your Family
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Get personalized, nutritious recipes powered by AI
        </Typography>
      </Box>


      {/* Recipe Generator Form */}
      <Paper 
        sx={{ 
          p: 4, 
          mb: 4,
          background: 'linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 100%)',
          borderRadius: 3,
          boxShadow: '0 8px 32px rgba(76, 175, 80, 0.2)',
        }}
      >
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
          🎯 What would you like to cook today?
        </Typography>
        
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <FormControl fullWidth>
              <InputLabel>Meal Type</InputLabel>
              <Select
                value={mealType}
                label="Meal Type"
                onChange={(e) => setMealType(e.target.value)}
              >
                <MenuItem value="breakfast">🌅 Breakfast</MenuItem>
                <MenuItem value="lunch">☀️ Lunch</MenuItem>
                <MenuItem value="dinner">🌙 Dinner</MenuItem>
                <MenuItem value="snack">🍎 Snack</MenuItem>
                <MenuItem value="dessert">🍰 Dessert</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <TextField
              fullWidth
              label="Number of Servings"
              type="number"
              value={servings}
              onChange={(e) => setServings(parseInt(e.target.value))}
              inputProps={{ min: 1, max: 12 }}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <FormControl fullWidth>
              <InputLabel>Prep Time</InputLabel>
              <Select
                value={prepTime}
                label="Prep Time"
                onChange={(e) => setPrepTime(e.target.value)}
              >
                <MenuItem value="15 minutes">⚡ 15 minutes</MenuItem>
                <MenuItem value="30 minutes">⏱️ 30 minutes</MenuItem>
                <MenuItem value="45 minutes">🕐 45 minutes</MenuItem>
                <MenuItem value="1 hour">⏰ 1 hour</MenuItem>
                <MenuItem value="1.5 hours">🕰️ 1.5 hours</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <TextField
              fullWidth
              label="Cuisine (optional)"
              value={cuisine}
              onChange={(e) => setCuisine(e.target.value)}
              placeholder="e.g., Italian, Asian"
            />
          </Grid>

          <Grid item xs={12}>
            <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600 }}>
              Dietary Preferences:
            </Typography>
            <Box display="flex" flexWrap="wrap" gap={1}>
              {dietaryOptions.map((option) => (
                <Chip
                  key={option}
                  label={option}
                  onClick={() => handleToggleDietary(option)}
                  color={dietaryRestrictions.includes(option) ? 'primary' : 'default'}
                  variant={dietaryRestrictions.includes(option) ? 'filled' : 'outlined'}
                  sx={{
                    fontWeight: 600,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.05)',
                    },
                  }}
                />
              ))}
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Button
              variant="contained"
              size="large"
              fullWidth
              onClick={handleSearchRecipes}
              disabled={loading}
              startIcon={loading ? <CircularProgress size={20} /> : <RestaurantIcon />}
              sx={{
                background: 'linear-gradient(135deg, #4CAF50 0%, #66BB6A 100%)',
                color: 'white',
                fontWeight: 700,
                fontSize: '1.1rem',
                py: 1.5,
                '&:hover': {
                  background: 'linear-gradient(135deg, #66BB6A 0%, #4CAF50 100%)',
                  transform: 'scale(1.02)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              {loading ? 'Searching...' : '🔍 Find Healthy Recipes on Google'}
            </Button>
          </Grid>
        </Grid>
      </Paper>

      {error && (
        <Alert severity="error" sx={{ mb: 3 }} onClose={() => {}}>
          {error}
        </Alert>
      )}

      {/* Recipe Results */}
      <Grid container spacing={3}>
        {recipes.map((recipe) => (
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
                    onClick={() => saveRecipe(recipe)}
                    color={isRecipeSaved(recipe.id) ? 'primary' : 'default'}
                    sx={{ ml: 2 }}
                  >
                    {isRecipeSaved(recipe.id) ? <BookmarkIcon /> : <BookmarkBorderIcon />}
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

      {recipes.length === 0 && !loading && (
        <Paper 
          sx={{ 
            p: 6, 
            textAlign: 'center',
            background: 'linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 100%)',
            borderRadius: 3,
          }}
        >
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
            🍳 Ready to Cook Something Delicious?
          </Typography>
          <Typography color="text.secondary" paragraph>
            Select your preferences above and click "Find Healthy Recipes on Google" to get started!
          </Typography>
        </Paper>
      )}
    </Box>
  );
};

export default MealPlanner;
