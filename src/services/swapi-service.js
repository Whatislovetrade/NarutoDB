export default class SwapiService {
  _apiBase = 'https://dattebayo-api.onrender.com';

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`);
    }
    return await res.json();
  }

  async getAllPeople() {
    const res = await this.getResource(`/characters`);
    return res.characters;
  }

  getPerson(id) {
    return this.getResource(`/characters/${id}`);
  }

  async getAllClans() {
    const res = await this.getResource(`/clans`);
    return res.clans;
  }

  getClan(id) {
    return this.getResource(`/clans/${id}`);
  }

  async getAllVillages() {
    const res = await this.getResource(`/villages`);
    return res.villages;
  }

  getVillage(id) {
    return this.getResource(`/villages/${id}`);
  }
}

 
  
