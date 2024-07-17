# Likes API Documentation

## Base URL

`https://api.yourapp.com/v1`

## 1. Get Likes for a Post

- **Endpoint:** `GET /posts/{postId}/likes`
- **Description:** Retrieve all likes for a specific post.
- **Request:**
  - **Headers:**
    - `Content-Type: application/json`
  - **Parameters:**
    - `postId: Post ID`
- **Response:**
  - `200 OK`
    ```json
    {
      "likes": [
        {
          "id": 1,
          "user_id": 123,
          "post_id": 456,
          "created_at": "2024-07-15T12:00:00Z"
        },
        {
          "id": 2,
          "user_id": 789,
          "post_id": 456,
          "created_at": "2024-07-15T13:00:00Z"
        }
      ]
    }
    ```
  - `404 Not Found`
    ```json
    {
      "error": "Post not found"
    }
    ```

## 2. Like a Post

- **Endpoint:** `POST /posts/{postId}/likes`
- **Description:** Like a specific post.
- **Request:**
  - **Headers:**
    - `Content-Type: application/json`
  - **Parameters:**
    - `postId: Post ID`
  - **Body:**
    ```json
    {
      "user_id": 123
    }
    ```
    - `user_id` (integer): ID of the user liking the post.
- **Response:**
  - `201 Created`
    ```json
    {
      "id": 1,
      "user_id": 123,
      "post_id": 456,
      "created_at": "2024-07-15T14:00:00Z"
    }
    ```
  - `400 Bad Request`
    ```json
    {
      "error": "Invalid user ID"
    }
    ```
  - `404 Not Found`
    ```json
    {
      "error": "Post not found"
    }
    ```

## 3. Unlike a Post

- **Endpoint:** `DELETE /posts/{postId}/likes/{likeId}`
- **Description:** Unlike a post (remove like).
- **Request:**
  - **Headers:**
    - `Content-Type: application/json`
  - **Parameters:**
    - `postId: Post ID`
    - `likeId: Like ID`
- **Response:**
  - `204 No Content`
  - `404 Not Found`
    ```json
    {
      "error": "Like not found"
    }
    ```
