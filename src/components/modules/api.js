class Api {
  constructor(headers, api_key) {
    this._headers = headers;
    this.apiKey = api_key;
  }

  checkResponse(res) {
    return new Promise((resolve, reject) => {
      if (res.status === 204) {
        return resolve(res);
      }
      const func = res.status < 400 ? resolve : reject;

      res.json().then((data) => func(data));
    });
  }

  search = (url) => {
    return fetch(url).then(this.checkResponse);
  };
}
export default new Api(
  {
    "content-type": "application/json",
  },
  "319acb9eb85f122885fa2f5bb3011a96"
);
