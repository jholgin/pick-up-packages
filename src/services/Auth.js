export class AuthServices {
  async registerUser(payload) {
    try {
      const url = `${process.env.REACT_APP_API_HOST}/auth/register`;

      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const json = await response.json();
      if (response.ok) {
        return Promise.resolve(json);
      } else {
        return Promise.reject(json);
      }
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async auth(payload) {
    try {
      const url = `${process.env.REACT_APP_API_HOST}/auth/login`;

      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const json = await response.json();
      if (response.ok) {
        return Promise.resolve(json);
      } else {
        return Promise.reject(json);
      }
    } catch (error) {
      return Promise.reject(error);
    }
  }
}
