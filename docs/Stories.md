# Stories API Documentation

## Base URL

`https://api.yourapp.com/v1`

## 1. Create Story

- **Endpoint:** `POST /stories`
- **Description:** Create a new story.
- **Request:**
  - **Headers:**
    - `Content-Type: application/json`
  - **Body:**
    ```json
    {
      "user_id": 1,
      "image_url": "https://example.com/path/to/image.jpg",
      "expires_at": "2023-01-02T00:00:00Z"
    }
    ```
- **Response:**
  - `201 Created`
    ```json
    {
      "id": 1,
      "user_id": 1,
      "image_url": "https://example.com/path/to/image.jpg",
      "created_at": "2023-01-01T00:00:00Z",
      "expires_at": "2023-01-02T00:00:00Z",
      "status": "active"
    }
    ```
  - `400 Bad Request`
    ```json
    {
      "error": "Invalid input data"
    }
    ```

## 2. Get Story by ID

- **Endpoint:** `GET /stories/{id}`
- **Description:** Retrieve a story by its ID.
- **Request:**
  - **Headers:**
    - `Content-Type: application/json`
  - **Parameters:**
    - `id: Story ID`
- **Response:**
  - `200 OK`
    ```json
    {
      "id": 1,
      "user_id": 1,
      "image_url": "https://example.com/path/to/image.jpg",
      "created_at": "2023-01-01T00:00:00Z",
      "expires_at": "2023-01-02T00:00:00Z",
      "status": "active"
    }
    ```
  - `404 Not Found`
    ```json
    {
      "error": "Story not found"
    }
    ```

## 3. Delete Story

- **Endpoint:** `DELETE /stories/{id}`
- **Description:** Delete a story by its ID.
- **Request:**
  - **Headers:**
    - `Content-Type: application/json`
  - **Parameters:**
    - `id: Story ID`
- **Response:**
  - `204 No Content`
    ```json
    {
      "message": "Story deleted successfully"
    }
    ```
  - `404 Not Found`
    ```json
    {
      "error": "Story not found"
    }
    ```

## 4. List Stories by User

- **Endpoint:** `GET /users/{user_id}/stories`
- **Description:** Retrieve a list of all stories by a user.
- **Request:**
  - **Headers:**
    - `Content-Type: application/json`
  - **Parameters:**
    - `user_id: User ID`
- **Response:**
  - `200 OK`
    ```json
    [
      {
        "id": 1,
        "user_id": 1,
        "image_url": "https://example.com/path/to/image.jpg",
        "created_at": "2023-01-01T00:00:00Z",
        "expires_at": "2023-01-02T00:00:00Z",
        "status": "active"
      },
      {
        "id": 2,
        "user_id": 1,
        "image_url": "https://example.com/path/to/another-image.jpg",
        "created_at": "2023-01-01T01:00:00Z",
        "expires_at": "2023-01-02T01:00:00Z",
        "status": "expired"
      }
    ]
    ```

## Summary of Endpoints

- `POST /stories`: Create a new story.
- `GET /stories/{id}`: Retrieve a story by ID.
- `DELETE /stories/{id}`: Delete a story by ID.
- `GET /users/{user_id}/stories`: List all stories by a user.