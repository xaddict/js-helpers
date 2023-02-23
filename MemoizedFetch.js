export default class MemoizedFetch {
  slug = 'memo';
  url = null;
  expirationTime = 8 * 60 * 60 * 1000;

  constructor() {
    console.log(this.constructor.name, this.slug, this.url);
    this.#fetchData();
  }

  async #fetchData() {
    console.log('fetchData', this.slug, this.url);
    const data = localStorage.getItem(this.slug);
    const expirationTimeKey = `${this.slug}-refresh`;
    const expirationTimestamp = localStorage.getItem(expirationTimeKey);

    if (data !== null && new Date().getTime() < expirationTimestamp) {
      return JSON.parse(data);
    }

    const response = await fetch(this.url);
    const newData = await response.json();

    localStorage.setItem(this.slug, JSON.stringify(newData));
    localStorage.setItem(
      expirationTimeKey,
      new Date().getTime() + this.expirationTime
    );

    return newData;
  }

  async get(key) {
    const data = await this.#fetchData();
    const value = data[key];
    return value;
  }
}
