# Posts API Documentation

## Base URL

`https://api.yourapp.com/v1`

## 1. Create Post

- **Endpoint:** `POST /posts`
- **Description:** Create a new post.
- **Request:**
  - **Headers:**
    - `Content-Type: application/json`
  - **Body:**
    ```json
    {
      "user_id": 1,
      "caption": "This is a caption for the post",
      "image_url": "https://example.com/path/to/image.jpg"
    }
    ```
- **Response:**
  - `201 Created`
    ```json
    {
      "id": 1,
      "user_id": 1,
      "caption": "This is a caption for the post",
      "image_url": "https://example.com/path/to/image.jpg",
      "created_at": "2023-01-01T00:00:00Z",
      "updated_at": "2023-01-01T00:00:00Z"
    }
    ```
  - `400 Bad Request`
    ```json
    {
      "error": "Invalid input data"
    }
    ```

## 2. Get Post by ID

- **Endpoint:** `GET /posts/{id}`
- **Description:** Retrieve a post by its ID.
- **Request:**
  - **Headers:**
    - `Content-Type: application/json`
  - **Parameters:**
    - `id: Post ID`
- **Response:**
  - `200 OK`
    ```json
    {
      "id": 1,
      "user_id": 1,
      "caption": "This is a caption for the post",
      "image_url": "https://example.com/path/to/image.jpg",
      "created_at": "2023-01-01T00:00:00Z",
      "updated_at": "2023-01-01T00:00:00Z"
    }
    ```
  - `404 Not Found`
    ```json
    {
      "error": "Post not found"
    }
    ```

## 3. Update Post

- **Endpoint:** `PUT /posts/{id}`
- **Description:** Update an existing post.
- **Request:**
  - **Headers:**
    - `Content-Type: application/json`
  - **Parameters:**
    - `id: Post ID`
  - **Body:**
    ```json
    {
      "caption": "This is an updated caption for the post",
      "image_url": "https://example.com/path/to/updated-image.jpg"
    }
    ```
- **Response:**
  - `200 OK`
    ```json
    {
      "id": 1,
      "user_id": 1,
      "caption": "This is an updated caption for the post",
      "image_url": "https://example.com/path/to/updated-image.jpg",
      "created_at": "2023-01-01T00:00:00Z",
      "updated_at": "2023-01-02T00:00:00Z"
    }
    ```
  - `400 Bad Request`
    ```json
    {
      "error": "Invalid input data"
    }
    ```
  - `404 Not Found`
    ```json
    {
      "error": "Post not found"
    }
    ```

## 4. Delete Post

- **Endpoint:** `DELETE /posts/{id}`
- **Description:** Delete a post by its ID.
- **Request:**
  - **Headers:**
    - `Content-Type: application/json`
  - **Parameters:**
    - `id: Post ID`
- **Response:**
  - `204 No Content`
    ```json
    {
      "message": "Post deleted successfully"
    }
    ```
  - `404 Not Found`
    ```json
    {
      "error": "Post not found"
    }
    ```

## 5. List Posts

- **Endpoint:** `GET /posts`
- **Description:** Retrieve a list of all posts.
- **Request:**
  - **Headers:**
    - `Content-Type: application/json`
- **Response:**
  - `200 OK`
    ```json
    [
      {
        "id": 1,
        "user_id": 1,
        "caption": "This is a caption for the post",
        "image_url": "https://example.com/path/to/image.jpg",
        "created_at": "2023-01-01T00:00:00Z",
        "updated_at": "2023-01-01T00:00:00Z"
      },
      {
        "id": 2,
        "user_id": 2,
        "caption": "This is another caption for another post",
        "image_url": "https://example.com/path/to/another-image.jpg",
        "created_at": "2023-01-01T00:00:00Z",
        "updated_at": "2023-01-01T00:00:00Z"
      }
    ]
    ```

## Summary of Endpoints

- `POST /posts`: Create a new post.
- `GET /posts/{id}`: Retrieve a post by ID.
- `PUT /posts/{id}`: Update an existing post.
- `DELETE /posts/{id}`: Delete a post by ID.
- `GET /posts`: List all posts.
