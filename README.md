# E-commerce Product Search Page

## Setup Instructions

### Prerequisites

- Node.js installed on your machine.
- Git installed on your machine.

### Steps

1. **Clone the repository**
    ```sh
    git clone https://github.com/grabbi96/ecommerce-product-search-page
    ```
2. **Navigate to the project directory**
    ```sh
    cd ecommerce-product-search-page
    ```
3. **Install dependencies**
    ```sh
    npm install
    ```
4. **Run the development server**
    ```sh
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Build Process

1. **Build for production**
    ```sh
    npm run build
    npm start
    ```
    The application will be available at [http://localhost:3000](http://localhost:3000).

## Assumptions Made During Development

- The application assumes the availability of the Fake Store API at [https://fakestoreapi.com/products](https://fakestoreapi.com/products) for fetching product data.
- The application is designed to be responsive, assuming standard device screen sizes for testing.
- State management is handled using Redux, and it is assumed that Redux is the preferred state management tool for this project.
- MUI (Material-UI) is used for styling components, assuming consistency in design as per MUI guidelines.
- Axios is used for making API calls, assuming familiarity with promise-based HTTP requests.
- The project is set up with basic SEO and performance optimizations in mind, following standard practices.
- Deployment instructions are provided for Vercel or Netlify, assuming these are the recommended platforms for hosting the application.
