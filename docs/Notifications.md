# Notifications API Documentation

## Base URL

`https://api.yourapp.com/v1`

## 1. Create Notification

- **Endpoint:** `POST /notifications`
- **Description:** Create a new notification.
- **Request:**
  - **Headers:**
    - `Content-Type: application/json`
  - **Body:**
    ```json
    {
      "user_id": 1,
      "type": "like",
      "entity_id": 123
    }
    ```
- **Response:**
  - `201 Created`
    ```json
    {
      "id": 1,
      "user_id": 1,
      "type": "like",
      "entity_id": 123,
      "created_at": "2023-01-01T00:00:00Z",
      "read": false
    }
    ```
  - `400 Bad Request`
    ```json
    {
      "error": "Invalid input data"
    }
    ```

## 2. Get Notification by ID

- **Endpoint:** `GET /notifications/{id}`
- **Description:** Retrieve a notification by its ID.
- **Request:**
  - **Headers:**
    - `Content-Type: application/json`
  - **Parameters:**
    - `id: Notification ID`
- **Response:**
  - `200 OK`
    ```json
    {
      "id": 1,
      "user_id": 1,
      "type": "like",
      "entity_id": 123,
      "created_at": "2023-01-01T00:00:00Z",
      "read": false
    }
    ```
  - `404 Not Found`
    ```json
    {
      "error": "Notification not found"
    }
    ```

## 3. Mark Notification as Read

- **Endpoint:** `PUT /notifications/{id}/read`
- **Description:** Mark a notification as read.
- **Request:**
  - **Headers:**
    - `Content-Type: application/json`
  - **Parameters:**
    - `id: Notification ID`
- **Response:**
  - `200 OK`
    ```json
    {
      "message": "Notification marked as read"
    }
    ```
  - `404 Not Found`
    ```json
    {
      "error": "Notification not found"
    }
    ```

## 4. Delete Notification

- **Endpoint:** `DELETE /notifications/{id}`
- **Description:** Delete a notification by its ID.
- **Request:**
  - **Headers:**
    - `Content-Type: application/json`
  - **Parameters:**
    - `id: Notification ID`
- **Response:**
  - `204 No Content`
    ```json
    {
      "message": "Notification deleted successfully"
    }
    ```
  - `404 Not Found`
    ```json
    {
      "error": "Notification not found"
    }
    ```

## 5. List Notifications by User

- **Endpoint:** `GET /users/{user_id}/notifications`
- **Description:** Retrieve a list of all notifications by a user.
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
        "type": "like",
        "entity_id": 123,
        "created_at": "2023-01-01T00:00:00Z",
        "read": false
      },
      {
        "id": 2,
        "user_id": 1,
        "type": "comment",
        "entity_id": 456,
        "created_at": "2023-01-02T00:00:00Z",
        "read": true
      }
    ]
    ```

## Summary of Endpoints

- `POST /notifications`: Create a new notification.
- `GET /notifications/{id}`: Retrieve a notification by ID.
- `PUT /notifications/{id}/read`: Mark a notification as read.
- `DELETE /notifications/{id}`: Delete a notification by ID.
- `GET /users/{user_id}/notifications`: List all notifications by a user.
