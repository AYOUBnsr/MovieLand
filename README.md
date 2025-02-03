# MovieLand - React Movie Search Application

This repository contains the source code for **MovieLand**, a React-based movie search application that fetches movie data from the OMDb API.

![Image](https://github.com/user-attachments/assets/12083437-42f2-4fc3-a964-90ea58a581c7)

## Features
- **Real-Time Movie Search**: Users can search for movies by typing a title, with results fetched dynamically.
- **Movie Cards**: Each movie result is displayed as a card with its title, year, type, and poster.
- **Initial Display**: On initial load, the app displays movies related to "Batman."
- **Error Handling**: Gracefully handles errors during data fetching.

## Technologies Used
- **React.js**: Frontend framework for building the user interface.
- **CSS**: Styling for the application.
- **OMDb API**: External API for fetching movie data.

  [![My Skills](https://skillicons.dev/icons?i=react,css)](https://skillicons.dev)

## Components
1. **App.js**:
   - Main component that handles state, API calls, and rendering the UI.
   - Includes a search bar and dynamically updates movie results.

2. **MovieCard.jsx**:
   - Reusable component for displaying individual movie details.
   - Displays the movie poster, title, year, and type.

## How to Run the Project
1. Clone or download the repository.
2. Navigate to the project directory.
3. Install the dependencies by running:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
5. Open your browser and navigate to `http://localhost:3000` to use the application.

## API Configuration
- The application uses the OMDb API to fetch movie data. Ensure that the API key (`a15a79d8`) is correctly set in `App.js`:
  ```javascript
  const API_URL = 'http://www.omdbapi.com?apikey=a15a79d8';
  ```

## Future Enhancements
- Adding pagination for large search results.
- Implementing filters (e.g., by year, genre, or type).
- Enhancing the UI with modern design elements.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

