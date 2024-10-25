# Todo List API

This is a RESTful API for managing a todo list using Express.js and MongoDB.

## Features

- CRUD operations for todos
- API endpoints for creating, reading, updating, and deleting todos
- Error handling and status codesREADME.mdREADME.md
- CORS configuration for frontend communication

## Setup

1. Clone the repository
2. Install dependencies:
   ```
   pnpm install or npm install
   ```
3. Set up your port and MongoDB connection string in a `.env` file:
   ```
   MONGO_URL=mongodb://localhost:27017/todo
   ```

## Usage

To run the server:

```
npm run dev
```

The API will be available at `http://localhost:5500/api/todos`.

## Endpoints

### GET /api/todos

- Retrieves all todos

### POST /api/todos

- Creates a new todo
- Request body: `{ title: string, description: string }`
- Returns the newly created todo

### GET /api/todos/:id

- Retrieves a single todo by ID

### PUT /api/todos/:id

- Updates an existing todo
- Request body: `{ title?: string, description?: string, completed?: boolean }`
- Returns the updated todo

### DELETE /api/todos/:id

- Deletes a todo by ID
- Returns a success message on deletion

## Error Handling

- 404: Todo not found
- 500: Internal server error

## CORS Configuration

CORS is configured to allow requests from `http://localhost:5501` for frontend communication.

## Best Practices

- Uses TypeScript for type safety
- Implements proper error handling and status codes
- Separates routes into a dedicated file for better organization
- Uses environment variables for sensitive information

## Contributing

Contributions are welcome! Please feel free to submit pull requests or issues.

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.
