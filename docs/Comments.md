# Comments API Documentation

## Base URL

`https://api.yourapp.com/v1`

## 1. Get Comments for a Post

- **Endpoint:** `GET /posts/{postId}/comments`
- **Description:** Retrieve all comments for a specific post.
- **Request:**
  - **Headers:**
    - `Content-Type: application/json`
  - **Parameters:**
    - `postId: Post ID`
- **Response:**
  - `200 OK`
    ```json
    {
      "comments": [
        {
          "id": 1,
          "user_id": 123,
          "post_id": 456,
          "content": "This is a comment on the post",
          "created_at": "2024-07-15T12:00:00Z"
        },
        {
          "id": 2,
          "user_id": 789,
          "post_id": 456,
          "content": "Another comment on the post",
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

## 2. Create Comment

- **Endpoint:** `POST /posts/{postId}/comments`
- **Description:** Add a new comment to a specific post.
- **Request:**
  - **Headers:**
    - `Content-Type: application/json`
  - **Parameters:**
    - `postId: Post ID`
  - **Body:**
    ```json
    {
      "user_id": 123,
      "content": "This is a new comment on the post"
    }
    ```
    - `user_id` (integer): ID of the user creating the comment.
    - `content` (string): Content of the comment.
- **Response:**
  - `201 Created`
    ```json
    {
      "id": 3,
      "user_id": 123,
      "post_id": 456,
      "content": "This is a new comment on the post",
      "created_at": "2024-07-15T14:00:00Z"
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

## 3. Delete Comment

- **Endpoint:** `DELETE /posts/{postId}/comments/{commentId}`
- **Description:** Delete a comment from a post.
- **Request:**
  - **Headers:**
    - `Content-Type: application/json`
  - **Parameters:**
    - `postId: Post ID`
    - `commentId: Comment ID`
- **Response:**
  - `204 No Content`
  - `404 Not Found`
    ```json
    {
      "error": "Comment not found"
    }
    ```
