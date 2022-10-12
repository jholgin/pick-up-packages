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

  async createOrder(bodycontent) {
    try {
      const url = `${process.env.REACT_APP_API_HOST}/orders/create`;
      const response = await fetch(url, {
        method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: bodycontent
      })
      const responseData = await response.json();
      if (response.ok){
        return Promise.resolve(responseData);
      } else {
        return Promise.reject(responseData);
      }
    } catch (error) {
      return Promise.reject(error)
    }
  }

  async getOrderById(orderId) {
    try {
      const url = `${process.env.REACT_APP_API_HOST}/orders/edit/${orderId}`
      const response = await fetch(url,{
        method:"GET",
      });

      const json = await response.json();

      if (response.ok) {
        return Promise.resolve(json);
      } else {
        return Promise.reject(json);
      }

    }catch(error) {
      return Promise.reject(error)
    }
  }

  async editOrder(orderId,bodycontent) {
    try {
      const url = `${process.env.REACT_APP_API_HOST}/orders/edit/${orderId}`
      const response = await fetch(url,{
        method:"PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: bodycontent,
      })
      const responseData = await response.json();
      if (response.ok){
        return Promise.resolve(responseData);
      } else {
        return Promise.reject(responseData);
      }

    }catch(error){
      return Promise.reject(error);
    }
  }
  async getOrdersByUserId(userId) {
    try {
      const url = `${process.env.REACT_APP_API_HOST}/orders/filter/${userId}`;

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
