[<- Go Back](./Documentation.md)

# Users API Endpoints
// ustoz rolni kim tanlashi garak i nerdan girizamiz?
## Base URL

> Base url: `https://api.yourapp.com/api/v1`

> All routes required administrator role

## 1. Get User by ID
**Authorization**: `Bearer <token>`
- **Endpoint:** `GET /users/{id}`
- **Request:**
  - **Headers:**
    - `Authorization: Bearer <token>`
  - **Parameters:**
    - `id: User ID`
- **Response:**
  - `200 OK`
    ```json
    {
      "id": 1,
      "username": "johndoe",
      "fullname": "John Doe",
      "email": "johndoe@example.com",
      "phone": "987654321",
      "profile_picture": "https://example.com/path/to/profile-picture.jpg",
      "bio": "This is a bio",
      "role": "User",
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

## 2. Update User

- **Endpoint:** `PUT /users/{id}`
- **Request:**
  - **Headers:**
    - `Authorization: Bearer <token>`
  - **Parameters:**
    - `id: User ID`
  - **Body:**
    ```json
    {
      "username": "john_doe_updated",
      "fullname": "John Doe",
      "email": "johndoe_updated@example.com",
      "phone": "987654321",
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
      "fullname": "John Doe",
      "email": "johndoe_updated@example.com",
      "phone": "987654321",
      "profile_picture": "https://example.com/path/to/new-profile-picture.jpg",
      "bio": "This is an updated bio",
      "role": "User",
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

## 3. Delete User

- **Endpoint:** `DELETE /users/{id}`
- **Request:**
  - **Headers:**
    - `Authorization: Bearer <token>`
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

## 4. List Users

- **Endpoint:** `GET /users`
- **Request:**
  - **Headers:**
    - `Authorization: Bearer <token>`
- **Response:**
  - `200 OK`
    ```json
    {
      "message": "Retrieve all users",
      "users": [
        {
          "id": 1,
          "username": "johndoe",
          "fullname": "John Doe",
          "email": "johndoe@example.com",
          "phone": "987654321",
          "profile_picture": "https://example.com/path/to/profile-picture.jpg",
          "bio": "This is a bio",
          "created_at": "2023-01-01T00:00:00Z",
          "updated_at": "2023-01-01T00:00:00Z",
          "role": "User"
        },
        {
          "id": 2,
          "username": "janedoe",
          "fullname": "John Doe",
          "email": "janedoe@example.com",
          "phone": "987654321",
          "profile_picture": "https://example.com/path/to/profile-picture.jpg",
          "bio": "This is another bio",
          "created_at": "2023-01-01T00:00:00Z",
          "updated_at": "2023-01-01T00:00:00Z",
          "role": "User"
        }
      ]
    }
    ```
