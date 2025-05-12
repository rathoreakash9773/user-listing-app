# User Listing App

This is a React.js application that displays a list of users with features such as user deletion and pagination. The application is designed to be modular and maintainable, utilizing React components effectively.

## Features

- Display a list of users in a card format.
- Delete users from the list.
- Pagination controls to navigate through user lists.

## Project Structure

```
user-listing-app
├── public
│   ├── index.html        # Main HTML file
│   └── favicon.ico       # Favicon for the application
├── src
│   ├── components        # Contains React components
│   │   ├── UserCard.jsx  # Component for displaying individual user information
│   │   ├── UserList.jsx  # Component for displaying the list of users
│   │   └── Pagination.jsx # Component for pagination controls
│   ├── services          # Contains API service functions
│   │   └── api.js        # API calls for fetching and deleting users
│   ├── App.jsx           # Main application component
│   ├── index.js          # Entry point for the React application
│   └── styles            # Contains CSS styles
│       └── App.css       # Styles for the application
├── package.json          # npm configuration file
├── .gitignore            # Git ignore file
└── README.md             # Project documentation
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd user-listing-app
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the application:
   ```
   npm start
   ```

5. Open your browser and go to `http://localhost:3000` to view the application.

## Usage

- The application will display a list of users fetched from the backend.
- Each user is displayed in a card format showing their name and email.
- Users can be deleted by clicking the delete button on their respective cards.
- Use the pagination controls to navigate through multiple pages of users.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.