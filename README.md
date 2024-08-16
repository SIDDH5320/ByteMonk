

# ByteMonk

ByteMonk is a React application that displays data fetched from an API in both table and pie chart formats. It uses Redux for state management and Redux-Saga for handling side effects. The app includes a filtering feature to refine the displayed data based on user and category.

## Features

- **Data Fetching**: Uses Redux-Saga to fetch data from a REST API.
- **Data Visualization**: Displays data in table and pie chart formats.
- **Filtering**: Allows filtering by user and category.
- **View Toggle**: Switch between table and pie chart views using a toggle switch.

## Technologies

- React
- Redux
- Redux-Saga
- Ant Design (for UI components)
- Recharts (for pie charts)
- Axios (for HTTP requests)

## Getting Started

### Prerequisites

- Node.js (v14.x or later)
- npm or Yarn

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/SIDDH5320/ByteMonk.git
   ```

2. **Navigate to the Project Directory**

   ```bash
   cd ByteMonk
   ```

3. **Install Dependencies**

   ```bash
   npm install
   ```

   or if you prefer Yarn:

   ```bash
   yarn install
   ```

### Configuration

1. **Set Up Environment Variables**

   Create a `.env` file in the root directory and add the following:

   ```env
   REACT_APP_API_BASE_URL=http://52.168.1.54:8080
   ```

   Adjust the base URL according to your environment.

### Running the Application

1. **Start the Development Server**

   ```bash
   npm start
   ```

   or if you prefer Yarn:

   ```bash
   yarn start
   ```

   The app will be available at `http://localhost:3000`.

### Building for Production

1. **Build the Application**

   ```bash
   npm run build
   ```

   or if you prefer Yarn:

   ```bash
   yarn build
   ```

   The production build will be in the `build` directory.

### Testing

1. **Run Tests**

   ```bash
   npm test
   ```

   or if you prefer Yarn:

   ```bash
   yarn test
   ```

### Deployment

To deploy your application, you can use various platforms like Vercel, Netlify, or GitHub Pages. Refer to their documentation for detailed instructions.

### Contributing

1. **Fork the Repository**
2. **Create a New Branch**
3. **Make Your Changes**
4. **Submit a Pull Request**

Please ensure your changes align with the project's coding standards and pass all tests.

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

