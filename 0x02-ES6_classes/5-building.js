export default class Building {
  constructor(sqft) {
    if (this.constructor !== Building) {
      const prop = Object.getOwnPropertyNames(this.constructor.prototype);
      if (!prop.find((evac) => evac === 'evacuationWarningMessage')) {
        throw new Error('Class extending Building must override evacuationWarningMessage');
      }
    }
    this.sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(sqft) {
    if (typeof sqft !== 'number') {
      throw new TypeError('sqft must be a number');
    }
    this._sqft = sqft;
  }
}
