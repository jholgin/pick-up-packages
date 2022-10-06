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
        Promise.resolve(json);
      } else {
        Promise.reject(json);
      }
    } catch (error) {
      Promise.reject(error);
    }
  }
}
