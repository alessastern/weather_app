class Api {
  constructor(headers) {
    this._headers = headers;
  }

  apiKey = "319acb9eb85f122885fa2f5bb3011a96";

  checkResponse(res) {
    return new Promise((resolve, reject) => {
      if (res.status === 204) {
        return resolve(res);
      }
      const func = res.status < 400 ? resolve : reject;

      res.json().then((data) => func(data));
    });
  }

  search = () => {};
}
export default new Api({
  "content-type": "application/json",
});
