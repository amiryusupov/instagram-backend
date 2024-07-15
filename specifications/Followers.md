# Followers API Documentation

## Base URL

`https://api.yourapp.com/v1`

## 1. Get Followers of a User

- **Endpoint:** `GET /users/{userId}/followers`
- **Description:** Retrieve all followers of a specific user.
- **Request:**
  - **Headers:**
    - `Content-Type: application/json`
  - **Parameters:**
    - `userId: User ID`
- **Response:**
  - `200 OK`
    ```json
    {
      "followers": [
        {
          "follower_id": 123,
          "following_id": 456,
          "created_at": "2024-07-15T12:00:00Z"
        },
        {
          "follower_id": 789,
          "following_id": 456,
          "created_at": "2024-07-15T13:00:00Z"
        }
      ]
    }
    ```
  - `404 Not Found`
    ```json
    {
      "error": "User not found"
    }
    ```

## 2. Get Users Following

- **Endpoint:** `GET /users/{userId}/following`
- **Description:** Retrieve all users followed by a specific user.
- **Request:**
  - **Headers:**
    - `Content-Type: application/json`
  - **Parameters:**
    - `userId: User ID`
- **Response:**
  - `200 OK`
    ```json
    {
      "following": [
        {
          "follower_id": 456,
          "following_id": 123,
          "created_at": "2024-07-15T12:00:00Z"
        },
        {
          "follower_id": 456,
          "following_id": 789,
          "created_at": "2024-07-15T13:00:00Z"
        }
      ]
    }
    ```
  - `404 Not Found`
    ```json
    {
      "error": "User not found"
    }
    ```

## 3. Follow User

- **Endpoint:** `POST /users/{userId}/follow`
- **Description:** Follow a specific user.
- **Request:**
  - **Headers:**
    - `Content-Type: application/json`
  - **Parameters:**
    - `userId: User ID` (ID of the user to follow)
  - **Body:**
    ```json
    {
      "follower_id": 123
    }
    ```
    - `follower_id` (integer): ID of the user initiating the follow action.
- **Response:**
  - `201 Created`
    ```json
    {
      "follower_id": 123,
      "following_id": 456,
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
      "error": "User not found"
    }
    ```

## 4. Unfollow User

- **Endpoint:** `DELETE /users/{userId}/unfollow/{followId}`
- **Description:** Unfollow a specific user.
- **Request:**
  - **Headers:**
    - `Content-Type: application/json`
  - **Parameters:**
    - `userId: User ID` (ID of the user to unfollow)
    - `followId: Follow ID` (ID of the follow relationship)
- **Response:**
  - `204 No Content`
  - `404 Not Found`
    ```json
    {
      "error": "Follow relationship not found"
    }
    ```
