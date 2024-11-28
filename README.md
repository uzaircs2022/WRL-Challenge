# React Firebase Dashboard with Graph

This is a React application that fetches data from a Firebase database and displays it in the form of a graph on the frontend. The data is fetched on a weekly basis, allowing users to select previous weeks and visualize the data dynamically.

### Features

- Fetches data from Firebase Firestore.
- Displays data as a graph using the **Recharts** library.
- Allows users to select different weeks using a selector.
- Fetches data for a selected week using custom methods to interact with Firebase.
- Helper methods to calculate the week for fetching relevant data.

### Tech Stack

- **React**: Frontend framework to build the user interface.
- **Firebase**: Used for the backend to store and fetch data.
- **Recharts**: The graph library to visualize the data.
- **Custom Hooks**: For fetching and managing Firebase data.
- **Helper Methods**: Utilities for calculating the weekly data.

### Installation

Follow these steps to get the application up and running locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
2. **Install dependencies**: Run the following command to install the necessary dependencies:
      ```bash
   npm install

### Code Structure

├── src
│   ├── components
│   │   ├── Dashboard.js      # Main dashboard component
│   │   └── Graph.js          # Graph component to visualize the data
│   ├── hooks
│   │   └── useFirebase.js    # Custom hook to fetch data from Firebase
│   ├── utils
│   │   └── weekUtils.js      # Helper functions for week calculations
│   ├── firebase-config.js    # Firebase configuration file
│   └── App.js                # Main app component
└── .env                      # Firebase credentials (add to .gitignore)
