# Users API Endpoints

## Base URL

> Base url: `https://api.yourapp.com/v1`

## 1. Create User

- **Endpoint:** `POST /users`
- **Description:** Create a new user.
- **Request:**
  - **Headers:**
    - `Content-Type: application/json`
  - **Body:**
    ```json
    {
      "username": "johndoe",
      "email": "johndoe@example.com",
      "password": "securepassword123",
      "profile_picture": "https://example.com/path/to/profile-picture.jpg",
      "bio": "This is a bio"
    }
    ```
- **Response:**
  - `201 Created`
    ```json
    {
      "id": 1,
      "username": "johndoe",
      "email": "johndoe@example.com",
      "profile_picture": "https://example.com/path/to/profile-picture.jpg",
      "bio": "This is a bio",
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

## 2. Get User by ID

- **Endpoint:** `GET /users/{id}`
- **Description:** Retrieve a user by their ID.
- **Request:**
  - **Headers:**
    - `Content-Type: application/json`
  - **Parameters:**
    - `id: User ID`
- **Response:**
  - `200 OK`
    ```json
    {
      "id": 1,
      "username": "johndoe",
      "email": "johndoe@example.com",
      "profile_picture": "https://example.com/path/to/profile-picture.jpg",
      "bio": "This is a bio",
      "created_at": "2023-01-01T00:00:00Z",
      "updated_at": "2023-01-01T00:00:00Z"
    }
    ```
  - `404 Not Found`
    ```json
    {
      "error": "User not found"
    }
    ```

## 3. Update User

- **Endpoint:** `PUT /users/{id}`
- **Description:** Update an existing user.
- **Request:**
  - **Headers:**
    - `Content-Type: application/json`
  - **Parameters:**
    - `id: User ID`
  - **Body:**
    ```json
    {
      "username": "john_doe_updated",
      "email": "johndoe_updated@example.com",
      "profile_picture": "https://example.com/path/to/new-profile-picture.jpg",
      "bio": "This is an updated bio"
    }
    ```
- **Response:**
  - `200 OK`
    ```json
    {
      "id": 1,
      "username": "john_doe_updated",
      "email": "johndoe_updated@example.com",
      "profile_picture": "https://example.com/path/to/new-profile-picture.jpg",
      "bio": "This is an updated bio",
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
      "error": "User not found"
    }
    ```

## 4. Delete User

- **Endpoint:** `DELETE /users/{id}`
- **Description:** Delete a user by their ID.
- **Request:**
  - **Headers:**
    - `Content-Type: application/json`
  - **Parameters:**
    - `id: User ID`
- **Response:**
  - `204 No Content`
    ```json
    {
      "message": "User deleted successfully"
    }
    ```
  - `404 Not Found`
    ```json
    {
      "error": "User not found"
    }
    ```

## 5. List Users

- **Endpoint:** `GET /users`
- **Description:** Retrieve a list of all users.
- **Request:**
  - **Headers:**
    - `Content-Type: application/json`
- **Response:**
  - `200 OK`
    ```json
    [
      {
        "id": 1,
        "username": "johndoe",
        "email": "johndoe@example.com",
        "profile_picture": "https://example.com/path/to/profile-picture.jpg",
        "bio": "This is a bio",
        "created_at": "2023-01-01T00:00:00Z",
        "updated_at": "2023-01-01T00:00:00Z"
      },
      {
        "id": 2,
        "username": "janedoe",
        "email": "janedoe@example.com",
        "profile_picture": "https://example.com/path/to/profile-picture.jpg",
        "bio": "This is another bio",
        "created_at": "2023-01-01T00:00:00Z",
        "updated_at": "2023-01-01T00:00:00Z"
      }
    ]
    ```
