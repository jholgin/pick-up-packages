export class OrderServices {
  async getOrders() {
    try {
      const url = `${process.env.REACT_APP_API_HOST}/orders`;

      const response = await fetch(url, {
        method: "GET",
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
