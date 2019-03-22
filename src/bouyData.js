class BouyData {
  constructor() {
  }

  getBouyData(url) {
    return fetch(url)
    .then((response) => {
      let textResponse = response.text();
      return textResponse;
    });
  }

}

export { BouyData };