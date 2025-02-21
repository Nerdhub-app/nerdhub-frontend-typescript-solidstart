# Axios Facade Class Documentation

This `Axios` class provides a **isomorphic** wrapper around the `axios` HTTP client so that you do not have to worry about using different axios instance implementations based on the **runtime environment (i.e., client or server)**, simplifying API requests while ensuring strong TypeScript type inference. It provides static methods for common HTTP verbs: `get`, `post`, `put`, and `delete`.

---

## **Methods**

### **`Axios.get<TResponse>(...args: Parameters<typeof axios.get>)`**

Performs a `GET` request.

#### **Parameters**

- `url: string` – The endpoint URL.
- `config?: AxiosRequestConfig` – Optional Axios configuration object.

#### **Returns**

- `Promise<AxiosResponse<TResponse>>` – A promise resolving with the typed response.

#### **Example Usage**

```ts
import { UserEntity } from "~/features/user/user";

async function fetchUser(userId: number) {
  const response = await Axios.get<UserEntity>(`/users/${userId}`);
  console.log(response.data.email); // Typed as `UserEntity`
}
```
