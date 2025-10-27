# 🥗 Healthy Meal Planner

A modern, AI-powered meal planning application designed for healthy families. Get personalized, nutritious recipe ideas using ChatGPT integration.

## Features

- 🤖 **AI-Powered Recipes** - Generate custom recipes using OpenAI's ChatGPT
- 🥗 **Healthy Focus** - All recipes are designed with nutrition in mind
- 👨‍👩‍👧‍👦 **Family-Friendly** - Perfect for families looking for healthy meal ideas
- 🎯 **Customizable** - Filter by meal type, dietary restrictions, prep time, and more
- 💾 **Save Favorites** - Bookmark your favorite recipes for quick access
- 🌈 **Modern UI** - Beautiful, colorful interface with smooth animations
- 📱 **Responsive** - Works perfectly on all devices

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- OpenAI API key ([Get one here](https://platform.openai.com/api-keys))

### Installation

1. Navigate to the project directory:
   ```bash
   cd meal-planner
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3001](http://localhost:3001) in your browser

5. Go to Settings and add your OpenAI API key

### Usage

1. **Set Your Preferences**
   - Choose meal type (breakfast, lunch, dinner, snack, dessert)
   - Select number of servings
   - Set preparation time
   - Add dietary restrictions (vegetarian, vegan, gluten-free, etc.)
   - Optionally specify cuisine type

2. **Generate Recipe**
   - Click "Generate Healthy Recipe"
   - AI will create a custom recipe based on your preferences

3. **Save Favorites**
   - Click the bookmark icon to save recipes you love
   - Access saved recipes from the "Saved Recipes" page

## Technologies Used

- [React](https://reactjs.org/) - JavaScript library for building user interfaces
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
- [Material-UI](https://mui.com/) - React UI component library
- [OpenAI API](https://openai.com/api/) - ChatGPT integration for recipe generation
- [React Router](https://reactrouter.com/) - Client-side routing

## API Key Security

Your OpenAI API key is stored locally in your browser's localStorage and is never sent to any server except OpenAI's API. The application runs entirely in your browser.

## Cost

Using the OpenAI API incurs a small cost (typically a few cents per recipe). You can monitor your usage at [platform.openai.com](https://platform.openai.com).

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

---

Built with ❤️ for healthy families everywhere! 🥗👨‍👩‍👧‍👦
