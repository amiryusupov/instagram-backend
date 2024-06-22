[<- Go Back](./Documentation.md)

## User authorization endpoints

---

> Base url: `/api/v1/auth`

<br>

**POST** `/login`

```json
{
    "email": "johndoe@gmail.com",
    "password": "password"
}
```

**Response**

```json
{
    "message": "Successfuly login",
    "user": {
        "id": 5,
        "username": "johndoe",
        "email": "johndoe@gmail.com",
        "phone": "99891 123-45-67",
        "fullname": "John Doe",
        "birthday": "10.01.1996",
        "profile_picture": "your picture",
        "bio": "your previous biography",
        "role": "User",
        "created_at": "2023-01-01T00:00:00Z",
        "updated_at": "2023-01-01T00:00:00Z"
    },
    "token": "eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4c"
}
```

---

**POST** `/register`

```json
{
    "username": "johndoe",
    "email": "johndoe@gmail.com",
    "phone": "998 90-000-00-00",
    "password": "password",
    "fullname": "John Doe",
    "profile_picture": "your picture",
    "bio": "Detailed biography of yourself",
    "birthday": "10.01.1996",
}
```

**Response**

```json
{
    "message": "Verification code sent to your email",
    "email": "johndoe@gmail.com",
    "timeOut": 300, 
    "verificationId": "aade4420-533c-45bc-8103-cf6632abb342"
}
```
---

**GET** `/status?id=<verificationId>`

**Response**

```json
{
    "message": "Verification code sent to email",
    "email": "johndoe@gmail.com",
    "timeOut": 70, 
}
```

or

```json
{
    "message": "Email successfuly verified",
    "email": "johndoe@gmail.com"
}
```

---


**POST** `/resend`

```json
{
    "email": "johndoe@gmail.com"
}
```

**Response**

```json
{
    "message": "Verification code sent to email",
    "email": "johndoe@gmail.com",
    "timeOut": 300, 
    "verificationId": "aade4420-533c-45bc-8103-cf6632abb342"
}
```

---

**POST** `/verify`

```json
{
    "code": "21391",
    "verificationId": "aade4420-533c-45bc-8103-cf6632abb342"
}
```

**Response**

```json
{
    "message": "Successfuly registered",
    "user": {
        "id": 5,
        "email": "johndoe@gmail.com",
        "phone": "99891 123-45-67",
        "fullname": "John Doe",
        "birthday": "10.01.1996",
        "profile_picture": "your picture",
        "bio": "Biography of yourself",
        "role": "User",
        "created_at": "2023-01-01T00:00:00Z","updated_at": "2023-01-01T00:00:00Z"
    },
    "token": "eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4c"
}
```