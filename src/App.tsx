import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Navbar from './components/Navbar';
import MealPlanner from './pages/MealPlanner';
import SavedRecipes from './pages/SavedRecipes';
import Settings from './pages/Settings';
import { MealPlannerProvider } from './context/MealPlannerContext';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  
  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: '#4CAF50',
      },
      secondary: {
        main: '#FF9800',
      },
      background: {
        default: darkMode ? '#1a1a1a' : '#F5F9F5',
        paper: darkMode ? '#2d2d2d' : '#ffffff',
      },
    },
    typography: {
      fontFamily: '"Poppins", "Quicksand", "Roboto", "Helvetica", "Arial", sans-serif',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <MealPlannerProvider>
        <CssBaseline />
        <Box sx={{ display: 'flex', minHeight: '100vh', flexDirection: 'column' }}>
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Routes>
              <Route path="/" element={<MealPlanner />} />
              <Route path="/saved" element={<SavedRecipes />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </Box>
        </Box>
      </MealPlannerProvider>
    </ThemeProvider>
  );
};

export default App;
