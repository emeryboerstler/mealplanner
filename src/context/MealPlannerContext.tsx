import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface Recipe {
  id: string;
  title: string;
  description: string;
  link: string;
  source: string;
  image?: string;
  category: string;
  tags: string[];
}

interface MealPlannerContextType {
  recipes: Recipe[];
  savedRecipes: Recipe[];
  loading: boolean;
  error: string | null;
  searchRecipes: (preferences: RecipePreferences) => void;
  saveRecipe: (recipe: Recipe) => void;
  removeRecipe: (recipeId: string) => void;
}

interface RecipePreferences {
  mealType: string;
  dietaryRestrictions: string[];
  servings: number;
  prepTime: string;
  cuisine: string;
}

const MealPlannerContext = createContext<MealPlannerContextType | undefined>(undefined);

export const MealPlannerProvider = ({ children }: { children: ReactNode }) => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [savedRecipes, setSavedRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Load saved recipes from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('savedRecipes');
    if (saved) {
      setSavedRecipes(JSON.parse(saved));
    }
  }, []);

  // Save recipes to localStorage
  useEffect(() => {
    localStorage.setItem('savedRecipes', JSON.stringify(savedRecipes));
  }, [savedRecipes]);

  const searchRecipes = (preferences: RecipePreferences) => {
    setLoading(true);
    setError(null);

    // Build search query
    const searchTerms = [
      'healthy',
      preferences.mealType,
      preferences.cuisine,
      ...preferences.dietaryRestrictions,
      'recipe',
    ].filter(Boolean).join(' ');

    // Create Google search URL
    const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchTerms)}`;

    // Create a recipe card with search info (don't auto-open)
    const searchRecipe: Recipe = {
      id: Date.now().toString(),
      title: `${preferences.mealType.charAt(0).toUpperCase() + preferences.mealType.slice(1)} Recipe Search`,
      description: `Search for healthy ${preferences.mealType} recipes${preferences.cuisine ? ` with ${preferences.cuisine} cuisine` : ''}${preferences.dietaryRestrictions.length > 0 ? ` (${preferences.dietaryRestrictions.join(', ')})` : ''}. Click the button below to view results on Google.`,
      link: googleSearchUrl,
      source: 'Google Search',
      category: preferences.mealType,
      tags: ['healthy', ...preferences.dietaryRestrictions, preferences.cuisine].filter(Boolean),
    };

    setRecipes([searchRecipe, ...recipes]);
    setLoading(false);
  };

  const saveRecipe = (recipe: Recipe) => {
    if (!savedRecipes.find(r => r.id === recipe.id)) {
      setSavedRecipes([...savedRecipes, recipe]);
    }
  };

  const removeRecipe = (recipeId: string) => {
    setSavedRecipes(savedRecipes.filter(r => r.id !== recipeId));
  };

  return (
    <MealPlannerContext.Provider
      value={{
        recipes,
        savedRecipes,
        loading,
        error,
        searchRecipes,
        saveRecipe,
        removeRecipe,
      }}
    >
      {children}
    </MealPlannerContext.Provider>
  );
};

export const useMealPlanner = (): MealPlannerContextType => {
  const context = useContext(MealPlannerContext);
  if (context === undefined) {
    throw new Error('useMealPlanner must be used within a MealPlannerProvider');
  }
  return context;
};
