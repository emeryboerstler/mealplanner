import {
  Box,
  Typography,
  Paper,
  Divider,
  Link,
} from '@mui/material';
import { Info as InfoIcon, Search as SearchIcon } from '@mui/icons-material';

const Settings = () => {
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
          ⚙️ Settings & Information
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Learn how to use the Healthy Meal Planner
        </Typography>
      </Box>

      <Paper 
        sx={{ 
          p: 4,
          mb: 3,
          background: 'linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 100%)',
          borderRadius: 3,
          boxShadow: '0 8px 32px rgba(76, 175, 80, 0.2)',
        }}
      >
        <Box display="flex" alignItems="center" mb={3}>
          <SearchIcon sx={{ fontSize: 40, color: '#4CAF50', mr: 2 }} />
          <Box>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 700 }}>
              How It Works
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Find healthy recipes using Google search
            </Typography>
          </Box>
        </Box>

        <Divider sx={{ my: 3 }} />

        <Typography variant="body1" paragraph>
          This app helps you find healthy recipes for your family by searching Google with your specific preferences:
        </Typography>

        <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
          <li>
            <Typography variant="body2" paragraph>
              <strong>Select your preferences</strong> - Choose meal type, dietary restrictions, cuisine, and more
            </Typography>
          </li>
          <li>
            <Typography variant="body2" paragraph>
              <strong>Search Google</strong> - We'll open a Google search with your preferences in a new tab
            </Typography>
          </li>
          <li>
            <Typography variant="body2" paragraph>
              <strong>Save favorites</strong> - Bookmark searches you want to remember for later
            </Typography>
          </li>
          <li>
            <Typography variant="body2">
              <strong>100% Free</strong> - No API keys or subscriptions required!
            </Typography>
          </li>
        </ul>
      </Paper>

      <Paper 
        sx={{ 
          p: 4,
          mt: 3,
          background: 'linear-gradient(135deg, #FFF3E0 0%, #FFE0B2 100%)',
          borderRadius: 3,
          boxShadow: '0 8px 32px rgba(255, 152, 0, 0.2)',
        }}
      >
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>
          💡 Tips for Best Results
        </Typography>
        <ul style={{ paddingLeft: '20px' }}>
          <li>
            <Typography variant="body2" paragraph>
              Be specific with dietary restrictions for more accurate recipes
            </Typography>
          </li>
          <li>
            <Typography variant="body2" paragraph>
              Try different cuisines to discover new family favorites
            </Typography>
          </li>
          <li>
            <Typography variant="body2" paragraph>
              Save recipes you love for quick access later
            </Typography>
          </li>
          <li>
            <Typography variant="body2">
              Adjust serving sizes based on your family's needs
            </Typography>
          </li>
        </ul>
      </Paper>
    </Box>
  );
};

export default Settings;
